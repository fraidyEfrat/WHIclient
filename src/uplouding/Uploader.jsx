
import { useEffect, useState } from "react";
import axios from "axios";
import { FileUpload } from 'primereact/fileupload';
import { useParams } from 'react-router-dom';

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

const Uploader = ({ file, setFile, setName, label }) => {
  const [selectFile, setSelectFile] = useState();
  const [selected, setSelected] = useState(false);
  const selectedFunc = async () => {
    if (selectFile) {
      const formData = new FormData()
      formData.append("file", selectFile)
      console.log("useEffect")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      axios.post("http://localhost:3600/api/upload", formData, config ,idFolder).then(({ data }) => {
        if (data?.name) {
          console.log(data.name)
          console.log(data.location)
          setFile(data.location)
          setName(data.location)
          
          }
      }).catch(err => {
        console.log("error")
      })
    }

    setSelected(false);
  }

  const onSelectFile = (e) => {
    setSelected(true)
    console.log("e.target")
    setSelectFile(e.target.files[0])
  }

  return (
    <>
      {selected ? selectedFunc() : <></>}
      <label htmlFor="file"> {label ? label : "File"} </label>
      {/* <FileUpload onSelect={handleFileUpload} multiple accept="application\pdf" /> */}
      <input type="file" onChange={onSelectFile} name="file" />
    </>
  )
}

export default Uploader;