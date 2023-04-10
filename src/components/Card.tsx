
import React from 'react'
import { CartItemType } from '../fetching/getproduct';
import { Wrapper } from '../style/Card.style';
import Button from '@mui/material/Button';



interface props {
  item: CartItemType
  addToCard:(clickItem:CartItemType)=>void
}



const Card = ({ item,addToCard }: props) => {
  
  
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
         <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
          
          

         </div>
         <Button  variant='contained' fullWidth color="error" onClick={()=>addToCard(item)}>Add to Card</Button>
    </Wrapper>




  )

}
export default Card





export { }