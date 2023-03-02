import React from 'react';
import PropTypes from 'prop-types';

const ReactFill = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
      className="ai ai-ReactFill"
    >
      <g clipPath="url(#clip0_950_642)">
        <path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128.665.382.954 1.834.729 3.703-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533 23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538c-.113-.489-.196-.963-.255-1.418-.23-1.87.054-3.322.715-3.708.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03-.705 3.112-.392 5.588.988 6.38.318.186.69.274 1.1.274 1.346 0 3.107-.959 4.888-2.622 1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689zm-6.37-3.263a22.023 22.023 0 0 1-.66 1.932 26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387zm-2.24 5.21c-.381.66-.773 1.287-1.179 1.869a25.453 25.453 0 0 1-4.412.005 25.457 25.457 0 0 1-2.201-3.806 26.064 26.064 0 0 1 2.192-3.82 25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952zM16.97 13c.264.655.49 1.311.675 1.947-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13zm-4.96 5.22c-.455-.47-.91-.993-1.36-1.566.44.02.89.035 1.345.035.46 0 .915-.01 1.36-.035-.44.573-.895 1.096-1.345 1.566zm-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932.201.39.412.782.642 1.174.23.391.464.773.704 1.144zm3.615-10.18c.455.47.91.993 1.36 1.566-.44-.02-.89-.035-1.345-.035-.46 0-.915.01-1.36.035.44-.573.895-1.096 1.345-1.566zM8.365 8.04a27.02 27.02 0 0 0-1.34 2.333 20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386zm-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964 14.875 14.875 0 0 1-1.37-.499zm2.632 6.99c-.665-.38-.954-1.834-.729-3.702.054-.46.142-.945.25-1.439.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132zm11.604-3.727c.23 1.869-.054 3.322-.715 3.708-.146.088-.337.127-.562.127-1.013 0-2.515-.807-4.11-2.28.685-.718 1.37-1.535 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423zm1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964.485.151.944.318 1.375.499 1.732.738 2.852 1.707 2.852 2.475-.005.768-1.125 1.742-2.857 2.475z"></path>
        <path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472 2.236 2.236 0 0 0 0 4.472z"></path>
      </g>
      <defs>
        <clipPath id="clip0_950_642">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ReactFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReactFill.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ReactFill;