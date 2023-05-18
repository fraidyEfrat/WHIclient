import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Quill({setContent}) {
  
 const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ]
  };
  // const modules = {
  //   toolbar: [
  //     [{ font: [] }],
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //     ["bold", "italic", "underline", "strike"],
  //     [{ color: [] }, { background: [] }],
  //     [{ script: "sub" }, { script: "super" }],
  //     ["blockquote", "code-block"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
  //     ["link", "image"],
  //     ["clean"]
  //   ]
  // };
  //  const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image"
  // ];
  //ocument.querySelectorAll(".ql-container.ql-snow p")
//console.log(document.querySelectorAll(".ql-container.ql-snow p"));
  return <ReactQuill onChange={(content)=>{setContent(content)}} modules={modules} theme="snow" placeholder="Content goes here..." />;
}

export default Quill;