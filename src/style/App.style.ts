import { IconButton } from "@mui/material";
import styled from "styled-components"

export const Wrapper = styled.div`
background-color: #111827;
margin: 0;
padding: 20px;
h1{
  font-size: 72px;
  text-align: center;
  background: -webkit-linear-gradient(180deg,#ffc96c 0%, #a90000     );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  }
`
export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  width: 45px;
  height: 45px;
  background-color:#Fbbf24;
  &:hover{
    background-color:white;
  }

`;