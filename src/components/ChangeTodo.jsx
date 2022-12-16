import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { MdFormatColorText} from "react-icons/md"
import { AiOutlineEnter} from "react-icons/ai"
import { useSearchParams } from "react-router-dom";
import { BsCircle, BsCheckLg, BsPencil, BsTrashFill, BsPen} from "react-icons/bs"

const Change = styled.div `
    width:360px;    
    height: 50px;
    display: flex;

    .form{
        display: flex;
        margin-top: 5px;
    }

    .texticon{
        width: 30px;
        height: 30px;
    }
    .textbox{
        width: 260px;
        height: 35px; 
        font-size: 15px;
        overflow: auto;
        
    }
    .enter{
        width: 30px;
        height: 30px;
    }
    .add {
    width:35px;
    height:35px;
    position: absolute;
    cursor: pointer;
    top: 600px;
    right: 10px;
    
    }
    .submit{
        height: 40px;
        width: 50px;
    }   


    `

const ChangeTodo = ( {onInsertTodo, selectedTodo, onUpdate} ) => {
    const [value, setValue] = useState("");

    const onChange = (input) => {
        setValue(input.target.value);
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
    }

    useEffect(() => {
    if(selectedTodo){
        setValue(selectedTodo.text);
    }},[selectedTodo])

    return( 
    <div> 
    <Change>
        <div>
            <form className="form" onSubmit={selectedTodo ?() =>{onUpdate(selectedTodo.id, value)} : onSubmit}>
                <input className="textbox"
                value = {value}
                onChange={onChange}>
                </input>
                <button><BsPencil className="texticon"/></button>
            </form>
        </div>
    </Change>
    </div>
    )
};

export default ChangeTodo;