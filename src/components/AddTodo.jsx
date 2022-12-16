import React, { useState } from "react";
import styled from "styled-components"
import { MdFormatColorText} from "react-icons/md"
import { AiOutlineEnter} from "react-icons/ai"
import { useSearchParams } from "react-router-dom";



const Add = styled.div `

    width:360px;    
    height: 50px;
    display: flex;

    /* .submit{
        width:360px;    
    height: 50px;
    position: relative;

    } */
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

const AddTodo = ( {onInsertTodo} ) => {
    const [value, setValue] = useState("");

    const onChange = (input) => {
        setValue(input.target.value);
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        
        
    }

    

    return( 
    <> 
    <Add>
        <div >

    <form className="form" onSubmit={onSubmit} >
        <span>
            <MdFormatColorText className="texticon"/>
        </span>
        <input className="textbox" value={value} onChange={onChange}>
        </input>
        <button type="submit" className="submit">
            <AiOutlineEnter className="enter"  />
        </button>
    </form>   
    </div>
    </Add>
    </>
    )
};

export default AddTodo;