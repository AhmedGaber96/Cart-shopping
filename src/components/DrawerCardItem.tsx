import Button from '@mui/material/Button';
import { Wrapper } from '../style/DrawerCardItem';
import { CartItemType } from '../fetching/getproduct';
interface Prop{
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (clickedItem: CartItemType) => void;
  }
  

 
 const DrawerCardItem = ({item,addToCart,removeFromCart}:Prop) => {
   return (
         <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
    
     
   )
 }
 
 export default DrawerCardItem






