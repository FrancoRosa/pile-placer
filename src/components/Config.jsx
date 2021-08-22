import FileInput from "./FileInput"
import NumberInput from "./NumberInput"
import { useState } from "react";
import { setConfig } from "../js/api";
import { useLocalStorage } from "../js/helpers";
import epsgCodes from '../assets/epsg_codes.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const Config = () => {
   
  const [localconfig, setLocalConfig] = useLocalStorage('config', {})
  const [truckLen, setTruckLen] =  useState(localconfig.truckLen)
  const [truckWid, setTruckWid] =  useState(localconfig.truckWid)
  const [antennaX, setAntennaX] =  useState(localconfig.antennaX)
  const [antennaY, setAntennaY] =  useState(localconfig.antennaY)
  const [bay1, setBay1] =  useState(localconfig.bay1)
  const [bay2, setBay2] =  useState(localconfig.bay2)
  const [epsg, setEpsg] =  useState(localconfig.epsg)
  const [feedback, setFeedback] =  useState('')

  const uploadConfig = () => {
    setLocalConfig({
      truckLen, truckWid,
      antennaX, antennaY,
      bay1, bay2, epsg
    })
    setConfig({
      truckLen, truckWid,
      antennaX, antennaY,
      bay1, bay2, epsg
    })
      .then(() => setFeedback('Success'))
      .catch(() => setFeedback('Fail'))
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="columns">
            <NumberInput 
              label="Truck length"
              value={truckLen}
              placeholder="Truck with trailer in ft"
              changeHandler={setTruckLen}
            />
            <NumberInput 
              label="Truck width"
              value={truckWid}
              placeholder="Trailer width in ft"
              changeHandler={setTruckWid}
            />
          </div>
          <div className="columns">
            <NumberInput 
              label="Antenna from left"
              value={antennaX}
              placeholder="Antenna location in ft"
              changeHandler={setAntennaX}
            />
            <NumberInput 
              label="Antenna from truck head"
              value={antennaY}
              placeholder="Antenna location in ft"
              changeHandler={setAntennaY}
            />
          </div>
          <div className="columns">
            <NumberInput 
              label="Bay 1 from truck head"
              value={bay1}
              placeholder="Bay 1 location in ft"
              changeHandler={setBay1}
            />
            <NumberInput 
              label="Bay 2 from truck head"
              value={bay2}
              placeholder="Bay 2 location in ft"
              changeHandler={setBay2}
            />
          </div>
          <div className="columns">
            <NumberInput 
              label="EPSG code"
              value={epsg}
              placeholder="Projected coordinate reference"
              changeHandler={setEpsg}
            />
            <div className="column is-flex-direction-column is-flex is-flex-centered">
              <p className="heading has-text-link">EPSG Reference</p>
              <a href={epsgCodes} target="blank" className="has-text-white title is-2">
                <FontAwesomeIcon icon={faFileAlt} /> 
              </a>
            </div>
            <div className="column is-flex-direction-column is-flex is-flex-centered">
              <p className="heading has-text-link">EPSG Browser</p>
              <a href="https://epsg.io/" target="blank" className="has-text-white title is-2">
                <FontAwesomeIcon icon={faSearch} /> 
              </a>
            </div>
            <div className="column is-flex is-justify-content-center is-align-content-center">
              <button className="button ml-2" onClick={uploadConfig}>Save</button>
              <p className={`success ml-2 ${feedback == 'Success' ? 'has-text-success' : 'has-text-danger'}`}>{feedback}</p>
            </div>
          </div>
          <hr />
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

