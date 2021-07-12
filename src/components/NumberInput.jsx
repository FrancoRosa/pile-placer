const NumberInput = ({label, value, placeholder, changeHandler}) => {
  return(
    <div className="field column">
      <label className="label">{label}</label>
      <p className="control">
        <input className="input is-large" type="number" step={0.1}
          placeholder={placeholder}
          onChange={changeHandler}
          value={value}
        />
      </p>
    </div>
  );
};

export default NumberInput