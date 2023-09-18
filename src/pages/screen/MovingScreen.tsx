
import styled from 'styled-components';
import pix1 from "../../assets/Assets/4.5.jpg"
import pix2 from "../../assets/Assets/5.jpg"
import pix3 from "../../assets/Assets/6.jpg"
import pix4 from "../../assets/Assets/7.jpg"
import img from "../../assets/Assets/features-bg2.jpg"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


const Slides = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
  return (
   <Container>
    <Wrapper>
        <Top>
            <h2>APP <span>SCREENSHOTS</span></h2>
            <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Top>
        <SlideHold>
            {/* <Slide>
            <Slider {...settings}> */}
            <Box>
            <Hovercard>
                <Circle />
            </Hovercard>
                <Img src={pix1}/>
            </Box>
            <Box>
            <Hovercard>
            <Circle />
            </Hovercard>
                <Img src={pix2}/>
            </Box>
            <Box>
            <Hovercard>
            <Circle />
            </Hovercard>
                <Img src={pix3}/>
            </Box>
            <Box>
            <Hovercard>
            <Circle />
            </Hovercard>
                <Img src={pix4}/>
            </Box>
            {/* </Slider>
            </Slide> */}
        </SlideHold>
    </Wrapper>
   </Container>
  )
}

export default Slides;

// const Slide = styled.div`
// display: flex;
// width: 100%;
// height: 120px;
// margin-top: 40px;
// justify-content: space-between;
// `

const Circle = styled.div`
width: 80px;
height: 80px;
/* border: 1px #fff solid; */
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
transition: all ease-in-out 360ms;
border-radius: 100%;
&:hover{
    background-color: #e74c3c;
}
`

const Hovercard = styled.div`
position: absolute;
top: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.4);
z-index: 50px;
width: 100%;
height: 100%;
opacity: 0;
-webkit-transition: all .33s ease;
-moz-transition: all .33s ease;
-o-transition: all .33s ease;
transition: all .33s ease;
&:hover{
    opacity: 1;

}
`

const Img = styled.img`
width: 92%;
height: 92%;
object-fit: cover;
`

const Box = styled.div`
width: 270px;
height: 410px;
background-color: #8E8C8C;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-right:30px;
overflow: hidden;

&:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transition: all 350ms ease-in-out 0s;
}
`

const SlideHold = styled.div`
display: flex;
width: 100%;
height: 420px; 
margin-top: 40px;
justify-content: space-between;
/* background-image: url(${img}); */
`

const Top = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
h2{
   font-size: 30px;
}
p{
    width: 40%;
    text-align: center;
}
span{
     color: #e74c3c;
     font-weight: bold;
}
`

const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: red; */
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${img});
`