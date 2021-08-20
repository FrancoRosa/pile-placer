import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PileSummary = ({colors}) => (
  <>
    <hr className="m-1"/>
    {colors &&
      <p className="heading has-text-centered has-text-link">
        {Object.entries(colors).reduce((sum,a)=>sum+a[1],0)} piles found
      </p>
    }
    <div className="columns">
      
      {Object.entries(colors).map(color => (
        <div className="column has-text-centered">
          <FontAwesomeIcon icon={faFlag} color={color[0]}/>
          <p>{color[1]}</p>
        </div>
      ))}
    </div>
  </>
)

export default PileSummary;