import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './Tools';

function Editor() {
  const data = {};
  var editor = null;

  const handleSave = async (editorRef) => {
    if (editorRef) {
      const savedData = await editorRef.save();
      console.log(savedData);
    }
  };
  return (
    <div>
      <div className='App'>
        <h1>LTTSTORE.COM</h1>
        <EditorJs
          instanceRef={(instance) => (editor = instance)}
          data={data}
          tools={EDITOR_JS_TOOLS}
        />
        <button onClick={() => handleSave(editor)}>Save blog</button>
      </div>
    </div>
  );
}

export default Editor;
