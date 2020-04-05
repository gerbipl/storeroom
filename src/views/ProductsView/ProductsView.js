import React from 'react';
import List from '../../components/List/List'
import AppContext from '../../context';

const ProductsView = () => ( 
  <AppContext.Consumer>
    {(context => (
      <List items={context.products} />
    ))}
  </AppContext.Consumer>
);

export default ProductsView;