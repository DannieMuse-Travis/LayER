import styled from "styled-components";
import { useState } from 'react';
import logo from "../../assets/Assets/logo-dark.png"
import logo1 from "../../assets/Assets/logo-color.png"
import {FcMenu} from "react-icons/fc"
import {BsEnvelope} from "react-icons/bs"
import {IoIosSearch} from "react-icons/io"

const Header = () => {

    const [header, setHeader] = useState(false)

    const headerChange = () => {
        const scroll = window.pageYOffset;
        if(scroll >= 50){
            setHeader(true)
        }else{
            setHeader(false)
        }
    };
    window.addEventListener("scroll", headerChange)
  return (
    <div>
            {header?(
            <Container bg="white">
            <Wrapper>
               <Menu><FcMenu/></Menu>
                <Logo src={logo} alt="" cl="#000" />
                <NavsHolder>
                    <Nav cl="#000">HOME</Nav>
                    <Nav cl="#000">FEATURES</Nav>
                    <Nav cl="#000">HOW IT WORKS</Nav>
                    <Nav cl="#000">SCREENSHOTS</Nav>
                    <Nav cl="#000">TEAM</Nav>
                    <Nav cl="#000">NEWS</Nav>
                    <Nav cl="#000">EXTRAS +</Nav>
                    <MessageIcon><BsEnvelope/></MessageIcon>
                </NavsHolder>
                <SearchIcon><IoIosSearch/></SearchIcon>
            </Wrapper>
        </Container>
    ):(
        <Container bg="" >
        <Wrapper>
           <Menu><FcMenu/></Menu>
            <Logo src={logo1} alt="" cl="#fff" />
            <NavsHolder>
                <Nav cl="#fff">FEATURES</Nav>
                <Nav cl="#fff">HOW IT WORKS</Nav>
                <Nav cl="#fff">SCREENSHOTS</Nav>
                <Nav cl="#fff">HOME</Nav>
                <Nav cl="#fff">TEAM</Nav>
                <Nav cl="#fff">NEWS</Nav>
                <Nav cl="#fff">EXTRAS +</Nav>
                <MessageIcon><BsEnvelope/></MessageIcon>
            </NavsHolder>
            <SearchIcon><IoIosSearch/></SearchIcon>
        </Wrapper>
    </Container>
    )}
    </div>

  )
}

export default Header;

const SearchIcon = styled.div`
width: 30px;
height: 30px;
font-size: 25px;

@media (min-width: 1026px){ 
    display: none;
}
`

const MessageIcon = styled.div`
display: none;
margin-top: 12px;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #ee5252;

@media (min-width: 1026px){ 
    display: block;
    width: 30px;
    height: 30px;
    object-fit: cover;
}
`

const Nav = styled.nav<{cl:string}>`
font-size: 13px;
/* font-weight: bold; */
font-family: Verdana, Geneva, Tahoma, sans-serif;
margin-right: 23px;
color: ${({cl}) => cl};
&:hover{
    color: #ee5252
}
`

const NavsHolder = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
display: none;
@media (min-width: 1026px){ 
    display: flex;
}
`

const Logo = styled.img<{cl: string}>`
width: 150px;
height: 100%;
object-fit: contain;
color: ${({cl}) => cl};
`

const Menu = styled.div`
color: #fff;
font-size: 25px;
object-fit: cover;

@media (min-width: 1026px){
    display: none;
}
`

const Wrapper = styled.main`
width: 90%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.header<{bg: string}>`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: ${({bg}) => bg};
transition: 350ms ease-in;
`