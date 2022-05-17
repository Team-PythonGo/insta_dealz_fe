
import withContext from "../withContext";
import { Carousel } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import ad from '../images/ad-1.png';
import adTwo from '../images/ad-2.png';
import adThree from '../images/ad-3.png'


const CheckoutItems = (props) => {

  const {cart} = props.context;
  console.log(cart);

  let totalCartPrice = 0;

  const handleClick = () => {
      alert('Your Order has been Processed!')
      }


  return (
    <>
    <div className="hero is-primary">
      <div className="hero-body container">
        
        <h4 className="title">Checkout</h4>
      </div>
    </div>
    <div className="columns is-centered">
    <div className="column ">
    <Carousel>
  <Carousel.Item>
  <Figure.Image width={1300}
        height={200}
        src={ad}
        alt="games-sale"
      />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Figure.Image width={1300}
        height={200}
        src={adTwo}
        alt="produce-sale"
      />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Figure.Image width={1300}
        height={200}
        src={adThree}
        alt="brandonImage"
      />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>



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
              <button onClick={handleClick} type="submit" className="btn btn-primary">
                Order
              </button>
            </div>
          </div>
          

        </div>
      </div>

      </div>

    
      <div className="column is-two-fifths ml-5  ">
      <div className="card ">
        <div className="card-header ">
          <h6 className="title m-auto"> Cart </h6>
        </div>
        <div className="card-body">
        <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
              <tr>
                <th width="50%">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
          </thead>    
          <tbody>
            {Object.keys(cart).map((key,idx)=> {
              totalCartPrice += cart[key].product.price * cart[key].amount;
              return(
            <tr key={idx}>
              <td>{cart[key].product.name}</td>
              <td>${cart[key].product.price}</td>
              <td >{cart[key].amount}</td>
              <td className="has-text-centered">${cart[key].product.price * cart[key].amount}</td>
            </tr>
            )
          })}
          <tr>
            <td colSpan="2" className="text-end fw-bold">Total</td>
            <td colSpan="2" className="text-end fw-bold">${totalCartPrice}</td>
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
export default withContext(CheckoutItems);