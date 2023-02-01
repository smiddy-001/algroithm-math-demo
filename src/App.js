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
import { BiSearch } from "react-icons/bi";
// Latex in react stuff (npm install --save react-latex-next)
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
// React Stuff
import { useState } from "react";
import { useEffect } from "react";

const get_text_file = async (filepath) => {
  // prefix public dir files with `process.env.PUBLIC_URL`
  // see https://create-react-app.dev/docs/using-the-public-folder/

  // was throwing errors when I didn't import the filepath. This line is for my sanity...
  let res = {"text":""};
  res = await fetch(`${process.env.PUBLIC_URL}/${filepath}`);

  // check for errors
  if (!res.ok) {
    throw res;
  }

  return res.text();
};

export function TextFile({ fileName }) {
  const [text, setText] = useState(""); // init with an empty string

  useEffect(() => {
    get_text_file(`${fileName}`).then(setText).catch(console.error);
  }, [fileName]);
  return (
      {text}
  );
}

// import Data from './content/test.tex';

// STATE???

// imports the content from the file...
// const data = window.open('./content/example.tex', 'r')

// import Color from "./color.json";
const config = require("./config.json");
const data = require("./content.json")

// Rips the colors from the json and applies to css respectively
var root = document.querySelector(":root");

for (let i=0; i < config.length; i++) {
  // Scans through css and sets up the css variables
  root.style.setProperty("--"+config[i].name, "#"+config[i].hex)
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

// Python Equivelant

// for (var p, _pj_c = 0, _pj_a = Object.keys(data), _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
//   p = _pj_a[_pj_c];

//   for (var i, _pj_f = 0, _pj_d = data[p], _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
//     i = _pj_d[_pj_f];
//     var dataFileList = [];
//     try {
//       for (var v = 0, _pj_g = data[p][i].length; v < _pj_g; v += 1) {
//         dataFileList.append(`${p}/${i}/${data[p][i][v]}.md`);
//       }
//     } catch (e) {
//       for (var v, _pj_i = 0, _pj_g = data[p][i], _pj_h = _pj_g.length; _pj_i < _pj_h; _pj_i += 1) {
//         v = _pj_g[_pj_i];

//         for (var y = 0, _pj_j = data[p][i][v].length; y < _pj_j; y += 1) {
//           dataFileList.append(`${p}/${i}/${data[p][i][v][y]}.md`);
//         }
//       }
//     }
//   }
// }



// console.log(data['algorithms']['Backtracking algorithm'][0]);

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
          <div className="circle-bg">
            <BiSearch/>
          </div>
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
                hello
            </Latex>
        </div>
      </div>
    </div>
  );
}

export default App;
