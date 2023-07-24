import React, { useRef } from 'react';
import {AiOutlinePlus} from "react-icons/ai";

export default function Input(props){
    const inputBox = useRef();
    if(props.changesRequested){
        inputBox.current.value = props.data;
    }

    return(
        <div className="p-3 flex justify-around">
           
            <input type="text"  placeholder='Enter text here!!!' className="p-3 focus:outline-none w-[90%] border border-slate-400" ref={inputBox}/>
            <div className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3e] text-white text-3xl rounded-[50%] flex justify-center items-center"onClick={() => {
                if(props.changesRequested){
                    props.handleEdit(inputBox.current.value);
                    inputBox.current.value = "";
                }
                else{
            props.handler(inputBox.current.value);
            inputBox.current.value = "";
                }
        } }>
                {props.changesRequested ? <button onClick={props.handleEdit} > save</button> : <AiOutlinePlus/> }
            </div>
        </div>
    )
}
        
