import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product(props) {
    return (
        <div className="product"> 
            <div className="productInfo">
                <p>{props.title}</p>
                <p className="prodPrice">
                  <small>Rs. </small>
                  <strong>{props.price}</strong>
                </p>
                <p className="stars">
                    {[...Array(props.rating)].map(star => {
                        return <StarIcon style={{ color: "yellow" }}/>;
                    })}
                </p>
            </div> 
            <img src={props.image} alt="images" />
            <button>Add to Cart</button>         
        </div>
    );
}

export default Product;