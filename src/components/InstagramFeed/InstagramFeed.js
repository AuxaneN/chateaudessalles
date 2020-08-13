import React, {useState, useEffect }from 'react'
import axios from 'axios'
import styled from 'styled-components';
import colors from '../colors';

import ResponsiveWrapper from "../ResponsiveWrapper";

const SectionWrapper = styled.div`
margin:40px;
@media screen AND (max-width:900px){
  margin:initial;
}
`

const FeedWrapper = styled.div`
max-width:100vw;
width:100%;
padding:20px 0;
overflow-x:scroll;

display:flex;
flex-direction:row;
img{
  height:300px;
  width:300px;
  padding:10px;
}
@media screen AND (max-width:600px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:400px;
  overflow-y:scroll;
  img{height:auto}
}
`

const InstagramFeed = () => {
const [images, setImages] = useState([{url:'', id:1}]);

useEffect( () => {
  const getImages = async () => {
    const tokenURL = 'https://chateaudessalles-token.herokuapp.com/token.json'
    const res = await axios.get(tokenURL).then(response => {return response.data}).catch(error => console.log(error));
    await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${res.token}`).then( res => setImages(res.data.data)).catch(error => console.log(error));
  }
  getImages()
}, [])

  return(
    <SectionWrapper>
        <hr style={{maxWidth:'400px',width:'100vw', backgroundColor:colors.olive, margin:'40px auto'}}></hr>
    <ResponsiveWrapper>
      <h1>Suivez-nous</h1>
    </ResponsiveWrapper>
    <FeedWrapper className="instagramfeed">
      {images.map(cur => (
        <img src={cur.media_url} key={cur.id} alt={cur.caption}/>
      ))}
    </FeedWrapper>
    </SectionWrapper>
  )
}

export default InstagramFeed;