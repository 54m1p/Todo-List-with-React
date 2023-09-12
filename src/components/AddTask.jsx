import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const AddTask =({addTask})=>{
    const [taskInput,setTaskInput] = useState('')

    const changeTaskInput = (e) =>{
        setTaskInput(e.target.value);
    }
    return(
        <div>
            <Form className="d-flex">
                <Form.Control className="w-50" type="text" name="input-task" value={taskInput} onChange={changeTaskInput}  placeholder="Enter new task"/>
            <Button type="submit" disabled={!taskInput}
             onClick={()=>{{addTask(taskInput)};
                            setTaskInput("")}}>
               
            <AiOutlinePlus/>
            </Button>
            </Form>
        </div>
    )
}

export default AddTask