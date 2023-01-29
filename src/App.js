import logo from './logo.svg';
import './App.css';
// import Color from './color.json';

let colors = require('./color.json');
console.log(colors[0].hex);

function Button(props) {
  return (
    <button style={{borderRadius:0, padding:8, marginLeft: 2, marginRight: 2}}id={props.text}>{props.text}</button>
  )
}

function Dropdown() {
  return (
    <div id="dropdown"></div>
  )
}

function InputField() {
  return (
    <div id="me">whopsies</div>
  )
}

function TabContainer() {
  return (
    <div id="me">whopsies</div>
  )
}

function App() {
  return (
    <div className="App">
      <div id="grid-container">
        <div id="tabs-container">t1</div>
        <div id="tabs-header-container">t2</div>
        <div id="header-container">
          <div id="left-align">
        left
          </div>
          <div id="right-align">
            <Button text='reset'/>
            <Button text='import'/>
            <Button text='export'/>
            <Button text='save'/>
          </div>
        </div>
        <div id="body-container">body</div>
      </div>
    </div>
  );
}

export default App;
