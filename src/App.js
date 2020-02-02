import React from 'react';
import './css/mycss.css';
import  {connect} from 'react-redux';
import {anotherName,addName} from './action/actions';

function App(props) {
console.log(props);

  function calCalculator(ar){
      console.log(ar);
        if(ar == '='){
          props.calculate('EQUALS','');
          //props.calculate(inputs);
          
          return;
        }else{
         // inputs.push(ar);
          props.calculate('CALCULATE',ar)
        }
        


    
  }
  function clear(){
    props.calculate('CLEAR','');
  }
  return (
    <div className="App">
    <div className="col-d-5 col-s-5">
         
         </div>
         <div className="col-d-3 col-s-3">
              <div className="padd">
                 <div className="result">
                      {props.myName}
                     <div className="inputs">{props.inputGiven}</div>
                     <br/>
                     <div className="ans">{props.outputCome}</div>
                 </div>
                 
                 <div className="keys">
                     <table cellspacing="10">
                         <tr>
                                 <td onClick={()=>{clear('C')}}>C</td>
                                 <td >+/-</td>
                                 <td >%</td>
                                 <td  onClick={()=>{calCalculator('/')}} id="opColor">/</td>
                         </tr>
                         <tr>
                                 <td onClick={()=>{calCalculator('7')}}>7</td>
                                 <td onClick={()=>{calCalculator('8')}}>8</td>
                                 <td onClick={()=>{calCalculator('9')}}>9</td>
                                 <td onClick={()=>{calCalculator('*')}} id="opColor">x</td>
                         </tr>
                         <tr>
                                 <td onClick={()=>{calCalculator('4')}}>4</td>
                                 <td onClick={()=>{calCalculator('5')}}>5</td>
                                 <td onClick={()=>{calCalculator('6')}}>6</td>
                                 <td onClick={()=>{calCalculator('-')}} id="opColor">-</td>
                         </tr>
                         <tr>
                                 <td onClick={()=>{calCalculator('1')}}>1</td>
                                 <td onClick={()=>{calCalculator('2')}}>2</td>
                                 <td onClick={()=>{calCalculator('3')}}>3</td>
                                 <td onClick={()=>{calCalculator('+')}} id="opColor">+</td>
     
                         </tr>
                         <tr>
                                 <td onClick={()=>{calCalculator('0')}}>0</td>
                                 <td onClick={()=>{calCalculator('.')}}>.</td>
                                 <td onClick={()=>{calCalculator('=')}} colspan="2" id="opColor1">=</td>
                                 
                         </tr>
                     </table>
                 </div>
              </div>
         </div>
         <div className="col-d-5 col-s-5">
              
         </div>
    </div>
  );
}



const mapStateToProps=(state)=>{
  return{
    inputGiven:state.name,
    outputCome:state.output
  }
 }
 const mapDispatchToProps=(dispatch)=>{
 return {
   calculate:(inputs,name)=>{
     dispatch(anotherName(inputs,name))
     
   }
  }
 }
export default connect(mapStateToProps,mapDispatchToProps)(App);
