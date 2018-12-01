import React, { Component } from 'react';
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import './App.css';

class App extends Component {

  state = {
    text: ''
  };

  changeTextHandler = newTextEvent => {
    console.log(newTextEvent.target.value);

    this.setState({
      text: newTextEvent.target.value
    });
  };

  removeCharHandler = index => {
    const reaplacementText = this.state.text;
    this.setState({
      text: reaplacementText.slice(0, index) + reaplacementText.slice(index + 1)
    })
  };

  render() {
    const CharList = () => {
      const text = this.state.text;
      return text.split('').map((char, index) => {
        return <CharComponent
          click={this.removeCharHandler}
          index={index}
          text={char}
        />
      });
    };

    return (
      <div className="App">
        <input type="text" onChange={this.changeTextHandler} value={this.state.text} />
        <ValidationComponent textLenght={this.state.text.length}></ValidationComponent>
        <p>
          {CharList()}
        </p>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
