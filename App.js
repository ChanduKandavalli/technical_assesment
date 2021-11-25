import React from "react";
import ReactDOM from "react-dom";
import {GridComponent} from '@syncfusion/ej2-react-grids';


class Button extends React.Component{
  handleClick = ()=>{
    this.props.onClickFunction(this.props.increamentValue);
  };
  render(){
    return(
      <button onClick={this.handleClick}> +{this.props.increamentValue}</button>
    );
  }
};

const Result=(props)=>{
  return(
    <div id="counter">{props.counter}</div>
  )
};

class App extends React.Component{
  state={counter:0};
  increamentCounter=(increamentValue) =>{
    this.setState((prevState) => ({
      counter: prevState.counter + increamentValue
    }));
  }
render(){
    return(
      <div>
        <Button increamentValue={3} onClickFunction= {this.increamentCounter}/>
        <Result counter = {this.state.counter} />  
      </div>
    )
  } 


}
ReactDOM.render(<App/>,document.getElementById('root'))


export default App;