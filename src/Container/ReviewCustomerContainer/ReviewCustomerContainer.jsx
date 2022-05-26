import React from "react";
import ReviewCustomer from "../../Component/ReviewCustomer/ReviewCustomer";
import './ReviewCustomerContainer.css';

function ReviewCustomerContainer(){
    return(
        <div className="review-customer-container">
            <ReviewCustomer />
        </div>
    );
}

export default ReviewCustomerContainer;