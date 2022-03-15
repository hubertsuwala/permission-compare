import './GroupDescription.css';

const GroupDescription = (props) => (
  <div className="grups-wrapper">
    <h3 className="title">{props.name}</h3>
    <div className="group-description-wrapper">
      <p>Read</p>
      <p>Create</p>
      <p>Update</p>
      <p>Delete</p>
    </div>
  </div>
);

export default GroupDescription;
