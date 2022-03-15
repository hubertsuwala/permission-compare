import './Checkbox.css';

const Checkbox = (props) => {
  const inputCheck = () => {
    props.onChange(!props.checked);
  };
  return (
    <div
      value={props.value}
      name={props.dane}
      className="checkbox"
      onClick={inputCheck}
      onKeyDown={inputCheck}
      role="button"
      tabIndex="0"
    >
      {props.children}
    </div>
  );
};

export default Checkbox;
