import { useState } from "react";
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {TiTick} from "react-icons/ti"
// import { Button } from "react-bootstrap/Button";
import Button from 'react-bootstrap/Button';
import '../css/todo.css'


const Task = ({task, del,edit, click}) =>{

    const [editable, setEditable] = useState(task.isEditable);
    const [taskName, setTaskName] = useState(task.name);
    const [isCheck,setIsCheck] = useState(false)
    const onEdit = () => {
        setEditable(true);
    }
    const update = (e) => {
        edit(task.id,taskName);
        e.target.style.setProperty('display','none')
        setEditable(false)
    }
    const handleCheck=(e)=>{
        setIsCheck(e.target.checked);
        }

    return(
        <tr>
            <td><input type="checkbox" className="form-check-input" onChange={handleCheck} /></td>
            <td className="text-lg-right">
                {!editable && isCheck && (<a style={{textDecoration:'line-through'}} >
                {task.name} 
            </a>)}
            {!editable && !isCheck && (<a>
                {task.name} 
            </a>)}
            {editable && (<input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />)}
            </td>
            <td>
                {!isCheck && <Button onClick={() => onEdit()}><AiFillEdit/></Button>}
                {isCheck && <Button disabled={true} onClick={() => onEdit()}><AiFillEdit/></Button>}
            </td>
            <td><Button onClick={() => del(task.id)}><AiFillDelete/></Button></td>
            {editable && (<td><Button onClick={update}><TiTick/></Button></td>)}
        </tr>
    )
}

export default Task 