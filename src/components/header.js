import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../components/images/logo'

import colors from '../components/colors'

const LinksWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  flex-wrap:wrap;
  max-width:960px;
  margin:0px auto;
  padding:20px 0px;

  font-weight: 500;
`
const Dropdown = styled.div`
  position:relative;
  .dropdown_elements{
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
`

const linkStyle = {
  color: colors.olive,
  textDecoration: 'none',
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.beige,
    }}
  >
    <div style={{width:`300px`, margin:'auto', padding:'10px',boxSizing:'content-box'}}>
      <Logo />
    </div>
    <LinksWrapper>
      <Link 
      to="/"
      style={linkStyle}
      activeStyle={{color:colors.text}}
      >
        Accueil
      </Link>
      <Dropdown>
          <Link 
          to="/hebergements"
          style={linkStyle}
          activeStyle={{color:colors.text}}
          activeClassName="current"
          >
            Hébergements
          </Link>
          <div className="dropdown_elements">
              <Link to="/hebergements#chambres" style={linkStyle}>
              Les chambres d’hôte
              </Link>
              <Link to="/hebergements#gite" style={linkStyle}>
                Le gîte
              </Link>
          </div>
      </Dropdown>
      <Link 
      to="/evenements"
      style={linkStyle}
      activeStyle={{color:colors.text}}
      >
       Événements
      </Link>
      <Link 
      to="/agriculture"
      style={linkStyle}
      activeStyle={{color:colors.text}}
      >
        Agriculture
      </Link>
      <Link 
      to="/histoire"
      style={linkStyle}
      activeStyle={{color:colors.text}}
      >
       Histoire
      </Link>
      <Link 
      to="/contact"
      style={linkStyle}
      activeStyle={{color:colors.text}}
      >
       Contact
      </Link>
    </LinksWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
