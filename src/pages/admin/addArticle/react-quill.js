import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Quill({setContent}) {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return <ReactQuill onBlur={()=>{setContent(document.querySelectorAll(".ql-container.ql-snow p"))}} modules={modules} theme="snow" placeholder="Content goes here..." />;
}

export default Quill;