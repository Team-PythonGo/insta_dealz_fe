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
      <div class="column">
      <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
      </input>
  </div>
</div>
    <div class="columns is-mobile">
      <div class="column">
      <div class="field">
  <label class="label">Street Address</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
      </input>
  </div>
</div>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
      </div>
    </div>
    
    
          
    </div>
    </div>
    </>
  )
}
export default CheckoutItems;