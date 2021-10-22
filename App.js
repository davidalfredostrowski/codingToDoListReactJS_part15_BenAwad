import React, { Component } from "react";
import "./App.css";


// ./components/MyForm     ( comkponents is not in the dir )
import TodoList from "./TodoList";

class App extends Component {
    state= {
        visible: true
    };

    render() {
        return (
           <div className="App">
              <TodoList />
           </div>
        );
    }
}

export default App;
