import React from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';

const Parallax = () => {

    const resize = 1.1;
    const [dimensions, setDimension] = React.useState({
      height: window.innerHeight * resize,
      width: window.innerWidth * resize,
    })
    React.useEffect(() => {
      function handleResize() {
        setDimension({
          height: window.innerHeight * resize, 
          width: window.innerWidth * resize
        })
      }
      window.addEventListener('resize', handleResize);
      return _ => {window.removeEventListener('resize',handleResize)}
    })
  
    return( <div className = "main-background">
      <MouseParallaxContainer width = "100%">
          <MouseParallaxChild justifyContent = "center" alignItems= "center" factorX={0.03} factorY={0.05}>
            <img height = {dimensions.height} width = {dimensions.width} src = "https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/01/28/heart-of-the-fluft-legends-of-runeterra1_feature.jpg" alt ="poro"></img>
          </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>);
}

export default Parallax;
