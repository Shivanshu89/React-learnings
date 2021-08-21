import React, {createContext} from 'react';
import UseContextA from './UseContextA.component'

const FirstName = createContext();
const LastName = createContext();
const ContextDemo = () => {

    return (
    <div>
        <FirstName.Provider value={"Shivanshu"}>
            <LastName.Provider value={"Misra"}>
                <UseContextA></UseContextA>
            </LastName.Provider>
        </FirstName.Provider>
    </div>
    )
}

export default ContextDemo;
export { FirstName, LastName };