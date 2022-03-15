import React, { useState, useEffect } from 'react';
import { IconSearch } from '@tabler/icons';
import GroupDescription from './GroupDescription';

import './ComparingDescription.css';

const ComparingDescription = (props) => {
  const [resetInput, setResetInput] = useState('');
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = props.dane[0].permissions.filter((category) =>
      category.category.toLowerCase().includes(searchWord.toLowerCase())
    );
    const uniqueCategories = [
      ...new Set(newFilter.map((category) => category.category)),
    ];
    props.onSetFilterState(uniqueCategories);
    setResetInput(e.target.value);
  };
  useEffect(() => {
    if (props.searchValue) {
      setResetInput('');
    }
  }, [props.searchValue]);

  return (
    <div className="ul-head ">
      <div className="title--container">
        <h3 className="title">Categories</h3>
        <div className="search-bar">
          <IconSearch />
          <input
            value={resetInput}
            className="search-input"
            type="text"
            placeholder="Search Category..."
            onChange={handleFilter}
          />
        </div>
      </div>
      {props.dane.map((dana) => (
        <GroupDescription name={dana.name} key={dana.id} />
      ))}
    </div>
  );
};
export default ComparingDescription;
