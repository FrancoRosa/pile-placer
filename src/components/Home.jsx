import UserMap from "./UserMap";
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <UserMap />
        </div>
        <div className="column is-one-fifth">
          <p className="title is-5 has-text-centered mt-4"> Next at: </p>
          <div className="flag-icon color_red">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <p className="title is-3 has-text-centered mt-3 mb-4"> 10 ft </p>
          <hr />
          <p className="title is-5 has-text-centered"> Landed </p>
          <p className="title is-3 has-text-centered"> 50 </p>
        </div>
      </div>
    </div>
  );
};

export default Home;