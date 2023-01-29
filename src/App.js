// import logo from './logo.svg';
import './App.css';
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";


// imports the content from the file...

// Uses react-latex (search npm for documentatioin)
var Latex = require('react-latex');

// import Color from './color.json';
const colors = require('./color.json');
const content = require('./content/content.json')

// Rips the colors from the json and applies to css respectively
var root = document.querySelector(':root');

for (let i=0; i < colors.length; i++) {
  // Scans through css and sets up the css variables
  root.style.setProperty('--'+colors[i].name, '#'+colors[i].hex)
}

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


// console.log(colors[0].hex);
// console.log(colors.length)
// console.log(colors[0].hex)


function TabContainer(props) {
  return (
    <div id="tab-item" style={{color:(props.text !== '' ? (''):('blue'))}}>
      <div id='circle-bg'>2</div>
      <div>{props.text}{props.text !== '' ? '' : 'EMPTY FIELD FIX NOW'}</div>
      <div><BiCaretDown/></div>
    </div>
  )
}

function populateTabContainer(){
  // return 
  const rows = [];
  console.log(content.algorithms.name)
    for (let i=0; i<content.length; i++){
      // console.log(content)
      console.log('./content/' + content[i]+ '/' + '.tex')
      // rows.push(<TabContainer text={content[i].name}/>);
    }
    return(rows)
  // )
}

function importAll(r) {
  let fd = {};
  r.keys().map(r);
  return fd;
}

function setupFS() {
  // get files in content folder

  // create json file that follows the convention:

  // [
  //   algorithms[
  //     {
  //       "name"  : "example",
  //       "tag" : "example testing"
  //      }
  //   maths[
  //     {
  //       "name"  : "calculus",
  //       "tag" : "differencial integration"
  //     },
  //     {
  //       "name"  : "bla",
  //       "tag" : "bla testing"
  //     }
  //   physics[
  //     {
  //       "name"  : "bla",
  //       "tag" : "bla testing"
  //     },
  //     {
  //       "name"  : "bla",
  //       "tag" : "bla testing"
  //     }
  //   ]
  // ]
}

function App() {
  return (
    <div className="App">
      <div id="grid-container">
        <div id="tabs-container">
          {populateTabContainer()}
        </div>
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
        <div id="body-container">
          <Latex>
            What is $(3\times 4) \div (5-3)$
          </Latex>
        </div>
      </div>
    </div>
  );
}

export default App;
