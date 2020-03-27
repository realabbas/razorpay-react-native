import React, { Component } from "react";
import RazorPay from "./src/app";
import axios from "axios";

class Cart extends Component {
  state = {
    orderId: ""
  };

  componentDidMount() {
    // This will generate the Order Id
    axios({
      method: "POST",
      url: "https://api.razorpay.com/v1/orders",
      headers: {
        "content-type": "application/json",
        Authorization: "Basic YOUR_AUTH_CODE"
      },
      data: JSON.stringify({
        amount: 100,
        currency: "INR",
        receipt: "receipt81",
        payment_capture: 1
      })
    })
      .then(res => {
        console.warn(res);
        this.setState({
          orderId: res.data.id // Extracting the OrderId from razorpay response data
        });
      })
      .catch(err => {
        console.warn(err);
      });
  }

  render() {
    return (
      <RazorPay
        amount={100}
        name="MrRoom" // The Company name will appear on the payment page
        contact_name="Ali" // Payer name
        email="irizviali@gmail.com" // Payer email id
        contact="XXXXXXXXXXX" // Payer mobile Number
        orderId={this.state.orderId}
      />
    );
  }
}

export default Cart;
