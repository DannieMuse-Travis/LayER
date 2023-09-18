import styled from "styled-components"
import img from "../../assets/Assets/about-4.png"
import {RiComputerLine} from "react-icons/ri"
import {AiFillSetting} from "react-icons/ai"
import {BsMegaphone} from "react-icons/bs"


const SecondComp = ()=>{
    return (
        <div>
            <Wrapper2>
        <Center>
            <h1>
            WELCOME TO <span>LAYER</span>
            </h1>
            <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit.</p>
        </Center>
        <Middle>
            <Side1>
                <First>
                <Circle1>
                    <RiComputerLine />
                </Circle1>
                    <Text>
                    <H1>Bootsraps 3.2</H1>
                    <P>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</P>
                    </Text>
                </First>
                <Second>
                <Circle2>
                    <AiFillSetting />
                </Circle2>
                    <Text>
                    <H1>Bootsraps 3.2</H1>
                    <P>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</P>
                    </Text>
                </Second>
                <Third>
                    <Circle>
                        <BsMegaphone />
                    </Circle>
                    <Text>
                    <H1>Bootsraps 3.2</H1>
                    <P>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</P>
                    </Text>
                </Third>
            </Side1>
            <Side2>
                <Img src={img} />
            </Side2>
        </Middle>

      </Wrapper2>
        </div>
    )
}

export default SecondComp
const Img = styled.img`
    object-fit: contain;
    @media screen and (max-width: 768px) {
     height: 250px;
     width: 230px;
     bottom: 0px;
     top: 10px;
     left: 60px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
     height: 450px;
     width: 390px;
     bottom: 0px;
     top: 0;
     position: absolute;
    }
}
    `

const H1 = styled.div`
    font-size: 20px;
    color: Black;
    padding-bottom: 20px;
    padding-right: 12px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
     font-size: 13px;
     padding-bottom: 15px;
     padding-left: 16px;
    }

`
const P = styled.div`
    font-size: 17px;
    color: silver;
    padding-bottom: 30px;
    padding-left: 12px;

    @media screen and (max-width: 768px) {
     font-size: 12px;
     font-size: 14px;
     color: black;
    }
`

const Text = styled.div`
width:500px;
height: 90px;
/* background-color: green; */
margin-right: 30px;
margin-top: 16px;

@media screen and (max-width: 768px) {
    width:400px;
     height: 90px;
     font-size: 13px;
     font-weight: bold;
     position: relative;
     bottom: 12px;
    width:600px;
     height: 90px;
     font-size: 18px;
     font-weight: bold;
    }

`
const Circle1 = styled.div`
width: 90px;
height: 90px;
background-image: linear-gradient(135deg, #8531fb 0%, #d905ce 100%);
border-radius: 100%;
margin-right: 19px;
margin-bottom: 18px;
display: flex;
justify-content: center;
align-items: center;
font-size: 26px;
color: #fff;
cursor: pointer;
-webkit-border-radius: 50%;
 -moz-border-radius: 50%;
 box-shadow: 7px 5px 30px 0 rgb(72 73 121 / 15%);

 &:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
 }

 @media screen and (max-width: 748px) {
    height: 60px;
     width: 90px;
    }
`
const Circle2 = styled.div`
width: 90px;
height: 90px;
background-image: linear-gradient(44.44deg, #ef4135 7.79%, #eda02b);
border-radius: 100%;
margin-right: 19px;
margin-bottom: 18px;
display: flex;
justify-content: center;
align-items: center;
font-size: 26px;
color: #fff;
box-shadow: 6px 5px 30px 0px rgb(0 0 0 / 12%);

&:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
 }
 
 @media screen and (max-width: 768px) {
     height: 60px;
     width: 90px;
    }
`
const Circle = styled.div`
width: 90px;
height: 90px;
background-image: linear-gradient(44.44deg, #ed2775 7.79%, #ff7448 94.18%);
border-radius: 100%;
margin-right: 19px;
margin-bottom: 18px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: #fff;
box-shadow: 6px 5px 30px 0px rgb(0 0 0 / 12%);

&:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
 }

 @media screen and (max-width: 768px) {
    height: 60px;
    width: 90px;
     
    }
`
const Third = styled.div`
    width: 100%;
    height: 130px;
    /* background-color: orange; */
    text-align: end;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
        height: 80px;
        width: 100%;
     width: 100%;
    }

`
const Second = styled.div`
    width: 100%;
    height: 130px;
    /* background-color: red; */
    text-align: end;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
        height: 80px;
     width: 100%;
    }
`

const First = styled.div`
    width: 100%;
    height: 130px;
    /* background-color: yellow;s */
    text-align: end;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
     height: 80px;
     width: 100%;
    }
`
const Side1 = styled.div`
width: 45%;
height: 550px;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
     width: 100%;
     height: 450px;
     margin-bottom: 40px;
     height: 350px;
     margin-top: -80px;
    }

`
const Side2 = styled.div`
width: 39%;
height: 580px;
/* background-color: orange; */
margin-left: -40px;
margin-right: 19px;

@media screen and (max-width: 768px) {
    height: 400px;
    width: 300px;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
    }
`

const Middle = styled.div`
    width: 100%;
    height: 600px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top:70px;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`
const Center = styled.div`
width: 100%;
height: 160px;
margin-top: 20px;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
span{
      color:#e74c3c ;
    }
`
const Wrapper2 = styled.div`
padding: 10px 0px;
width: 100%;
/* background-color: wheat; */

`
