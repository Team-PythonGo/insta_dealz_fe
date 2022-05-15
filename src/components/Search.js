import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'




const SearchComponent = props => {
  console.log('this is props within search', props);
  return (
    <div>
      <Input type='text' placeholder='Search...' onChange={event => props.onChange(event.target.value)} />
    </div>
  )

}


export default SearchComponent;