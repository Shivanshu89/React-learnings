import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
        switch(action.type){
            case 'Increment' : return state+1;
            case 'Decrement' : return (state === 0 ? state : state-1);
            default: return state
    }
}
const UseReducerComp  = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <span>{state}</span>
            <br></br>
            <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
        </div>
    )
}

export default UseReducerComp;