import Permissions from './Permissions';
import './Categories.css';

const Categories = (props) => (
  <div className="list-permissions-container">
    <div className="category-name">{props.name}</div>

    {props.dane.map((dana, i) => (
      <Permissions name={props.name} dane={dana.permissions} key={i} />
    ))}
  </div>
);
export default Categories;
