import  {  useState } from 'react';
import { useQuery } from 'react-query';
import getProducts from './fetching/getproduct';
import { CartItemType } from './fetching/getproduct';
import Card from './components/Card';
import {  StyledButton, Wrapper } from './style/App.style';
import { Badge, Drawer, Grid, LinearProgress} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DrawerCrad from './components/DrawerCrad';
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] =  useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  const addToCard=(clickItem:CartItemType)=>{
    setCartItems(prev => {
      console.log(prev)
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickItem, amount: 1 }];
    });
  };
  const getTotalItem=(items: CartItemType[])=>items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleRemoveFromCard=(clickItem:CartItemType)=>{
    setCartItems(prev =>{
      if(clickItem.amount===1){
        return prev.filter(item=>item.id!==clickItem.id)
      }
      return prev.map(item=>
        item.id === clickItem.id
        ? { ...item, amount: item.amount - 1 }
        : item
        )

    })
    
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>
  

  return (

   <Wrapper>
    <h1>Shopping Cart</h1>
        <Drawer PaperProps={{color:"green"}} anchor='right' open={cartOpen} onClose={()=> setCartOpen(false)}  >
          {<DrawerCrad
          addToCart={addToCard}
          cartItems={cartItems}
          removeFromCart={handleRemoveFromCard}
          />}
      
        </Drawer>
        <StyledButton onClick={()=> setCartOpen(true)} >
          <Badge badgeContent={getTotalItem(cartItems)} color="error">
            <AddShoppingCartIcon  ></AddShoppingCartIcon>

          </Badge>
        </StyledButton>
    <Grid container columnSpacing={5} rowSpacing={5}   >
    {data?.map((item,index)=><Grid item key={item.id} sm={4} xs={12} ><Card  item={item}  addToCard={addToCard} /></Grid>)}
    </Grid>

     
   </Wrapper>



  
  
 
 

 
   
    


  
  );
}

export default App;




