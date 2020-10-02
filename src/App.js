import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor() {
    super(); //required
    console.log('App Constructor');
  }

  componentDidMount() {
    console.log('App-mounted'); //successful mounting
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //cloning the counters array, this will modify the original counters[] attributes only
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //since counters array is under state of counters component, counters should be handling the event of deletion
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log('App-Rendered')
  return (
    <React.Fragment>
    <NavBar totalCounters= {this.state.counters.filter(c => c.value>0).length} />
    <main className="container">
      <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
    </main>
    </React.Fragment>
  );
  }
}

export default App;
