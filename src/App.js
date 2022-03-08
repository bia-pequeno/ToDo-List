import React, { Component } from "react";
import './App.css'
class App extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  add = () => {
    let {lista, tarefa} = this.state
    if(tarefa != ""){
      this.setState({
        tarefa: "",
        lista: lista.concat({
          tarefa: tarefa,
          id:Date.now()
        })
      })
    }
  }

  remove = (id) => {
    let{lista} = this.state
    this.setState({
      lista: lista.filter((item)=> {
        return item.id != id
      })
    })
  }
  handleChange = (ev) => {
    this.setState({
      tarefa: ev.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <input onChange={this.handleChange} type="text" value={this.state.tarefa} />
        <button onClick={this.add}>add</button>
        <ul>
          {this.state.lista.map((item) => (
            <li>{item.tarefa} <button onClick={()=> {this.remove(item.id)}}> X </button></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
