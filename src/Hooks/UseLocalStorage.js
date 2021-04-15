import { useEffect, useState } from "react";
import { v4 } from "uuid";
import useStateValue from '../Context/StateProvider';

const useLocalStorage = () =>{
    
    const [input, setInput] = useState("");
    const [{todos}, dispatch] = useStateValue();
    const [isEmpty,setIsEmpty] = useState(false);
    const [temporaryDisplay, setTemporaryDisplay] = useState(false);

    const addTodo = (e) => {
        e.preventDefault();
        
        if(!input){
            setIsEmpty(true);
            setTemporaryDisplay(true);
            hideWarning();
        } else {
            dispatch({
                type:"ADD_TODO",
                todo:{
                    text: input,
                    completed: false,
                    time: new Date().toUTCString(),
                    id: v4(),
                }
            });
            setTemporaryDisplay(false);
            setIsEmpty(false);
        }
        setInput("");
    }

    const hideWarning = () =>{
        if(isEmpty){
            setTimeout(()=>{
                setTemporaryDisplay(false);
            },3500);
        }
    }


    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos]);

    useEffect(()=>{
        setTimeout(()=>{
            if(isEmpty){
                setTemporaryDisplay(false);
            }
        },3500)
    },[isEmpty])

    

    return {
        addTodo, 
        input, 
        todos, 
        setInput,
        isEmpty,
        temporaryDisplay
    };
}

export default useLocalStorage;