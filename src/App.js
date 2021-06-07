import React from "react";
import "./style.css";
import Editor from './Editor'

export default function App() {
  return (
    <>
     <div className="pane top-pane">
        <Editor/>
        <Editor/>
        <Editor/>
     </div>
     <div className='pane'>
        <iframe 
        title='output'
        sandbox='allow-scripts'
        frameBorder='0'
        width='100%'
        height='100%'
        />
     </div>
    </>
  );
}
