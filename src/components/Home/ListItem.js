import { IconCheck } from '@tabler/icons';

import { useState, useEffect } from 'react';
import Checkbox from '../UI/Checkbox';
import './ListItem.css';

const ListItem = (props) => {
  const [checked, setChecked] = useState(false);

  // transform date format
  const date = new Date(props.update).toLocaleString('en-US', {
    weekday: 'long',
  });
  useEffect(() => {
    if (props.dataToCompare.length === 0) {
      setChecked(false);
    }
  }, [props.dataToCompare.length]);

  const checkboxCheck = (val) => {
    // checkbox true/false
    setChecked(val);
    props.onData(props.dane);
  };

  return (
    <li className="description-container item-container">
      <div className="item-name">
        <Checkbox
          checked={checked}
          dane={props.dane.name}
          onChange={checkboxCheck}
        >
          {checked && <IconCheck />}
        </Checkbox>
        <p>{props.name}</p>
      </div>
      <p>{date}</p>
      <p>{props.members}</p>
      <p>{props.membersActive}</p>
      <p>{props.membersDeactived}</p>
      <p>{props.pendingMemmers}</p>
    </li>
  );
};

export default ListItem;
