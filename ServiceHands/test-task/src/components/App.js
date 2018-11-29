import React, { Component } from 'react';
import ColorForm from './ColorForm'


class App extends Component {  

  constructor(props){
    super(props);
    this.state = {
      bgColor1: '#ff0000',
      bgColor2: '#00ffff'
    };
  }
   
  updateColor = (value1, value2) =>{
    this.setState({bgColor1: value1})
    this.setState({bgColor2: value2})
  }

  render() {
    return (
      <div>
        <div style={{background: `linear-gradient(${this.state.bgColor1}, ${this.state.bgColor2})`, height: '100vh'}}>
          <div className="container">
            <h1>Тестовое задание - изменить фон сайта</h1>
            <br/>
              {/* <h1>Цвет1:{this.state.bgColor1}, цвет2: {this.state.bgColor2}</h1> */}
              <ColorForm updateColor={this.updateColor}></ColorForm>
          </div>
        </div>
    </div>  
    );
  }
}

export default App;
