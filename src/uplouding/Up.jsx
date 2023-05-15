import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Uploader from "./Uploader";
// import File from "../pages/AddFile/file";
const Up = ({setContent,content}) => {
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [err, setErr] = useState(null);
    const navigate = useNavigate()

    return (
        <>    
            <div className="new-book">
                <form>
                    {/* {file} */}
                    <Uploader content={content} setContent={setContent} file={file} setFile={setFile} setName={setName} label="Add File" />
                    {err && err}
                </form>
            </div>


        </>
    )
}

export default Up;