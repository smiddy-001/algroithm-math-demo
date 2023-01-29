// import logo from './logo.svg';
import './App.css';
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";

// Useful ones ...
// BiAbacus
// BiAlignLeft
// BiAlignJustify
// BiAlignMiddle
// BiAlignRight
// BiBarChartSquare
// BiBrightness
// BiBrightnessHalf
// BiBug
// BiCaretDown
// BiCodeCurly
// BiClipboard
// BiCode
// BiCubeAlt
// BiDialpadAlt
// BiData
// BiDesktop
// BiDotsHorizontalRounded
// BiExpand
// BiFastForward
// BiFontFamily
// BiFontSize
// BiSortAZ


// import Color from './color.json';

let colors = require('./color.json');
// console.log(colors[0].hex);
console.log(colors.length)
console.log(colors[0].hex)

var root = document.querySelector(':root');

for (let i=0; i < colors.length; i++) {
  // code
  // console.log('#'+colors[i].hex +' set')
  root.style.setProperty('--'+colors[i].name, '#'+colors[i].hex)
  console.log('--'+colors[i].name, '#'+colors[i].hex)
}
// root.style.setProperty('--background-header', '#f00')
// getComputedStyle(root).getPropertyValue('--blue');

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
        <div id="tabs-header-container">
            <select id="cars" name="cars">
              <option value="mth">Maths</option>
              <option value="alg">Algorithms</option>
              <option value="phx">Physics</option>
            </select> 
          <input type="search" name="search" placeholder="search" />
        </div>
        <div id="header-container">
          <div id="left-align">
        <button><BiCaretLeft/></button>
          </div>
          <div id="right-align">
            <button><BiRefresh/></button>
            <button><BiImport/></button>
            <button><BiExport/></button>
            <button><BiCog/></button>
          </div>
        </div>
        <div id="body-container">body</div>
      </div>
    </div>
  );
}

export default App;
