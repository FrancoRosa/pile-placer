import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { uploadFile } from '../js/api';

const FileInput = () => {
  const [path, setPath] = useState('');
  const [name, setName] = useState('Nothing selected yet');
  const [epsg, setEpsg] = useState('');

  useEffect(()=>{
    const handleFiles = e => {
      let localPath = e.target.files[0];
      let localName = e.target.files[0].name
      setPath(localPath)
      setName(localName)
    }

    const inputElement = document.querySelector(".file-input");
    inputElement.addEventListener("change", handleFiles, false);
  },[])

  const handleFiles = (file, epsg_code) => {
    uploadFile(file, epsg_code).then(res => {
      console.log(res)
    })
  }

  return (
    <>
      <div className="file has-name is-medium">
        <label className="file-label">
          <input className="file-input" type="file" accept=".csv"/>
          <span className="file-cta">
            <span className="file-icon">
            <FontAwesomeIcon icon={faUpload} />
            </span>
            <span className="file-label">
              Choose a file ...
            </span>
          </span>
          <span className="file-name">
            {name}
          </span>
        </label>
      </div>
      <div className="columns">
        <div className="field column mt-1">
          <label className="label">EPSG Code:</label>
          <div className="control">
            <input 
              className="input" type="text" 
              placeholder="Zone code"
              onChange={e => setEpsg(e.target.value)}
              value={epsg}
            />
          </div>
        </div>
        <div className="column mt-4">
          { path && epsg ? 
            <div className="is-flex is-justify-content-center m-4">
              <button 
                className="button is-outlined is-success" 
                onClick={() => handleFiles(path, epsg)}>Upload
              </button>
            </div>  :
            ''
          }
        </div>
      </div>
    </>
  )
};

export default FileInput;
