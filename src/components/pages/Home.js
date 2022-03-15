import React, { useState } from 'react';

import ListDescription from '../Home/ListDescription';
import ListItem from '../Home/ListItem';
import './Home.css';

function Home(props) {
  const [sort, setSort] = useState(true);
  const [uncheckedAllState, setUncheckedAllState] = useState(false);

  const sortByGroup = (isSorting) => {
    setSort(isSorting);
  };

  // sort groups
  const sortedGroups = props.dane.sort((a, b) =>
    sort ? a.id - b.id : b.id - a.id
  );
  const toCompare = (data) => {
    props.onData(data);
  };
  const uncheckedAll = (data) => {
    props.onUncheckedAll(data);
    setUncheckedAllState(data);
  };

  return (
    <div className="home">
      <div className="home-container">
        <h3 className="title-container">Group ({props.dane.length})</h3>
        <ul className="home-ul">
          <ListDescription
            onSorting={sortByGroup}
            dataToCompare={props.dataToCompare}
            onUncheckedAll={uncheckedAll}
          />
          {sortedGroups.map((dana) => (
            <ListItem
              dataToCompare={props.dataToCompare}
              onData={toCompare}
              onUncheckedAll={uncheckedAllState}
              dane={dana}
              name={dana.name}
              update={dana.lastUpdate}
              members={dana.activeMemmers}
              membersActive={dana.activeMemmers}
              membersDeactived={dana.deactivatedMemmers}
              pendingMemmers={dana.pendingMemmers}
              permissions={dana.permissions}
              key={dana.id}
              id={dana.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
