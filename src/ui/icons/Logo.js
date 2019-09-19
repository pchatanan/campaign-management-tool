import React from 'react'
import styled, {keyframes} from 'styled-components'

const fill = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: black;
  }
`;

const Svg = styled.svg`
  animation: ${fill} 1s ease forwards ${props => 2+0.5*(props.count-1)}s;
`

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const remove = keyframes`
  to {
    stroke-dasharray: none;
    stroke-dashoffset: none;
  }
`;

const strokeFadeIn = keyframes`
  from {
    stroke-opacity: 0;
  }
  to {
    stroke-opacity: 1;
  }
`;

const Path = styled.path`
  display: ${props => props.length ? 'block' : 'none'};
  stroke: black;
  stroke-width: 3;
  stroke-miterlimit: 6;
  stroke-dasharray: ${props => props.length};
  stroke-dashoffset: ${props => props.length};
  animation: ${draw} 2s ease forwards ${props => 0.5*props.index}s, ${remove} 2s ease forwards ${props => 2+0.5*props.index}s, ${strokeFadeIn} 2s ease forwards ${props => 0.5*props.index}s;
`

const AnimatedPath = props => {
  const [length, pathRef] = useLengthRef()
  return <Path ref={pathRef} length={length} index={props.index} {...props}/>
}

const useLengthRef = () => {
  const [length, setLength] = React.useState()
  const pathRef = React.useRef()
  React.useEffect(()=>{
    setLength(pathRef.current && pathRef.current.getTotalLength())
  }, [])
  return [length, pathRef]
}

const Logo = props => {
  return <Svg
    count={3}
    viewBox="0 0 504.416 189.549"
    width="100%"
    height="100%"
    display="block"
    fill='transparent'
  >
    <AnimatedPath index={0} d="M172.714,37.799l-23.391,22.3
		c-15.913-16.818-33.816-25.228-53.706-25.228c-16.788,0-30.929,5.739-42.426,17.218C41.694,63.566,35.946,77.716,35.946,94.536
		c0,11.717,2.546,22.119,7.637,31.208c5.092,9.087,12.292,16.221,21.602,21.401c9.31,5.182,19.653,7.772,31.031,7.772
		c9.706,0,18.576-1.812,26.613-5.44c8.035-3.626,16.866-10.222,26.495-19.787l22.674,23.66
		c-12.981,12.669-25.244,21.452-36.79,26.352c-11.547,4.897-24.726,7.348-39.538,7.348c-27.314,0-49.671-8.661-67.07-25.981
		C11.199,143.749,2.5,121.551,2.5,94.476c0-17.518,3.96-33.088,11.885-46.704c7.923-13.618,19.27-24.566,34.043-32.849
		C63.199,6.642,79.106,2.5,96.148,2.5c14.492,0,28.448,3.061,41.867,9.183C151.432,17.805,162.998,26.512,172.714,37.799z"/>
    <AnimatedPath index={1} d="M219.023,6.92h32.587l40.732,122.555L333.444,6.92
      h32.566l29.476,175.709h-32.343L344.302,71.661l-37.328,110.968h-29.476L240.502,71.661l-19.291,110.968h-32.61L219.023,6.92z"/>
    <AnimatedPath index={2} d="M404.804,6.92h97.111v32.968h-32.011v142.741
      h-33.924V39.888h-31.176V6.92z"/>
  </Svg>
}

export default Logo
