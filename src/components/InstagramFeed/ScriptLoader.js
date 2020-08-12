import React, { Component } from "react"
import { Helmet } from "react-helmet"

class ScriptLoader extends Component {

  render(props) {
    return (
      <React.Fragment>
        <Helmet>
        <script src='https://chateaudessalles-token.herokuapp.com/token.js'></script>
        </Helmet>
      </React.Fragment>
    )
  }
}

export default ScriptLoader;