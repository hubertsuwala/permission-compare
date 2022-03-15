import React, { useState } from 'react';
import ComparingDescription from '../Comparing/ComparingDescription';
import ListCategories from '../Comparing/ListCategories';
import './Comparing.css';

function Comparing(props) {
  const [filterState, setFilterState] = useState([]);
  const [searchValue, setSearchValue] = useState(false);
  const uniqueCategories = [
    ...new Set(
      props.dataToCompare
        .map((dan) => dan.permissions.map((da) => da.category))
        .flat()
    ),
  ];
  const permissionsName = props.dataToCompare[0].permissions;

  return (
    <div className="comparing">
      <div className="home-container">
        <h3 className="title-container">
          Comparing groups ({props.dataToCompare.length})
        </h3>
        <div className="comparing-container">
          <ComparingDescription
            dane={props.dataToCompare}
            onSetFilterState={setFilterState}
            searchValue={searchValue}
          />
          {uniqueCategories.map((cat, i) => (
            <ListCategories
              filterState={filterState}
              categories={cat}
              key={i}
              dane={props.dataToCompare}
              permissionsName={permissionsName}
              onSetSearchValue={setSearchValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comparing;
