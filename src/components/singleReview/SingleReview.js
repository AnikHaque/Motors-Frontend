import React from 'react';
import ReactStars from "react-rating-stars-component";
import './SingleReview.css';
const SingleReview = ({ review }) => {
    // const {service} = props;
    const { _id, name,description,price, img } = review; 
    const firstExample = {
      size: 30,
      value:price,
      edit: false,
      
      
    };
    
    return (
        <div className='m-review'>
            
  <div class="col bg-review single-review h-100">
    <img src={img} className='img-fluid '></img>
  <h4 class="fw-bold mt-2">{name}</h4>
        <p class="">"{description}"</p>
        <ReactStars {...firstExample}  />
    
</div>

</div>
      
    );
          
          };
        
          
export default SingleReview;