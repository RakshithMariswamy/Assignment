import { CREDENTIAL_INFO, CATEGORIES_LIST, PRODUCT_LIST, SELECTED_ITEM_LIST } from '../actions/types';

const initialState = {
    credential: [],
    categoriesList: [],
    productList:[],
    selectedToBuy:[]
}

export default function(state = initialState, action) {
    switch(action.type){
        case CREDENTIAL_INFO:
           return {
               ...state,
               credential: action.payload
           };
           case CATEGORIES_LIST:
           return {
               ...state,
               categoriesList: action.payload
           };
           case PRODUCT_LIST:
           return {
               ...state,
               productList: action.payload
           };
           case SELECTED_ITEM_LIST:
           return {
               ...state,
               selectedToBuy: action.payload
           };
        default: return state;
    }
}