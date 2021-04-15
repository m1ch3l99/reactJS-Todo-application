import React, { useState } from 'react';
import '../styles/Todo.css';
import { CheckCircle, Delete, Edit } from '@material-ui/icons';
import useTodoActions from '../Hooks/useTodoActions';

function Todo({ todo, isCompleted, createdAt, id}) {

    const { completeTodo,deleteTodo, updateTodo} = useTodoActions();
    const [isOpen, setIsOpen] = useState(false);
    const [updateInput, setIsUpdateInput] = useState("");

    const convertToInput = () =>{
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsOpen(true)
        }
    }
  
    return (
        <div className="todo">
           
            {
                isOpen ? 

                <>
                <input 
                    type="text" 
                    className="todo__edit--input" 
                    value={updateInput} 
                    onChange={(e)=> setIsUpdateInput(e.target.value)}
                />

                <button 
                    className="todo__edit--cancelBtn"
                    onClick={convertToInput}
                >
                    Cancel
                </button>

                <button
                    className="todo__edit--saveBtn" 
                    onClick={()=>{
                        convertToInput()
                        updateTodo(id, updateInput)
                    }}
                >
                    Save
                </button>
                </>

                :

                <>
                <div className="todo__info">
                    <h3 className={
                        isCompleted ? "todo__desc--completed" : "todo__desc"
                        }>
                        {todo}
                    </h3>
                    <p className="todo__time">{createdAt}</p>
                </div>

                <div className="todo__actions">    
                    <CheckCircle 
                        className="todo__actions--complete"
                        onClick={()=>{
                            completeTodo(id)
                        }}
                    />
            
                    <Edit className="todo__actions--edit" onClick={convertToInput} />

                    <Delete 
                        className="todo__actions--delete" 
                        onClick={()=> !isCompleted ? 
                            alert(`Why being so lazy 🤔? Complete the todo before deleting it.`)
                            :
                            deleteTodo(id)
                        }
                    />
                </div>
                </>
            }
        </div>
    )
}

export default Todo
