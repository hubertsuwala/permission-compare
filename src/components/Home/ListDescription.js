import { useState, useEffect } from 'react';
import {
  IconMinus,
  IconArrowNarrowDown,
  IconArrowNarrowUp,
} from '@tabler/icons';

import Checkbox from '../UI/Checkbox';
import './ListDescription.css';

const ListDescription = (props) => {
  const [checked, setChecked] = useState(false);
  const [isSorting, setSorting] = useState(false);

  useEffect(() => {
    if (props.dataToCompare.length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [props.dataToCompare.length]);

  const sortByGroup = () => {
    // toggle
    setSorting(!isSorting);
    // lifting up state
    props.onSorting(isSorting);
  };

  const checkboxCheck = (val) => {
    setChecked(false);
    // lift up false
    props.onUncheckedAll(val);
  };
  return (
    <li className="description-container">
      <div className="name">
        <Checkbox checked={checked} onChange={checkboxCheck}>
          {checked && <IconMinus />}
        </Checkbox>
        {isSorting ? (
          <IconArrowNarrowDown onClick={sortByGroup} />
        ) : (
          <IconArrowNarrowUp onClick={sortByGroup} />
        )}
        <p>Name</p>
      </div>
      <p>Last update</p>
      <p>All memebers</p>
      <p>Active</p>
      <p>Deactived</p>
      <p>Pending</p>
    </li>
  );
};

export default ListDescription;
