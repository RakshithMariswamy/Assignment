import React, { Component } from 'react';
import './categories.css';
import TabCard from "../tabCards/tabCards";



class Categories extends Component {

   redirectToSelectedItem(catInfo){
      // console.log(this.props);
    this.props.history.push(`/selectitem/${catInfo.categories_id}`);
   }


    render() { 
      console.log(this.props);
        return (
            <React.Fragment>
                <div className="categories-block flex-wrapper">
                  {this.props.categories.map((catInfo) => 
                     <div onClick={()=>this.redirectToSelectedItem(catInfo)} key={catInfo.categories_name}>
                       <TabCard categoriesInfo={catInfo}/>
                     </div>
                  )}
                  
                </div>
                
            </React.Fragment>
          );
    }
}
 
export default Categories;