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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Link to="/contact"
          style={{
            color: colors.olive,
            textDecoration: 'none',
          }}
          >Contact</Link>  
          <SocialIcon url="https://facebook.com" 
          fgColor={colors.olive} 
          bgColor="transparent" 
          style={{border:`2px solid ${colors.olive}`, borderRadius:'100%', height:'30px', width:'30px'}} /> 
          <SocialIcon url="https://instagram.com"
          fgColor={colors.olive} 
          bgColor="transparent" 
          style={{border:`2px solid ${colors.olive}`, borderRadius:'100%', height:'30px', width:'30px'}}/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
