import Counters from './components/counters';
import NavBar from "./components/navbar";
import './App.css';
import { Component } from 'react';

let x = 0; 
x = 1;
class App extends Component {

  state={
    counters :[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
     ]
};

handleDelete = (counterId) =>{
  const counters = this.state.counters.filter(counter => counter.id !== counterId);
  this.setState({counters});
};

handleReset=()=>{
 const counters = this.state.counters.map(counter => {counter.value = 0; return counter;});
 this.setState({counters});
};

handleIncrement = (counter) =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value ++;
  this.setState({counters});
};

handleDecrement = (counter)=>{
  const counters=[...this.state.counters];
  const index= counters.indexOf(counter);
  counters[index] = {...counter};
  if( counters[index].value > 0 ){
    counters[index].value--; 
    this.setState({counters});
  }
};

  render(){  
  return (
    <div>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value >0).length}/>
      <main className="container">
         <Counters 
           onReset = {this.handleReset} 
           onDecrement = {this.handleDecrement} 
           onDelete = {this.handleDelete} 
           onIncrement = {this.handleIncrement} 
           counters = {this.state.counters} 
          />
      </main>
    </div>
  );
  }
}

export default App;