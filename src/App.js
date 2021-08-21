import React from 'react';
import IncreaseCount from './components/UseState.component';
import UseReducerComp from './components/UseReducer.component';
import ContextDemo from './components/Context.component';
import './App.css'



const App = ()=>{
 
  return(
    <div className='App'>
      <div><span>UseState</span><br></br><IncreaseCount/></div>
      <div><span>UseReducer</span><br></br><UseReducerComp/></div>
      <div><span>Context</span><br></br><ContextDemo/></div>

    </div>
)};

export default App;
