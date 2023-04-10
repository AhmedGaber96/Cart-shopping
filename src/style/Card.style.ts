import styled from "styled-components"
export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #1f2937;
  border: 0px solid transparent;
  border-radius: 20px;
  box-shadow: 5px 4px 5px #01070f;
 
  /* &::after{
    content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px; 
  padding: 1px; 
  background: linear-gradient(216deg, rgba(34,193,195,1) 0%, rgba(253,45,133,1) 100%);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude; 
  } */

 


  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: sans-serif;
    padding: 1rem;
    height: 100%;
    color:  #B2BAC2;

  }

  h2{
    color:  #f43f5e;
    font-size: 20px;
    font-weight: bolder;
  }
  h3{
    color: #Fbbf24;
  }

`;