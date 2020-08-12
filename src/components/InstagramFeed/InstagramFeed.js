import React, {useState, useEffect }from 'react'
import axios from 'axios'
import styled from 'styled-components';

const FeedWrapper = styled.div`
max-width:100vw;
width:100%;
padding:20px;
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
    <FeedWrapper className="instagramfeed">
      {images.map(cur => (
        <img src={cur.media_url} key={cur.id} alt={cur.caption}/>
      ))}
    </FeedWrapper>
  )
}

export default InstagramFeed;