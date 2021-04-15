export const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
}

// the reducer is responsible of the actions
const reducer = (state, action) =>{
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos: [...state.todos, action.todo],
            };
        
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            }
            
        case "COMPLETE_TODO":
            const completeTodo = [...state.todos];
            for(const todo of completeTodo){
                if(todo.id === action.payload){
                    todo.completed = true;
                }
            }
            state.todos = [...completeTodo];
            return{
                ...state,
            };

        case "UPDATE_TODO":
            const updatedTodos = [...state.todos];

            for(const todo of updatedTodos){
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text;
                }
            }
            state.todos = [...updatedTodos];
            return{
                ...state,
            }

        // =================TODOS ACTIONS================

        default:
            return state;
    };
}

export default reducer;