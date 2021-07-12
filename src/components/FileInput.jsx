import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const FileInput = () => {
  const [path, setPath] = useState('');
  const [name, setName] = useState('Nothing selected yet');

  useEffect(()=>{
    const handleFiles = e => {
      let localPath = URL.createObjectURL(e.target.files[0]);
      let localName = e.target.files[0].name
      setPath(localPath)
      setName(localName)
    }

    const inputElement = document.querySelector(".file-input");
    inputElement.addEventListener("change", handleFiles, false);
  },[])

  return (
    <div className="file has-name is-large">
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
  )
};

export default FileInput;
