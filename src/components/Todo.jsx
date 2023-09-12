import data from "../Json/tasks.json"
import { useEffect, useState } from "react"
import Header from "./Header"
import AddTask from "./AddTask"
import Task from "./Task"
import '../css/todo.css'

const Todo = ()=>{
    const [taskList,setTaskList] = useState([]);

    useEffect(()=>{
        setTaskList(data)
    },[]);
    const addTask = (input) =>{
        setTaskList([...taskList, {id:taskList.length+1, name:input, isEditable:false}])
    }
    const taskClickFn = (e)=>{
        if(e.target.parentNode.parentNode.style.textDecoration){
            e.target.parentNode.parentNode.style.removeProperty('text-decoration');
        }else{
            e.target.parentNode.parentNode.style.setProperty('text-decoration','line-through')
        }
    }
    const del =(delId)=>{
        setTaskList(taskList.filter(task => task.id!=delId));
    }
    const edit =(id, taskName)=>{

        taskList.forEach((element)=>{
            if(element.id == id){
                element.name = taskName;
            }
        })
       }
   
    return(
        <div className="todo-wrapper mx-auto">
            <Header/>
            <AddTask addTask ={addTask}/>
            <table>
                    <tbody>
                {taskList?.map((task, index) => (
                  (<Task task={task} key={index} del = {del} edit = {edit} click = {taskClickFn}/>) 

                 ))}
                 </tbody>
                </table>
            
        </div>
    )
                }

export default Todo