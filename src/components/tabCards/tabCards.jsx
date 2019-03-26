import React, { Component } from 'react';
import RenderImage from '../../stateLesComponents/ImageReneder/imageRender';
import CounterList from '../countersList/counterList';
class TabCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {categoriesInfo } = this.props;
        const checkCategories = 'submain';
        return ( 
        <div className="card-details">
            <div className="card card-width margin-tab-card">   
                <RenderImage imageUrl={categoriesInfo.categories_image}/>                 
                <div className="card-body">
                    <h5 className="card-title">{categoriesInfo.categories_name}</h5>
                </div>
                { categoriesInfo.categories_Type === checkCategories ?
                <div>
                  <CounterList selectedCategories={categoriesInfo}/>
                </div>
                
                :<div></div>}
            </div>
        </div> );
    }
}
 
export default TabCard;