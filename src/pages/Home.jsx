import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import styled from "styled-components"
import React, {useState} from 'react';
import { AiOutlineEnter} from "react-icons/ai"
import AddTodo from "../components/AddTodo";
import ChangeTodo from "../components/ChangeTodo";


const Homepage = styled.div `

width:360px;
  height: 640px;
  position: relative;

    .addItem {
    width:35px;
    height:35px;
    position: absolute;
    cursor: pointer;
    top: 600px;
    right: 10px;
    
    }
    `

const nextId = 5;
const Home = () => {
    const [selectedTodo, setSelctedTodo] = useState(null);
    const [insertToggle, setInsertToggle] = useState(false);
    const [todos, setTodos] = useState([
        {id: 1,
        text: "할일1",
        checked: true
        },
        {id: 2,
        text: "할일2",
        checked: true
        },
        {id: 3,
        text: "할일3",
        checked:false
        },
        {id: 4,
        text: "할일4",
        checked: true
        }
    ]);

    const onCheckToggle = (id) =>{
        setTodos(todos => todos.map(todo => (todo.id === id? {...todo, checked: !todo.checked} : todo)))
    }

    const onInsertToggle =() => {
        setInsertToggle(state => !state)
    }

    const onChangeSelectedTodo = (todo) =>{
        setSelctedTodo(todo)
    }

    const onRemove = id => {
        setTodos(todos => todos.filter(todo => todo.id !==id))
    }

    const onUpdate = (id, text) => {
        setTodos(todos => todos.map(todo => todo.id ===id ? {...todo, text}: todo))
        
    }

    const onInsertTodo =(text) => {
        if(text ===""){
            return alert("할 일을 입력해주세요.")
        }
        else{
            const todo = {
                id: nextId,
                text,
                checked: false
            }
            setTodos(todos => todos.concat(todo))
            nextId++
        }
    };

    return (
    <div>
    <Homepage>
        <Header/>       
            <TodoList 
            todos={todos} 
            selectedTodo={selectedTodo} 
            onCheckToggle={onCheckToggle} 
            onInsertToggle={onInsertToggle} 
            onChangeSelectedTodo={onChangeSelectedTodo} 
            onRemove={onRemove}
            >
            </TodoList>
            
            <AddTodo onInsertTodo={onInsertTodo}  />
           <div>
            {insertToggle && (
            <ChangeTodo  
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onUpdate={onUpdate}
            />
            )}
           </div>
            
            {/* {insertToggle && <AddTodo onInsertTodo={onInsertTodo} /> } */}
            {/* <AiOutlineEnter 
            onClick={onInsertToggle} 
            /> */}
    </Homepage>
    </div>
    );
};

export default Home;