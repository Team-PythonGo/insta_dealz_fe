// import "bulma/css/bulma.css";




const CheckoutItems = () => {
  return (
    <>
    <div className="hero is-primary">
      <div className="hero-body container">
        <h4 className="title">Checkout</h4>
      </div>
    </div>
    <br />
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
                Place Order
              </button>
            </div>
          </div>
        </div>
      
      </div>
      <div className="card">
        <div className="card-header">
          <h6 className="title"> Basic Information</h6>
        </div>
        <div className="card-body">
        <div className="col-md-5">
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
            <tr>
              <td>hello</td>
              <td>this is</td>
              <td>a placeholder</td>
              <td>for everything</td>
            </tr>
          </tbody>     
        </table>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default CheckoutItems;