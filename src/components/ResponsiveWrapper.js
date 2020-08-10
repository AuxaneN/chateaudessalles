import styled from 'styled-components';

const ResponsiveWrapper = styled.div`
position: relative;
  width:100vw;
  @media screen AND (max-width:900px){
    margin:auto;
    width:99vw;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
  }

`

export default ResponsiveWrapper