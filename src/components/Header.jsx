import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { BsFillSunFill} from "react-icons/bs"
import { AiOutlineMenu} from "react-icons/ai"

const Navi = styled.nav`
    background-color: #ffffff;
    border-bottom: 3px solid black;
    width:360px;
    height:70px;
    display:flex;
    align-items: center;
    font-size: 30px;
    justify-content: flex-start;
    letter-spacing: 4px;

    .sun {
        color:#ed1414;;
        width:40px;
        height:40px;
        margin-left: 25px;
        margin-right: 15px;   
    }
    
    .menu{
        margin-left: 60px;
        
    }
    `


const Header = ()=>{
    
    return (
        <>
        <Navi> 
            <BsFillSunFill className="sun" />
            To-Do List
            <Link to ='/'>
           {/* <FiMenu className="menu" /> */}
            </Link>
            <AiOutlineMenu className="menu"/>
        </Navi>
        </>
    )
}
export default Header;