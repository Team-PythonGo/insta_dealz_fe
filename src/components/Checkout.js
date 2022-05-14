// import "bulma/css/bulma.css";

import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
// import { propTypes } from "react-bootstrap/esm/Image";
import { Accordion } from "react-bootstrap";
// import swal from 'sweetalert';
// import {Cart} from './Cart';

// import React from "react";
// import withContext from "../withContext";
// import CartItem from "./CartItem";
// import {Link } from "react-router-dom";


const CheckoutItems = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([props]);
 

  let totalCartPrice = 0;


  // if(!localStorage.getItem('auth_token')){
  //   history.push('/');
  //   swal('Warning','Error');
  // }

  useEffect(()=> {
    let isMounted = true;
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/`).then(res=>{
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
    <div className="column is-half ml-2 ">
    <div className="card">
      <div className="card-header">
      <h6 className="title"> Shipping Information</h6>
      </div>
      <div className="card-body d-flex flex-wrap">
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
</div>

<h6 className="title"> Payment Information</h6>

<div class="padding">
<div class="row">
<div class="col-sm-13">

<strong>Credit Card</strong>&nbsp;&nbsp;
<small>enter your credit card information below</small>
</div>

<div class="row">
<div class="col-sm-12">
<div class="form-group">
    
<br />
<label for="name">Name</label>
<input class="form-control" id="name" type="text" placeholder="Enter your name"></input>
</div>
</div>
</div>



<div class="row">
<div class="col-sm-13">
<div class="form-group">
<br />
<label for="ccnumber">Credit Card Number</label>


<div class="input-group">
<input class="form-control" type="text" placeholder="0000 0000 0000 0000" autocomplete="email"></input>

<div class="input-group-append">
<div class="input-group-append">
<span class="input-group-text">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
</svg>
</span>
</div>
</div>
</div> 
</div>
</div>
</div>

<div class="row">
<div class="form-group col-sm-4">

<br />

<label for="ccmonth">Month</label>
<select class="form-control" id="ccmonth">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
</select>
</div>
<div class="form-group col-sm-4">

<br />

<label for="ccyear">Year</label>
<select class="form-control" id="ccyear">
<option>2022</option>
<option>2023</option>
<option>2024</option>
<option>2025</option>
<option>2026</option>
<option>2027</option>
</select>
</div>
<div class="col-sm-4">
<div class="form-group">

<br />

<label for="cvv">CVV/CVC</label>
<input class="form-control" id="cvv" type="text" placeholder="123"></input>
</div>
</div>
</div>

</div>

</div>



          
      


<br />
          <div className="col-md-12">
            <div className="form-group text-end">
            <br />
              <button type="button" className="btn btn-primary">
                Payment
              </button>
            </div>
          </div>


        </div>
      </div>

      </div>

    
      <div className="column is-two-fifths ml-5  ">
      <div className="card ">
        <div className="card-header ">
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
            {cart.map((cart,idx)=> {
              totalCartPrice += cart.price * cart.amount;
              return(
            <tr key={idx}>
              <td>{cart.name}</td>
              <td>{cart.price}</td>
              <td>{cart.amount}</td>
              <td>{cart.price * cart.amount}</td>
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