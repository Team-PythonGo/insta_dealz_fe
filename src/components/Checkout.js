// import "bulma/css/bulma.css";

import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import { propTypes } from "react-bootstrap/esm/Image";
// import swal from 'sweetalert';
// import {Cart} from './Cart';

// import React from "react";
// import withContext from "../withContext";
// import CartItem from "./CartItem";
// import {Link } from "react-router-dom";


const CheckoutItems = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  let totalCartPrice = 0;

  // if(!localStorage.getItem('auth_token')){
  //   history.push('/');
  //   swal('Warning','Error');
  // }

  useEffect(()=> {
    let isMounted = true;
    axios.get('/localhost:3001/products').then(res=>{
      if(isMounted)
      {
        if(res.data.status === 200)
        {
          setCart(res.data.cart);
          setLoading(false);
        }
        // else if(res.data.status === 401)
        // {
        //   history.pushState('/');
        //   swal('Warning','Error');
        // }
      }
    });
    return() => {
      isMounted = false
    };
  }, [history]);
  // if(loading){
  //   return <h4>Loading Product Detail...</h4>
  // }
  return (
    <>
    <div className="hero is-primary">
      <div className="hero-body container">
        
        <h4 className="title">Checkout</h4>
      </div>
    </div>
    <br />



    
    <div className="columns">
    <div className="column is-half ">
    <div className="card">
      <div className="card-header">
      <h6 className="title"> Basic Information</h6>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>First Name</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Last Name</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Phone Number</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label>Email Address</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="form-group mb-3">
              <label>Full Address</label>
              <textarea type="text" name="first-name" className="form-control"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4">
            <div className="form-group mb-3">
              <label>City</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label>State</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label>Zip Code</label>
              <input type="text" name="first-name" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group text-end">
              <button type="button" className="btn btn-primary">
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      </div>

    
      <div className="column is-full d-flex flex-wrap">
      <div className="card ">
        <div className="card-header d-flex flex-wrap">
          <h6 className="title"> Cart </h6>
        </div>
        <div className="card-body">
        <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
              <tr>
                <th width="50%">Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
          </thead>    
          <tbody>
            {/* cart instead of props.Cart works */}
            {props.Cart.map((item,idx)=> {
              totalCartPrice += item.product.price * item.amount;
              return(
            <tr key={idx}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.amount}</td>
              <td>{item.product.price * item.amount}</td>
            </tr>
            )
          })}
          <tr>
            <td colSpan="2" className="text-end fw-bold">Grand Total</td>
            <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
          </tr>
          </tbody>     
        </table>
      </div>
        </div>
      </div>
    </div>
    </div>
          
    </>
  )
}
export default CheckoutItems;