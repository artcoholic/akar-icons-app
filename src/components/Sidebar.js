import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

const Container = styled.section`
  width: 25vw;
  min-width: 360px;
  max-width: 480px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1920px) {
    padding: 36px;
  }
`;

const Logo = styled.div`
  border-radius: 8px;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  svg {
    display: block;
  }
`;

const Toggle = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.tertiary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
  svg {
    display: block;
    color: ${(props) => props.theme.colors.primary};
    fill: ${(props) => props.theme.colors.primary};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    .tooltip {
      opacity: 1;
      transform: translateY(-12px);
    }
  }
  .tooltip {
    position: absolute;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    border-radius: 2px;
    font-size: 10px;
    opacity: 0;
    top: -24px;
    text-transform: uppercase;
    padding: 0.5em 0.75em;
    white-space: nowrap;
    pointer-events: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -4px;
      border-width: 4px;
      border-style: solid;
      border-color: ${(props) => props.theme.colors.secondary} transparent
        transparent transparent;
    }
  }
`;

const Title = styled.h1`
  font-weight: 900;
  margin-bottom: 0.25em;
  color: ${(props) => props.theme.colors.secondary};
`;

const Headline = styled.h2`
  font-weight: 300;
  margin-inline-end: 24px;
  line-height: 1.25em;
  margin-bottom: 48px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Note = styled.p`
  font-size: 0.75rem;
  line-height: 1.25;
  opacity: 0.5;
  color: ${(props) => props.theme.colors.secondary};
  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;

const Button = styled.a`
  -webkit-appearance: none;
  position: relative;
  border: 0;
  padding: 0px 1.2em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  overflow: hidden;
  ${color}

  &:hover {
    span {
      transform: translateY(-100%);
    }
  }
  &:active {
    box-shadow: none;
  }
  svg {
    stroke-width: 1.2;
  }

  span {
    display: flex;
    flex-direction: column;
    transform: translateY(0%);
    font-weight: 300;
    line-height: 1em;
    padding: 16px 0;
    transition: transform 300ms ease-in-out;
    &:after {
      content: attr(name);
      position: absolute;
      top: 100%;
      padding: 16px 0;
    }
  }
