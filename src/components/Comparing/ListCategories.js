import { useState, useEffect } from 'react';
import { IconChevronUp, IconChevronDown } from '@tabler/icons';
import Categories from './Categories';
import './ListCategories.css';

const ListCategories = (props) => {
  const [showMore, setShowMore] = useState(false);
  const showHide = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    if (props.categories === props.filterState.join()) {
      setShowMore(true);
      props.onSetSearchValue(showMore);
    }
  }, [props.filterState, props.categories]);
  return (
    <>
      <div className="categ">
        <div className="categories">
          {showMore ? (
            <IconChevronUp onClick={showHide} />
          ) : (
            <IconChevronDown onClick={showHide} />
          )}
          <p>{props.categories}</p>
        </div>

        <div className="cat" />
        {props.dane.length >= 2 && <div className="cat" />}
        {props.dane.length >= 3 && <div className="cat" />}
      </div>
      {/* when click icon next to category then display above */}
      {showMore &&
        props.permissionsName.map(
          (dana, i) =>
            // display name of category === category
            props.categories === dana.category && (
              <Categories name={dana.name} key={i} dane={props.dane} />
            )
        )}
    </>
  );
};

export default ListCategories;
