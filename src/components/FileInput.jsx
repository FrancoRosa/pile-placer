const FileInput = () => {
  const name = 'pablito';

  return (
    <div className="file has-name is-large">
      <label className="file-label">
        <input className="file-input" type="file" />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
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
