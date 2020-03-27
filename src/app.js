import React, { Component } from "react";
import RazorpayCheckout from "react-native-razorpay";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

class Razorpay extends Component {
  state = {};
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          var options = {
            description: "Credits towards consultation",
            image: "https://i.imgur.com/3g7nmJC.png",
            currency: "INR",
            key: this.props.key, // rzp_test_lpoFU3fTbYZDu3 Something of this type!
             amount: this.props.amount,
            name: this.props.name,
            order_id: this.props.orderId, //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
            prefill: {
              email: this.props.email,
              contact: this.props.contact,
              name: this.props.contact_name
            },
            theme: { color: "#e23737" }
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              console.warn(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              console.warn(`Error: ${error.code} | ${error.description}`);
            });
        }}
      >
        <Text style={styles.button_text_small}>
          Pay
          <Text style={styles.button_text}> ₹ 1,500</Text>
        </Text>
      </TouchableHighlight>
    );
  }
}

export default Razorpay;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(249,194,1)",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5
  },
  button_text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Bold"
  },
  button_text_small: {
    fontFamily: "Poppins-Light",
    color: "white",
    fontSize: 16
  }
});
