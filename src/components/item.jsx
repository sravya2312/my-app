import React, { useState }  from 'react';
import { BsTrash} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";

export default function Item(props) {
    const [done, setDone] = useState(false);
  return (
    <div  className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center space-x-4`}>
        <div>
            <span className="pr-2 text-[14px] text-slate-400">
                {props.time}
            </span>
            <span onClick={() => setDone(!done)} className={`${done === true ? 'line-through' : ''} text-[20px]`} >
                {props.item}
            </span>
        </div>
        
        <div class="flex item-center space-x-4">
            <span onClick={() => props.handleEdit(props.id,props.item)}>
                <AiFillEdit className='text-[#e74c3c]'/>
            </span>
            <span onClick={() => props.removeHandler(props.id)} >
                <BsTrash className='text-[#e74c3c]'/>
            </span>
        </div>  
    </div>
  )
}
