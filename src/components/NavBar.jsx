import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ onNextClick, onPreviousClick, showPrevious, showNext }) => (
  <div>
    {showPrevious && <button onClick={onPreviousClick}>Previous</button>}
    {showNext && <button onClick={onNextClick}>Next</button>}
  </div>
);

NavBar.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  showPrevious: PropTypes.bool.isRequired,
  showNext: PropTypes.bool.isRequired,
};

export default NavBar;