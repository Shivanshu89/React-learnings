import React, {useContext} from 'react';
import { FirstName, LastName } from './Context.component';

const UseContextBDemo = () => {
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);
    return <span>My Name is {firstName} {lastName}</span>
}

export default UseContextBDemo;