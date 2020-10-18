import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import {  Table,Button } from "reactstrap";
import alertfy from "alertifyjs";

class CartDetail extends Component {

    removeFromCart(item){
        this.props.actions.removeFromCart(item);
        alertfy.error(item.productName + "deleted from your cart");
      }
    render() {
        return (
            <div>

<Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map(cartItem=>(
                <tr key={cartItem.product.id}>
               <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>
                  <Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>
                    Delete
                  </Button>
                </td>
                </tr>
              ))}
               
               
              
            </tbody>
          </Table>
                
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      },
    };
  }
  
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
  