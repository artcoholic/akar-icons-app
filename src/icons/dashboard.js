import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      className="ai ai-Dashboard"
    >
      <rect x="2" y="2" width="8" height="20" rx="2"></rect>
      <rect x="14" y="2" width="8" height="8" rx="2"></rect>
      <rect x="14" y="14" width="8" height="8" rx="2"></rect>
    </svg>
  );
};

Dashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dashboard.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dashboard;
