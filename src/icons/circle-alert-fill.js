import React from 'react';
import PropTypes from 'prop-types';

const CircleAlertFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
      className="ai ai-CircleAlertFill"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm1 6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V7zm0 9.5a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0v-.5z"
      ></path>
    </svg>
  );
};

CircleAlertFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CircleAlertFill;
