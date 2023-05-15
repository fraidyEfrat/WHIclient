
import { useEffect, useState } from "react";
import axios from "axios";
import { FileUpload } from 'primereact/fileupload';
import { useParams } from 'react-router-dom';
import { MuiFileInput } from 'mui-file-input';
import { Button } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';


const token = sessionStorage.getItem("token");
var idFolder;
const AddFile = async (idFolder)=>{
  const { id } = useParams();
  if (!idFolder) {
    idFolder = id;
  }
}

//     if (responseOfFile.ok) {
//         if (responseOfFile.ok) {

//             setFile(await responseOfFile.json())
//         }
//         else {
//             setUnauthorized(true);
//             const err = await responseOfFile.json();
//             setErr(err.message);
//             console.log(err.message)
//         }
//     }
// }

const Uploader = ({content, setContent, file, setFile, setName, label }) => {
  const [selectFile, setSelectFile] = useState(null);
  const [selected, setSelected] = useState(false);
  const selectedFunc = async () => {
    console.log("here 1!");
    if (selectFile) {
      const formData = new FormData()
      formData.append("file", selectFile)
      console.log("useEffect")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
console.log("here2!");
      axios.post("http://localhost:3600/api/upload", formData, config ,idFolder).then(({ data }) => {
        if (data?.name) {
          console.log(data.name)
          console.log(data.location)
          setFile(data.location)
          setName(data.location)
          setContent(data.name)
          }
          console.log("here3!");
      }).catch(err => {
        console.log(err)
      })
    }

    setSelected(false);
  }

  const onSelectFile = (e) => {
    setSelected(true)
    console.log("e.target")
    // console.log(e.target.files[0])
    setSelectFile(e.target.files[0])
  }

  function handleButtonClick() {
    document.getElementById('file-input').click();
  }
  


  return (
    <>
      {selected ? selectedFunc() : <></>}
      {/* <FileUpload onSelect={handleFileUpload} multiple accept="application\pdf" /> */}
      {/* <input type="file"  onChange={onSelectFile} name="file" />
      <MuiFileInput
        placeholder="Insert a file"
        value={selectFile}
        onChange={onSelectFile}
      /> */}
       <Button onClick={handleButtonClick}>{selectFile ?  <ImageIcon></ImageIcon> : "Select File"}</Button><br></br>
        <input type="file"  onClick={onSelectFile} name="file" id="file-input" />

    </>
  )
}

export default Uploader;