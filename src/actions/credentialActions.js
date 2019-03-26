import { CREDENTIAL_INFO, CATEGORIES_LIST, PRODUCT_LIST, SELECTED_ITEM_LIST } from './types';
import categoriesData from '../Json/categories.json';
import credInfo from '../Json/credential.json';
import productInfo from '../Json/productList.json';


export const credentials = () => (dispatch) => {
    dispatch({
      type: CREDENTIAL_INFO,
      payload: credInfo});
}

export const categoriesListCall = () => (dispatch) => {
  dispatch({
    type: CATEGORIES_LIST,
    payload: categoriesData});

}

export const productListCall = (productCode) => (dispatch) => {
  const productFilterList =  productInfo.filter((prod)=> prod.categories_id == productCode);
  dispatch({
    type: PRODUCT_LIST,
    payload: productFilterList});

}

export const selectedItemForBuy = (selectedInfo,newSelection) =>(dispatch) => {
  let addToChart = selectedInfo;
  let checkForOldValue = false;
  addToChart.map((chart)=>{
      if(chart.product_id === newSelection.product_id){
        chart.product_Quantity = newSelection.product_Quantity;
        checkForOldValue = true;
      }
  });
  if(!checkForOldValue){
    addToChart.push(newSelection);
  }
  
  dispatch({
    type: SELECTED_ITEM_LIST,
    payload: addToChart});
}