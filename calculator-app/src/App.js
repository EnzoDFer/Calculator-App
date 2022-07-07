import { useReducer } from 'react';
import { sum,add,subtract,multiply,divide,power,factorial } from './calculator_functions';
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
        activeNum: "",
        inactiveNum: "",
        operation: null,
        operationSymbol: '',
      }
    case 'clear_entry':
      return {
        ...state,
        activeNum: '',
      }
    case 'operation':
      if (!state.inactiveNum) {
        return {
          ...state,
          inactiveNum: state.activeNum,
          activeNum: '',
          operation: action.payload.mathFunction,
          operationSymbol: action.payload.symbol,
        }
      }  
      else if (!state.activeNum && state.inactiveNum){
        return {
          ...state,
          activeNum: '',
          operation: action.payload.mathFunction,
          operationSymbol: action.payload.symbol,
        }
      }
      return state;
    case 'instantOperation':
      if (state.activeNum && !state.inactiveNum) return {
        ...state,
        inactiveNum: action.payload.mathFunction(state.activeNum),
        activeNum: '',
      }
      return state;
    case 'equals':
      if (state.activeNum && state.inactiveNum) return {
        ...state,
        inactiveNum: state.operation(state.inactiveNum,state.activeNum),
        activeNum: '',
        operation: null,
        operationSymbol: '',
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
    default:
      throw new Error(`Error unknown action.type: ${action.type}`)
  }
}

const initialState = {
  activeNum:'',
  inactiveNum:'',
  operation: '',
  operationSymbol: '',
};

const App = () => {
  const [{activeNum,inactiveNum,operation,operationSymbol},dispatch] = useReducer(reducer,initialState);

  return (
    <div className="container">
      <Screen active={activeNum} inactive={inactiveNum} operationSymbol={operationSymbol}/>
      <div className="interactables">
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'1'})} value={'1'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'2'})} value={'2'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'3'})} value={'3'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'('})} value={'('}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:')'})} value={')'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: multiply,symbol:'*'}})} operation={'*'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: subtract,symbol:'-'}})} operation={'-'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'1'})} value={'1'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'2'})} value={'2'}/>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.sqrt,symbol:'√'}})} value={'√'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: add,symbol:'+'}})} operation={'+'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'5'})} value={'5'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'6'})} value={'6'}/>
        <DigitButton onClick={()=>dispatch({type: 'instantOperation', payload:{mathFunction: Math.log,symbol:'log'}})} value={'log'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:{mathFunction: divide,symbol:'/'}})} operation={'/'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'9'})} value={'9'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'10'})} value={'10'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'11'})} value={'11'}/>
        <DigitButton onClick={()=>dispatch({type: 'all_clear', payload:'AC'})} value={'AC'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'13'})} value={'13'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'14'})} value={'14'}/>
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