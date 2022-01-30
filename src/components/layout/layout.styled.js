import styled from "@emotion/styled";

export const Head = styled.div`
position:fixed;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
top: 10px;
left:10px;
z-index:5;
background-color:rgba(250,248,250,0.8);
width:100%;
`
export const Title = styled.main`
color:red;

`

export const Footer = styled.main`
position: fixed;
bottom:0;
width:100%;
/* background-color:whitesmoke; */
`

export const NavMenu = styled.ul`
list-style:none;
text-decoration:none;
display: flex;
flex-direction:row;
padding: 0;
margin: 0;
`