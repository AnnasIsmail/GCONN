import React from "react";
import OrderCustomer from "../../Component/OrderCustomer/OrderCustomer";
import './OrderCustomerContainer.css';

function OrderCustomerContainer(){
    return(
        <div className="order-customer-container">
            <OrderCustomer />
            <OrderCustomer />
            <OrderCustomer />
            <OrderCustomer />
            <OrderCustomer />
        </div>
    );
}

export default OrderCustomerContainer;