import React from 'react';
import '../styles/Home.css';
import Quote from './Quote';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Todo from './Todo';
import useLocalStorage from '../Hooks/UseLocalStorage';
import FlipMove from 'react-flip-move';

function Home() {

    const { addTodo, input, todos, setInput, temporaryDisplay} = useLocalStorage();

    return (
        <div className="home">
           <Quote />

           <div className="home__addTodo">
                <form className="home__addTodoForm" onSubmit={addTodo}>
                    <input 
                        className="home__addTodoForm--input"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder="Enter a Todo..."
                    />
                    <button  
                        className="home__addTodoForm--button"
                    >
                       <AddCircleIcon /> <span>Add Todo</span>  
                    </button>
                    <h3 className="home__addTodoForm--warning">
                        {
                            temporaryDisplay ? 
                            "Please enter a todo" 
                            : 
                            ""
                        }
                    </h3>
                </form>
                
                <div className="home__addTodo--todos">
                    {
                        todos.length === 0 && 
                        <div className="home__addTodo--recommendationDiv">
                            <h1 className="home__addTodo--recommendation">
                                Add some todos to be productive
                            </h1>
                            <AddCircleIcon className="addIcon" />
                        </div>
                    }

                    <FlipMove>
                    {
                        todos?.map(todo =>(
                                <li key={todo.id}>
                                    {
                                        <Todo
                                            id={todo.id} 
                                            todo={todo.text}
                                            isCompleted={todo.completed}
                                            createdAt={todo.time}
                                        />
                                    }
                                </li>
                        ))
                    }
                    </FlipMove>
                </div>
                
           </div>
        </div>
    )
}

export default Home;
