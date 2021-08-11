import React from 'react';
import PropTypes from 'prop-types';

const OpenEnvelope = (props) => {
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
      id="OpenEnvelope"
    >
      <path d="M2 11.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 11.083V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.917z"></path>
      <path d="M2 9l7.501 6.001a4 4 0 0 0 4.998 0L22 9"></path>
    </svg>
  );
};

OpenEnvelope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OpenEnvelope.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block',
};

export default OpenEnvelope;
