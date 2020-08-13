import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styled, {keyframes} from 'styled-components'
import Logo from '../components/images/logo'
import { navigate } from '@reach/router';

import colors from '../components/colors'

const slideIn = keyframes`
0%{
  right:-100%
}
100%{
  right:0%;
}
`
const slideOut = keyframes`
0%{
  right:0%
}
100%{
  right:-100%;
}
`
const LinksWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  flex-wrap:wrap;
  max-width:960px;
  margin:0px auto;
  padding:20px 0px;

  font-weight: bolder;
  font-size:20px;
  z-index:102;
  *{
    text-decoration:none;
    color:${colors.olive};
    transition:0.5s;
    :hover{
      transition:0.5s;
      color:black;
    }
  }
  @media screen AND (max-width:1000px){
    position: fixed;
    display:${props => props.isFreshLoad ? 'none' : 'flex'};
    right:${props => props.isOpen ? '0%' : '-100%'};
    animation: ${props => props.isOpen ? slideIn: slideOut} 0.5s ease-in;
    top:0px;
    bottom:0px;
    
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    width:90vw;
    height:100vh;
    background-color:${colors.beige};
    text-align:center;
    font-size:22px;
    font-weight:bolder;
    line-height:1.2rem;

  }
`
const Dropdown = styled.div`
z-index: 99;
  position:relative;
  .dropdown_elements{
    font-size:18px;
    display:none;
  }
  :hover{
    .dropdown_elements{
      display:block;
      position:absolute;
      bottom:0px;
      left:50%;
      transform: translate(-50%, 100%);
      background-color:${colors.beige};
      width:max-content;

      text-align:center;
      padding:10px;
      > *{
        display:block;
        margin:3px 0px;
      }
    }
    > *:first-child::after{
      border-color:${colors.text}
    }
  }
  > *:first-child::after{
    margin-left:5px;
    content:' ';
    border: 1px ${colors.olive} solid;
    border-top:none;
    border-left:none;
    width:6px;
    height:6px;
    transform:rotate(45deg);
    display:inline-block;
  }
  .current::after{
    border-color:${colors.text}
  }

  @media screen AND (max-width:1000px){
    .dropdown_elements{
      font-size:19px;
      font-weight:lighter;
      display:block;
      > * {
        display:block;
        margin:20px 10px;
      }
      padding:0px;
    }
    :hover{
        .dropdown_elements{
        display:block;
        position:static;
        bottom:initial;
        left:initial;
        transform: translate(0%, 0%);
        background-color:initial;
        width:initial;
        text-align:center;
        padding:0px;
        > * {
          display:block;
          margin:20px 10px;
        }
      }
    }
  }
`

const MobileMenu = styled.div`
  width:30px;
  height:30px;
  background-color:${colors.olive};
  position:fixed;
  display:block;
  right:20px;
  top:20px;
  z-index:101;

  cursor:pointer;
  span{
    display:block;
    width:20px;
    height:3px;
    background-color:white;
    margin:5px auto;
  }

  @media screen AND (min-width:1000px){
    display:none;
  }

`
const linkStyle = {
  color: colors.olive,
  textDecoration: 'none'

}



const Header = ({ siteTitle }) => {
  //open and close mobile menu
const [isOpen, setIsOpen] = useState(false);
const [isFreshLoad, setIsFreshLoad] = useState(true);

const clickHandler = () => {
  setIsOpen(!isOpen);
  setIsFreshLoad(false);
}
const nav = (e) => {
  e.preventDefault();
  setIsOpen(!isOpen);
  navigate(`/hebergements#gite`);
}
const navChambres = (e) => {
  e.preventDefault();
  setIsOpen(!isOpen);
  navigate(`/hebergements#chambres`);
}
const navGrandeSalle = (e) => {
  e.preventDefault();
  setIsOpen(!isOpen);
  navigate(`/evenements#grandeSalle`);
}
const navCuve = (e) => {
  e.preventDefault();
  setIsOpen(!isOpen);
  navigate(`/evenements#cuve`);
}

return (
  <header
    style={{
      background: colors.beige,
      // position:'fixed',
      // top:'0',
      // zIndex:'100',
      // width:'100vw'
    }}
  >
    <div style={{width:`300px`, margin:'auto', padding:'10px',boxSizing:'content-box'}}>
      <Logo />
    </div>
    <LinksWrapper isOpen={isOpen} isFreshLoad={isFreshLoad}>
      <Link 
      to="/"
    
      activeStyle={{color:colors.text}}
      >
        Accueil
      </Link>
      <Dropdown>
          <Link 
          to="/hebergements"
        
          activeStyle={{color:colors.text}}
          activeClassName="current"
          >
            Hébergements
          </Link>
          <div className="dropdown_elements">
              <a href="/hebergements#chambres" onClick={navChambres}>
              Les chambres d’hôte
              </a>
              <a href="/hebergements#gite" onClick={nav}>
                Le gîte
              </a>
          </div>
      </Dropdown>
      <Dropdown>
        <Link 
        to="/evenements"
      
        activeStyle={{color:colors.text}}
        >
        Événements
        </Link>
        <div className="dropdown_elements">
          <a href="/evenements#grandeSalle" onClick={navGrandeSalle}>
          Grande salle de réception du chateau
          </a>
          <a href="/evenements#cuve" onClick={navCuve}>
            Salle des cuves et son bar
          </a>
        </div>
      </Dropdown>
      <Link 
      to="/agriculture"
    
      activeStyle={{color:colors.text}}
      >
        Agriculture
      </Link>
      <Link 
      to="/histoire"
    
      activeStyle={{color:colors.text}}
      >
       Histoire
      </Link>
      <Link 
      to="/contact"
    
      activeStyle={{color:colors.text}}
      >
       Contact
      </Link>
    </LinksWrapper>
    <MobileMenu onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </MobileMenu>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
