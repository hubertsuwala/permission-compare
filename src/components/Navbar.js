import { IconChevronRight } from '@tabler/icons';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Button from './UI/Button';
import './Navbar.css';

const Navbar = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [link, setLink] = useState(false);

  // check if you checked any of group to compare
  useEffect(() => {
    if (props.datara.length > 0) {
      setDisabled(false);
    }
    if (props.datara.length > 3 || props.datara.length < 1) {
      setDisabled(true);
    }
  });

  // navigate to home page
  const navigate = useNavigate();
  const showPermission = () => {
    setLink(!link);
    props.onExit(link);
    setDisabled(link);
    return link
      ? navigate('/permission-compare')
      : navigate('/permission-compare/comparing');
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {link ? (
          <Link
            to={link ? '/permission-compare' : ''}
            className="link"
            onClick={showPermission}
          >
            <div className={`navbar-item ${link ? 'cet' : ''}`}>
              Permissions
            </div>
          </Link>
        ) : (
          <div className={`navbar-item ${link ? 'cet' : ''}`}>Permissions</div>
        )}
        {link && (
          <>
            <IconChevronRight /> <div className="navbar-item">Comparing</div>
          </>
        )}
      </div>
      <Button type="button" disabled={disabled} onClick={showPermission}>
        {`${!link ? 'Show Permission' : 'Exit'}`}
      </Button>
    </nav>
  );
};

export default Navbar;
