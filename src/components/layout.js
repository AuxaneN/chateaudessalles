/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {SocialIcon} from 'react-social-icons'
import {Link} from 'gatsby'
import colors from './colors'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="loader">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>


        <footer>
          <Link to="/contact"
          style={{
            color: colors.olive,
            textDecoration: 'none',
            fontSize:'20px',
            fontWeight:'bolder'
          }}
          >Contact</Link>  
          <SocialIcon url="https://www.facebook.com/chateaudessalles"
          fgColor={colors.olive} 
          bgColor="transparent" 
          style={{border:`2px solid ${colors.olive}`, borderRadius:'100%', height:'30px', width:'30px'}} /> 
          <SocialIcon url="https://instagram.com/chateaudessalles/"
          fgColor={colors.olive} 
          bgColor="transparent" 
          style={{border:`2px solid ${colors.olive}`, borderRadius:'100%', height:'30px', width:'30px'}}/>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
