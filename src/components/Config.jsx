import FileInput from "./FileInput"
import NumberInput from "./NumberInput"

const Config = () => {
  const defaults = {
    truckLen: 20,
    truckWid: 5,
    antennaX: 1,
    antennaY: 1,
    bay1: 15,
    bay2: 15,
  }

  const changeHandler = () => {
    console.log('... change found')
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-4 has-text-centered">Parameters</h1>
          <div className="columns">
            <NumberInput 
              label="Truck length"
              value={defaults.truckLen}
              placeholder="Truck with trailer in ft"
              changeHandler={changeHandler}
            />
            <NumberInput 
              label="Truck width"
              value={defaults.truckWid}
              placeholder="Trailer width in ft"
              changeHandler={changeHandler}
            />
          </div>
          <div className="columns">
            <NumberInput 
              label="Antenna from left"
              value={defaults.antennaX}
              placeholder="Antenna location in ft"
              changeHandler={changeHandler}
            />
            <NumberInput 
              label="Antenna from truck head"
              value={defaults.antennaY}
              placeholder="Antenna location in ft"
              changeHandler={changeHandler}
            />
          </div>
          <div className="columns">
            <NumberInput 
              label="Bay 1 from truck head"
              value={defaults.bay1}
              placeholder="Bay 1 location in ft"
              changeHandler={changeHandler}
            />
            <NumberInput 
              label="Bay 2 from truck head"
              value={defaults.bay2}
              placeholder="Bay 2 location in ft"
              changeHandler={changeHandler}
            />
          </div>
          <hr />
          <h1 className="title is-5 has-text-centered">File input</h1>
          <FileInput />
      
        </div>
        <div className="column">
          <h1 className="title is-4 has-text-centered">Layout</h1>
        </div>
      </div>
    </div>
  );
};

export default Config;

