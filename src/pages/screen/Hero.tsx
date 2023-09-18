import styled from "styled-components"
import image from "../../assets/Assets/about-1.png"
import img from "../../assets/Assets/bg-1.jpg"
const Hero = () => {
  return (
    <div>
       <Container>
        <Wrapper>
          <Holder>
          <H1>
          <h1>BEST WAY TO <span>            PRESENT</span>
            <br/> YOUR APP</h1>
          </H1>
                 <H2>
                 <strong>We ensure quality & support. People love us & we love them. Lorem<br/> ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor<br/> sit amet, consectetur adipiscing elit.</strong>
                 </H2>
          </Holder>
          <Image src={image} />
        </Wrapper>
       </Container>
    </div>
  )
}
export default Hero
const Image = styled.img`
width: 100%;
max-width: 450px;
height:400px;
/* background-image: url(${image}); */
background-position: center;
object-fit: contain;
background-repeat: no-repeat;

@media (min-width: 1024px) {
   width: 600px;
}
`
const H2 = styled.h2`
font-size: 17px;
font-family: 'Nunito sans';
color: #fff;
line-height: 20px;
`
const H1 = styled.h1`
width: 80%;
font-size: 25px;
font-family: 'Quicksand';

span{
  color: #e74c3c;
}


@media (min-width: 1057px) {
   width: 100%;
   font-size: 30px;
}
`

const Holder = styled.div`
@media (min-width: 1024px) {
  /* background-color: grey; */
   width: 40%;
}

`

const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

@media (min-width: 1057px) {
   width: 80%;
  justify-content: center;
}
@media (min-width: 1024px) {
   width: 80%;
  justify-content: space-between;
}

`

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
background: rgba(000, 000,000, 50%);
display: flex;
justify-content: center;
align-items: center;
background-image: url(${img});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
padding:80px 0px;
`