`;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.secondary};
  &:hover {
    text-decoration: none;
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Sidebar = ({ icons, toggler, theme, amplitude }) => {
  const logClick = () => {
    amplitude.getInstance().logEvent("getStartedButtonClicked");
  };
  return (
    <Container>
      <div>
        <Logo>
          <svg
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M559.368 138.804C584.115 135.252 584.116 135.26 584.117 135.269L584.12 135.288L584.126 135.331L584.14 135.436C584.151 135.515 584.164 135.61 584.179 135.722C584.209 135.946 584.246 136.236 584.288 136.589C584.373 137.295 584.48 138.255 584.593 139.443C584.819 141.816 585.07 145.12 585.214 149.148C585.5 157.158 585.372 168.283 583.68 180.795C580.375 205.232 570.582 238.512 542.244 262.127V262.128C514.783 285.011 477.191 292.481 450.004 295.035C435.855 296.363 423.244 296.465 414.162 296.24C409.604 296.127 405.888 295.931 403.258 295.757C402.049 295.677 401.066 295.602 400.333 295.542C399.6 295.602 398.618 295.677 397.408 295.757C394.778 295.931 391.063 296.127 386.504 296.24C377.423 296.465 364.811 296.363 350.662 295.035C323.475 292.481 285.883 285.011 258.423 262.128V262.127C230.084 238.512 220.291 205.232 216.986 180.795C215.295 168.283 215.166 157.158 215.452 149.148C215.596 145.12 215.847 141.816 216.073 139.443C216.186 138.255 216.293 137.295 216.378 136.589C216.421 136.236 216.458 135.946 216.487 135.722C216.502 135.61 216.515 135.515 216.526 135.436L216.541 135.331L216.547 135.288L216.549 135.269C216.551 135.26 216.552 135.252 241.298 138.804H559.368ZM559.368 138.804C561.848 113.927 561.842 113.927 561.835 113.926L561.821 113.924L561.786 113.921L561.693 113.912C561.658 113.909 561.619 113.905 561.575 113.901C561.528 113.896 561.476 113.892 561.419 113.886C561.196 113.866 560.896 113.839 560.521 113.808C559.772 113.745 558.724 113.664 557.408 113.577C554.778 113.403 551.063 113.206 546.504 113.093C537.423 112.868 524.811 112.97 510.662 114.299C483.475 116.852 445.883 124.323 418.423 147.206C411.279 153.16 405.313 159.727 400.333 166.613C395.353 159.727 389.388 153.16 382.244 147.206C354.783 124.323 317.191 116.852 290.004 114.299C275.855 112.97 263.244 112.868 254.162 113.093C249.604 113.206 245.888 113.403 243.258 113.577C241.942 113.664 240.894 113.745 240.145 113.808C239.77 113.839 239.47 113.866 239.248 113.886C239.137 113.897 239.045 113.905 238.973 113.912L238.881 113.921L238.846 113.924L238.831 113.926C238.825 113.927 238.818 113.927 241.298 138.804H559.368ZM559.368 138.804L584.115 135.252C582.481 123.868 573.291 115.068 561.848 113.927L559.368 138.804ZM241.298 138.804L216.552 135.252C218.186 123.868 227.375 115.068 238.818 113.927L241.298 138.804ZM400.333 280.211V280.213C400.333 280.214 400.333 280.214 400.333 280.215C400.333 280.214 400.333 280.214 400.333 280.213V280.211Z"
              fill="#FFF7D9"
              stroke="white"
              strokeWidth="50"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M399.368 270.53C399.368 270.53 317.366 278.704 274.427 242.922C231.489 207.14 241.298 138.804 241.298 138.804C241.298 138.804 323.3 130.63 366.239 166.412C409.177 202.194 399.368 270.53 399.368 270.53Z"
              fill="#4DFF74"
              stroke="#1B1C32"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M401.298 270.53C401.298 270.53 483.3 278.704 526.239 242.922C569.177 207.14 559.368 138.804 559.368 138.804C559.368 138.804 477.366 130.63 434.427 166.412C391.489 202.194 401.298 270.53 401.298 270.53Z"
              fill="#4DFF74"
              stroke="#1B1C32"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M163.922 425.705C159.197 462.935 162.453 497.297 182.134 526.555C201.544 555.409 234.017 574.913 277.807 589.348C309.166 599.685 333.418 621.452 342.028 649.429L357.528 644.659L342.028 649.43L347.955 668.688C350.435 676.745 356.81 683.011 364.909 685.351C373.009 687.692 381.742 685.792 388.138 680.299L390.678 678.117C390.68 678.116 390.681 678.115 390.682 678.114C405.959 664.999 423.239 654.418 441.866 646.774L493.107 625.747C539.1 606.874 578.206 582.034 604.397 548.813C631.195 514.823 643.197 473.62 637.115 425.705C629.137 362.842 577.345 316.334 507 316.334H293.666C223.208 316.334 171.888 362.952 163.922 425.705ZM188.722 428.853H188.723H188.722Z"
              stroke="white"
              strokeWidth="50"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M507 341.334H293.666C235.323 341.334 195.044 379.055 188.723 428.853C180.056 497.141 202.831 538.309 285.634 565.605C322.823 577.864 354.404 604.651 365.922 642.076L371.849 661.334L374.393 659.149C391.698 644.292 411.274 632.305 432.375 623.646L483.616 602.619C571.229 566.667 622.834 511.736 612.314 428.853C605.994 379.055 565.343 341.334 507 341.334Z"
              fill="#ffca0a"
            />
            <path
              d="M478.5 527C548 483 531.667 438.167 524 415.5L583 391L608 396V497L530 583L378 654L345 616C358 570 432.804 555.93 478.5 527Z"
              fill="#CCA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M168.882 426.335C176.519 366.173 225.631 321.334 293.666 321.334H507C574.944 321.334 624.508 366.085 632.155 426.335C638.072 472.955 626.416 512.808 600.471 545.718C575.01 578.012 536.764 602.428 491.209 621.122L439.968 642.149C420.846 649.995 403.106 660.858 387.424 674.321C387.423 674.322 387.422 674.323 387.421 674.324L384.88 676.506C379.763 680.901 372.777 682.42 366.297 680.548C359.817 678.675 354.718 673.663 352.734 667.217L346.807 647.959L362.273 643.199L346.807 647.959C337.615 618.092 311.897 595.321 279.373 584.6L279.372 584.599C236.06 570.322 204.803 551.296 186.283 523.764C167.545 495.91 164.235 462.948 168.882 426.335L168.882 426.335ZM382.208 628.025C366.553 587.472 331.165 559.555 291.896 546.61C252.405 533.592 230.873 518.386 219.472 501.438C208.288 484.812 204.544 463.046 208.564 431.371C213.569 391.937 245.015 361.334 293.666 361.334H507C555.742 361.334 587.48 392.025 592.473 431.371C597.076 467.634 588.189 496.688 569.059 520.953C549.444 545.833 518.081 566.858 476.023 584.116L483.616 602.619L476.023 584.116L424.782 605.143C409.815 611.285 395.549 618.958 382.208 628.025Z"
              fill="#1B1C32"
            />
            <path
              d="M587 381.334C573.666 408 503.426 421.334 400.333 421.334C297.24 421.334 227 408 213.666 381.334"
              stroke="#1B1C32"
              strokeWidth="40"
              strokeLinejoin="round"
            />
          </svg>
        </Logo>
        <Title>Akar Icons</Title>
        <Headline>
          Perfectly rounded icon library made for designers and developers.
        </Headline>
        <Button
          className="button"
          bg="secondary"
          color="primary"
          href="https://github.com/artcoholic/akar-icons-app#readme"
          target="_blank"
          onClick={logClick}
        >
          <icons.Paper size={16} style={{ marginRight: 8 }} />
          <span name="Get started">Get started</span>
          <icons.ArrowUpRight size={16} style={{ marginLeft: 8 }} />
        </Button>
        <Note>
          Akar is free and open source, licensed under{" "}
          <a
            href="https://raw.githubusercontent.com/artcoholic/akar-icons/master/LICENSE"
            taget="_blank"
          >
            MIT
          </a>
          . If you enjoy these icons, please support us by sharing it or with a{" "}
          <a href="https://paypal.me/awibawa" target="_blank">
            donation
          </a>
          .
        </Note>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toggle onClick={toggler} aria-label="Theme Toggle">
          <span className="tooltip">Change theme</span>
          <icons.Water size={12} /> {theme}
        </Toggle>
        <LinkWrapper
          className="button"
          href="https://arturowibawa.com"
          target="_blank"
          bg="#1DA1F2"
        >
          Made by Arturo Wibawa
        </LinkWrapper>
      </div>
    </Container>
  );
};

export default Sidebar;
