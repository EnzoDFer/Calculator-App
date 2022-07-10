import { useReducer } from 'react';
import { inverse,add,subtract,multiply,divide,power,factorial, modulus, convertToPercent } from './calculator_functions';
import './App.css';
import Screen from './Screen';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';



function reducer(state,action) {
  switch (action.type) {
    case 'add_digit':
      if (state.inactiveNum&&!state.operationSymbol) return state;
      return {
        ...state, 
        activeNum: `${state.activeNum || ''}${action.payload}`
      }
    case 'all_clear':
      return {
        ...state,
        activeNum: null,
        inactiveNum: null,
        operation: null,
        operationSymbol: null,
      }
    case 'clear_entry':
      return {
        ...state,
        activeNum: null,
      }
    case 'operation':
      if (!state.inactiveNum) {
        return {
          ...state,
          inactiveNum: state.activeNum,
          activeNum: null,
          operation: action.payload.mathFunction,
          operationSymbol: action.payload.symbol,
        }
      }  
      else if (!state.activeNum && state.inactiveNum){
        return {
          ...state,
          activeNum: null,
          operation: action.payload.mathFunction,
          operationSymbol: action.payload.symbol,
        }
      }
      return state;
    case 'instantOperation':
      if (state.activeNum) return {
        ...state,
        activeNum: Number(action.payload.mathFunction(state.activeNum).toFixed(5)),
      }
      return state;
    case 'constant':
      if (!state.activeNum) return {
        ...state,
        activeNum: action.payload,
      }
      return state;
    case 'equals':
      if (state.activeNum && state.inactiveNum) return {
        ...state,
        activeNum: state.operation(state.inactiveNum,state.activeNum),
        inactiveNum: null,
        operation: null,
        operationSymbol: null,
      }
      else return state;
    case 'negate':
      if (!state.activeNum) return state;
      return {
        ...state,
        activeNum: state.activeNum*-1,
      }
    case 'add_decimal':
      if ((state.activeNum).includes('.')) return state;
      return {
        ...state,
        activeNum: `${state.activeNum || ''}${action.payload}`,
      }
    case 'previous':
      if (!state.activeNum) return {
        ...state,
        activeNum: state.inactiveNum,
        inactiveNum: null,
        operationSymbol: null,
      }
      return state;
    default:
      throw new Error(`Error unknown action.type: ${action.type}`)
  }
}

const initialState = {
  activeNum: null,
  inactiveNum: null,
  operation: null,
  operationSymbol: null,
};

const App = () => {
  const [{activeNum,inactiveNum,operation,operationSymbol},dispatch] = useReducer(reducer,initialState);

  return (
    <div className="container">
      <Screen active={activeNum} inactive={inactiveNum} operationSymbol={operationSymbol}/>
      <div className="interactables">
        <div className="title">
          <span className='title-main'>Scientific Calculator</span> by Enzodfer
        </div>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: factorial}})} value={'!'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: power,symbol:'^'}})} operation={'xⁿ'}/>
        <DigitButton onClick={()=>dispatch({type: 'previous'})} value={'↓'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: multiply,symbol:'*'}})} operation={'*'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: subtract,symbol:'-'}})} operation={'-'}/>
        <nav className="dropdown math-constants">
          MATH CONSTANTS
          <div className="dropdown-content">
            <DigitButton onClick={()=>dispatch({type: 'constant', payload:Math.PI})} value={'π'}/>
            <DigitButton onClick={()=>dispatch({type: 'constant', payload:Math.E})} value={'e'}/>
          </div>
        </nav>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.sqrt,symbol:'√'}})} value={'√'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: add,symbol:'+'}})} operation={'+'}/>
        <nav className="dropdown trig-functions">
          TRIG FUNCTIONS
          <div className="dropdown-content">
            <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.sin}})} value={'sin'}/>
            <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.cos}})} value={'cos'}/>
            <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.tan}})} value={'tan'}/>
          </div>
        </nav>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.log10,symbol:'log'}})} value={'log'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: divide,symbol:'/'}})} operation={'/'}/>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.trunc,}})} value={'trunc'}/>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: convertToPercent}})} value={'ANS in %'}/>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.log,}})} value={'ln'}/>
        <DigitButton onClick={()=>dispatch({type: 'all_clear', payload:'AC'})} value={'AC'}/>
        <DigitButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: modulus, symbol: '%'}})} value={'mod'}/>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: inverse}})} value={'1/x'}/>
        <DigitButton onClick={()=>dispatch({type: 'negate'})} value={'+/-'}/>
        <DigitButton onClick={()=>dispatch({type: 'clear_entry', payload:'CE'})} value={'CE'}/>
        <div className="digits">
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'7'})} value={'7'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'8'})} value={'8'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'9'})} value={'9'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'4'})} value={'4'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'5'})} value={'5'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'6'})} value={'6'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'1'})} value={'1'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'2'})} value={'2'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'3'})} value={'3'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'0'})} value={'0'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_decimal', payload:'.'})} value={'.'}/>
          <DigitButton onClick={()=>dispatch({type: 'equals'})} value={'='}/>
        </div>
      </div>
    </div>
  );
}

export default App;