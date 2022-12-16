import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { BsCircle, BsCheckLg, BsPencil, BsTrashFill} from "react-icons/bs"
import ChangeTodo from "./ChangeTodo";

const Item = styled.div`
    background-color: #ffffff;
    width:360px;
    height:50px;
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    position:relative;

    .circle{
        width:20px;
        height:20px;
        margin-left: 20px;
        margin-right: 10px;   
    }
    .check {
        width:20px;
        height:20px;
        margin-left: 20px;
        margin-right: 10px;   
    }
    .pencil{
        width:20px;
        height:20px;
        justify-content: flex-end;
    }
    .trash{
        width:20px;
        height:20px;
        padding-right: 10px;
    }
    .textarea{
        width: 280px;
        height: 40px;
        overflow: auto;
        white-space: nowrap;
        padding-top: 15px;
    }
    .text{
        width: 280px;
        height: 40px;
        text-decoration: line-through;
        font-weight: bolder;
        color: black;
        opacity: 0.6;
        overflow: auto;
        white-space: nowrap;
        padding-top: 15px;
    }
    `

const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo, selectedTodo, onRemove}) => {
    const { id, text, checked} = todo;
    // const [insertToggle, setInsertToggle] = useState(false);

    return ( 
        <>
    <Item>
        {checked?
        <>
        
        <BsCheckLg className="check" onClick={() => {onCheckToggle(id)}} />
        <div className="text">{text}</div>
        <BsTrashFill className="trash" onClick={() => {
            onChangeSelectedTodo(todo);
            onRemove(selectedTodo.id) }}/>
        <div>
        <BsPencil onClick={() => { 
            onChangeSelectedTodo(todo);
            onInsertToggle()}}/>

        </div>

        </>
        :
        <>
        <BsCircle className="circle" onClick={() => {onCheckToggle(id)}} />
        <div className="textarea">{text}</div>
        <BsTrashFill className="trash" onClick={() => {
            onChangeSelectedTodo(todo);
            onRemove(selectedTodo.id) }} />
        <div>
            <BsPencil onClick={() => { 
                onChangeSelectedTodo(todo);
                onInsertToggle();}} />
        </div>
            {/* {insertToggle && <ChangeTodo />} */}
        </>
        }





        {/* <div className={`content ${checked ? "checked" : "ischecked" }`}>
            {checked ? <BsCheckLg className="check" /> : <BsCircle className="circle"/>} 
              <span className="text">
                  {text}
                </span>
        <BsTrashFill className="trash" />
        <BsPencil className="pencil" />
        </div>     */}




    </Item>
        </>
    );
};
    
export default TodoItem;