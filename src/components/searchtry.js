// src/components/SearchList.js

import React from 'react';
import NewProduct from './ProductList';

function SearchList({ filteredPersons }) {
  const filtered = NewProduct.map(person => <div key={person.id} person={person} />);
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;