// import React, { Component } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import { useState } from 'react';
import React, { useState } from "react";
// import { Editor } from "primereact/editor";


export default function BasicDemo() {
  const [text, setText] = useState('');

  return (
      <div className="card">
          {/* <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} /> */}
      </div>
  )
}

// const EditorConvertToHTML =()=> {

//  const [editor, setEditor] = useState("");
//     return (
//       <>
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={setEditor(editor)}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div></>
//     );
// }

// export default EditorConvertToHTML;