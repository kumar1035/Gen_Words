// import React, { useEffect } from 'react'
// import '@toast-ui/editor/dist/toastui-editor.css';
// import {Editor} from '@toast-ui/react-editor';
// import { Button } from '@/components/ui/button';
// import { Copy } from 'lucide-react';

// interface props{
//   aiOutput:string;
// }
// function OutputSection({aiOutput}:props) {
//   const editorRef:any = React.useRef();


//   useEffect(() =>{
//     const editorInstance = editorRef.current.getInstance();
//     editorInstance.setMarkdown(aiOutput);

//   },[aiOutput])
  
//   return (
//     <div className = 'bg-white shadow-lg border rounded-lg '>
//       <div className  = 'flex justify-between items-center p-5'>
//         <h2 className = 'font-medium text-lg'>Your Result</h2>
//         <Button className = 'flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
//       </div>
//       <Editor
//       ref = {editorRef}
//         initialValue="Your Result will appear here"
//         initialEditType="wysiwyg"
//         height  = '500px'
       
//         useCommandShortcut={true}
//         onChange = {()=>console.log(editorRef.current?.getInstance().getMarkdown())}
//       />
//     </div>
//   )
// }

// export default OutputSection

// function setMarkdown(aiOutput: string): any {
//   throw new Error('Function not implemented.');
// }
import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface OutputSectionProps {
  aiOutput: string;
}

function OutputSection({ aiOutput }: OutputSectionProps) {
  const quillRef = useRef<ReactQuill | null>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor(); // ✅ Access actual Quill instance
      editor.setText(aiOutput); // You can also use setContents or setHTML via dangerouslyPasteHTML
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
      </div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "400px" }}
        placeholder="Your result will appear here..."
      />
    </div>
  );
}

export default OutputSection;
