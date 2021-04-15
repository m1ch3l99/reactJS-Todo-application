import useStatValue from "../Context/StateProvider";

function useTodoActions( ) {

    const [,dispatch] = useStatValue();

    const deleteTodo = (id) =>{
        dispatch({
            type:"DELETE_TODO",
            id:id,
        });
    } 

    const completeTodo = (id) =>{
       dispatch({
           type:"COMPLETE_TODO",
           payload:id,
       });
    }

    //update
    const updateTodo = (id,text) =>{
        dispatch({
            type:"UPDATE_TODO",
            payload:{
                id:id,
                text:text,
            }
        })
    }

    return { 
        completeTodo, 
        deleteTodo,
        updateTodo,
     }
}

export default useTodoActions;
