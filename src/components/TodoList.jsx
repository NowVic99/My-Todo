import React from "react";
import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components"
import { BsCircle, BsCheckLg} from "react-icons/bs"



const List = styled.nav`
    width:360px;
    height: 520px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    `




const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo, selectedTodo,onRemove}) => {

    return (   
    <>
        <List>
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} 
            selectedTodo={selectedTodo} 
            onCheckToggle={onCheckToggle} 
            onInsertToggle={onInsertToggle} 
            onChangeSelectedTodo={onChangeSelectedTodo} 
            onRemove={onRemove}/>   
            ))}
            </List>
    </>
    );
};

export default TodoList;