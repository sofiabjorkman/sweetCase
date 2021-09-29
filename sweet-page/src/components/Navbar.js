import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Navbar() {
    
    return (
        <div>
            <nav>
            <ManageNav>
                <p>Magda</p>
                <i className="fa fa-chevron-down"></i>
            </ManageNav>
               <NavContainer>
                   <NavText>
                       <SweetLink to="/">Sweet</SweetLink>
                       <MenuLink to="/application">APPLICATIONS</MenuLink> 
                       <li>DATA SOURCES</li>
                       <li>SAVED ITEMS</li>
                       <li>USER MANAGEMENT</li>
                       <li>SETTINGS</li>
                    </NavText>
                    <Support>
                       <li>SUPPORT</li>
                       <li>Knowledge base</li>
                       <li>Contact us</li>
                    </Support>
               </NavContainer>
            </nav>
        </div>
    )
}

export default Navbar

const NavContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 100vh;
    background-color: rgb(68, 67, 83);
`
const NavText = styled.ul`
   list-style: none;
   color: white;
   padding: 0;

   li {
       padding-bottom: 10px;
       padding-top: 10px;
       padding-left: 40px;
   }
   li:hover {
       background-color: rgb(48, 47, 70);;
   }
`
const SweetLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px; 
  text-decoration: none;
  color: white;
  font-size: 22px;
  padding-left: 40px;
`
const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-top: 10px; 
  text-decoration: none;
  color: white;
  padding-left: 40px;
  :hover {
       background-color: rgb(48, 47, 70);;
   }
`
const Support = styled.ul`
   list-style: none;
   color: white;
   padding: 0;
   
   li {
    padding-bottom: 10px;
       padding-top: 10px;
       padding-left: 40px;
   }
   li:hover {
       background-color: rgb(48, 47, 70);;
   }
`
const ManageNav = styled.div`
   display: flex; 
   justify-content: flex-end;
   align-items: center;
   background-color: white;
   border: 1px solid lightgray;

   i {
    margin-right: 40px;
    margin-left: 20px;
   }
`
