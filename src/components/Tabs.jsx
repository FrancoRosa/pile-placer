import { 
  faTools,
  faMapMarked
} from '@fortawesome/free-solid-svg-icons';
import Tab from './Tab';

const Tabs = () => {
    return (
    <div className="tabs is-centered m-0">
      <ul>
        <Tab name="Map" icon={faMapMarked} />
        <Tab name="Config" icon={faTools} />
      </ul>
    </div>
  )
}

export default Tabs;
