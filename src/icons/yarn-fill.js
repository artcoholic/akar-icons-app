import React from 'react';
import PropTypes from 'prop-types';

const YarnFill = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
      className="ai-YarnFill"
    >
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.994 11.675C23.825 5.23 18.561.013 12.004 0 5.21-.005-.3 5.668.013 12.556c.28 6.216 5.344 11.296 11.71 11.441 6.81.157 12.449-5.4 12.271-12.322zM7.92 7.525c-.145.28-.258.575-.336.879-.025.018-.02.05-.032.073 0 .05 0 .1-.014.147v.328c.017.05.012.1.017.15.029.065-.019.146.054.198.088.3.187.594.347.861.05.084.042.129-.031.194-.381.349-.723.734-.987 1.183-.472.802-.648 1.679-.648 2.6a.323.323 0 0 1-.016.104.275.275 0 0 1-.062.105c-.609.667-.936 1.427-.786 2.348.076.467.212.91.49 1.298a.395.395 0 0 1 .089.273c-.018.404.144.732.488.939.58.351 1.207.477 1.875.328a.735.735 0 0 0 .133-.052c.068-.032.137-.063.198-.053.068.01.128.063.189.115.035.03.07.06.107.084.381.228.809.286 1.238.267 1.044-.044 2.085-.107 3.121-.252.342-.047.67-.133.95-.343a.64.64 0 0 1 .198-.1c1.049-.346 2.052-.798 2.967-1.406.555-.364 1.137-.662 1.794-.808.359-.078.62-.315.78-.648.408-.844-.217-1.79-1.19-1.799-.658-.005-1.263.2-1.843.49a8.696 8.696 0 0 0-.615.352c-.19.115-.38.231-.579.333l-.029.017c-.04.024-.083.049-.136.046v-.1c.052-1.395-.401-2.607-1.328-3.646-.056-.062-.046-.102-.005-.162a6.753 6.753 0 0 0 .831-1.6c.344-.973.413-1.972.308-2.987-.05-.489-.15-.966-.356-1.417-.18-.385-.515-.567-.93-.474-.111.023-.149-.01-.194-.102a4.747 4.747 0 0 0-.468-.817.886.886 0 0 0-.685-.36c-.444-.025-.75.216-1.008.539-.194.243-.34.519-.458.805-.036.087-.08.136-.15.162a.382.382 0 0 1-.094.02 3.28 3.28 0 0 0-2.014.97 1.34 1.34 0 0 1-.543.349c-.293.097-.496.299-.637.57z"
        ></path>
        <path d="M14.947 15.813c0 .242-.056.478-.086.713-.026.207-.005.231.205.195.472-.082.9-.28 1.311-.515.441-.251.861-.537 1.332-.726a3.013 3.013 0 0 1 1.134-.243c.343 0 .582.186.624.48.04.272-.11.533-.384.59-.781.166-1.456.551-2.113.98-.882.569-1.842.98-2.841 1.295-.037.01-.085.019-.108.041-.236.25-.548.292-.863.333-.884.116-1.773.168-2.665.22a3.049 3.049 0 0 1-.77-.026c-.41-.08-.583-.233-.645-.57-.056-.301.086-.587.388-.784l.116-.073a1.306 1.306 0 0 1-.398-.364c-.05-.069-.076-.026-.092.031l-.15.57c-.034.126-.076.25-.129.37-.152.348-.43.516-.797.55a1.976 1.976 0 0 1-1.065-.215c-.23-.113-.299-.283-.223-.533.04-.134.116-.25.207-.391-.317.063-.456-.121-.566-.344a2.374 2.374 0 0 1-.231-1.54c.081-.424.33-.77.63-1.069.175-.175.228-.344.223-.59-.04-1.425.498-2.595 1.605-3.499.097-.081.195-.165.297-.239.063-.044.07-.073.018-.138-.286-.36-.509-.75-.61-1.204-.117-.511.057-.955.314-1.38.037-.057.094-.086.158-.11.323-.116.595-.291.842-.538.555-.555 1.243-.81 2.03-.776.1.005.144-.024.175-.118.117-.344.264-.675.461-.98a1.26 1.26 0 0 1 .26-.31c.194-.16.36-.137.49.076.242.386.428.8.616 1.215.048.105.084.142.194.07a2.03 2.03 0 0 1 .417-.189c.116-.04.184-.013.234.108.147.354.226.724.27 1.104.013.105.037.207.024.312-.008.228.003.457.005.688 0 .102-.036.205-.005.309-.023.624-.189 1.214-.43 1.786-.225.535-.553 1.01-.881 1.485-.129.183-.126.186.042.336.818.737 1.27 1.663 1.42 2.743.006.042.004.087.004.131-.034.1.003.197.005.294.009.148-.025.296 0 .44z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

YarnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

YarnFill.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default YarnFill;
