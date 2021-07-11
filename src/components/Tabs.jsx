import { 
  faTools,
  faMapMarked
} from '@fortawesome/free-solid-svg-icons';
import Tab from './Tab';

const Tabs = () => {
    return (
    <div className="tabs is-centered is-large">
      <ul>
        <Tab name="Map" icon={faMapMarked} />
        <Tab name="Config" icon={faTools} />
      </ul>
    </div>
  )
}

export default Tabs;
