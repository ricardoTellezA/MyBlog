import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';



const Nav = styled.nav`

display: flex;
justify-content: center;
padding-bottom: 0rem;
@media(max-width:768px){
    padding-bottom: 0;
    align-items: center;
    

}
`;

const NavLink = styled(Link)`
color: #FFF;
font-size: 1.6rem;
font-weight: 700;
line-height: 1;
font-family: 'PT Sans', sans-serif;
text-decoration: none;
padding: 1rem;
margin-right: 1rem;


&:last-of-type{
    margin-right: 0;
}


&.active-pag{
    border-bottom: 2px solid #FFF;
}

`;

const Navegation = () => {
    return (
       <Nav>
           <NavLink to={'/'} activeClassName="active-pag">Inicio</NavLink>
           <NavLink to={'/about'} activeClassName="active-pag">Acerca de mi</NavLink>
       </Nav>
    )
}

export default Navegation;
