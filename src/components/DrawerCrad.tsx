import React from 'react'
import { CartItemType } from '../fetching/getproduct';
import { Wrapper } from '../style/DrawerCrad';
import DrawerCardItem from './DrawerCardItem';

interface Prop{
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (clickedItem: CartItemType) => void;
}

const DrawerCrad = ({addToCart,cartItems,removeFromCart}:Prop) => {
  return (
    <Wrapper>
     <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <DrawerCardItem
        key={item.id}
      item={item}
      addToCart={addToCart}
      removeFromCart={removeFromCart}

        
        />
      ))}
    </Wrapper>
  )
}

export default DrawerCrad
export {}