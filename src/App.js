// import logo from "./logo.svg";
import "./App.css";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { BiFile } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiFolderOpen } from "react-icons/bi";

// STATE???
// import state from { React }
import React, { useState } from 'react';

// imports the content from the file...

// Uses react-latex (search npm for documentatioin)
var Latex = require("react-latex");

// import Color from "./color.json";
const colors = require("./color.json");
const content = require("./content.json")

// Rips the colors from the json and applies to css respectively
var root = document.querySelector(":root");

for (let i=0; i < colors.length; i++) {
  // Scans through css and sets up the css variables
  root.style.setProperty("--"+colors[i].name, "#"+colors[i].hex)
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
  // state
  const [isOpen, setisOpen] = useState(false);

  // const childrenas = props.children

  // console.log(childrenas)
  return (
    <div className="tab-together-item"> 
      <div className={(props.children) ? ('tab-item') : ('tab-item is-child')} onClick={(isOpen) ? (() => setisOpen(false)) : (() => setisOpen(true))} style={{cursor:'pointer'}}>
        <div className="circle-bg">{(props.children) ? ((isOpen) ? <BiFolderOpen/> : <BiFolder/>) : <BiFile/>}</div>
        <div>{props.text}</div>
        <div className={(isOpen) ? 'open':''}>{(props.children) ? <BiCaretDown/> : <div/>}</div>
      </div>
      <div className="child" style={(isOpen) ? {} : {display:'none'}}>
        {props.children}
      </div>
    </div>
  )
}

// function lenOfItem(n){
//   return Object.keys(content[n]).length;
// }

function populateTabContainer(){
//   // return 
//   const rows = [];
//   console.log(content.algorithms.name);
//   console.log(lenOfItem)

//   let lenOfList = Object.keys(content).length;
//   // let allNamesInList = content.map(object => object.name)

//   for (let i=0;i<lenOfList;i++){
//     for (let v=0;v<lenOfItem(i);v++){
//       console.log(i + "-" + v)
//   }
//     // console.log(i)
//   }
//     // return(tReturn)
}

function importAll(r) {
  let fd = {};
  r.keys().map(r);
  return fd;
}

function setupFS() {
  // Turn this ...

  // {
  //   "algorithms": {
  //       "Brute Force algorithm": [
  //           "linear Search"
  //       ],
  //       "Greedy algorithm": {
  //             "types": {
  //               "hello",
  //               "incagagoa"
  //             }
  //             "other-other-types": {
  //               "bla",
  //               "blabal"
  //             }
  //           }
  //       },
  //      ... (this goes on)

  // Into this ...

  // FOLDERS = ["algorithms", "algorithms/brute-force-algorithm", "algorithms/Greedy-algorithm", "algorithms/greedy-algorithm/types", "algorithms/Greedy-algorithm/types/other-types", "algorithms/Greedy-algorithm/types/other-types-types"]
  // FILES   = ["algorithms/linear-search.tex", "algorithms/greedy-algorithm/types/hello.tex", "algorithms/greedy-algorithm/types/incagagoa.tex"]
  // NUMBER_OF_FILES_IN_FOLDER = [["algorithms",5], ["algorithms/brute-force-algorithm",1], ["algorithms/Greedy-algorithm", 4]]

  // look for parents that are also objects, turn into a list of folders, and break those folders into an order, [first], [first/second] so that we dont run into an error if we just did [first/second]
}

function App() {
  return (
    <div className="App">
      <div id="grid-container">
        <div id="tabs-container">
          {/* {populateTabContainer()} */}
          <TabContainer text="algorithms" children={
            <div>
            <TabContainer text="brute force" children={
              <div>
              <TabContainer text="simple brute force"/>
              <TabContainer text="memorisation"/>
              <TabContainer text="simple linear"/>
              <TabContainer text="brute force" children={
              <div>
              <TabContainer text="simple brute force"/>
              <TabContainer text="memorisation"/>
              <TabContainer text="simple linear"/>
              </div>
            }/>
              </div>
            }/>
            <TabContainer text="memorisation"/>
            <TabContainer text="simple linear"/>
            </div>
          }/> 
          <TabContainer text="maths" children={
            <div>
            <TabContainer text="calculus"/>
            </div>
          }/> 
        </div>
        <div className="tabs-header-container">
            <select className="cars" name="cars">
              <option value="mth">Maths</option>
              <option value="alg">Algorithms</option>
              <option value="phx">Physics</option>
            </select> 
          <input type="search" name="search" placeholder="search" />
        </div>
        <div id="header-container">
          <div className="left-align">
        <button><BiCaretLeft/></button>
          </div>
          <div className="right-align">
            <button><BiRefresh/></button>
            <button><BiImport/></button>
            <button><BiExport/></button>
            <button><BiCog/></button>
          </div>
        </div>
        <div id="body-container">
          <Latex>
            {/* example LaTex file that would be here if shit was working \n\n $(51*414) */}
            LaTex allows the use of mathematical symbols such as: $51 \div 4 + 5\times3$
          </Latex>
        </div>
      </div>
    </div>
  );
}

export default App;
