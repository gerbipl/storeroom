import React from 'react';
import List from '../../components/List/List'
import AppContext from '../../context';

const ShoppingListView = () => ( 
  <AppContext.Consumer>
    {(context => (
      <List items={context.getProductsToShoppingList()} />
    ))}
  </AppContext.Consumer>
);

export default ShoppingListView;