import React, {Component} from 'react'
const CT = `1f2fa3c1d25356b64d0d9c9f77758b68`;
cosnt AI =  `2592324244352767`

class InstagramFeed extends Component(){
  componentWillMount(){
    fetch()
    .then(data => {
      data.json();
    })
    .catch(error=>{
      console.log(error);
    })
  }


  render(){
    return(
      <p></p>
    )
  }

}


export default InstagramFeed;