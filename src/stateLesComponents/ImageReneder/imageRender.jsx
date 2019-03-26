import React from 'react';

export default function RenderImage(props) {
    return (
      <div className="image-block">
        <img className="cat-image-disp" src={props.imageUrl} alt={props.imageUrl}/>
      </div>
    );
  }