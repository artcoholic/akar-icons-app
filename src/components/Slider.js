import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  margin: 16px 4px 0;
  ${space}
  @media (min-width: 768px) {
    margin: 0 12px;
  }

  label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 16px;
    color: ${props => props.theme.colors.primary};
  }

  input[type=range] {
    width: 100%;
    appearance: none;
    background: transparent;

    &::-webkit-slider-runnable-track {
      height: 2px;
      background: ${props => props.theme.colors.tertiary};
      border: none;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      cursor: pointer;
      border: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: ${props => props.theme.colors.primary};
      border: 4px solid ${props => props.theme.colors.secondary};
      margin-top: -11px;
      transition: transform 150ms ease-out;
      &:active {
        transform: scale(1.5);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
      }
    }
    &:focus {
      outline: none;
      &::-webkit-slider-thumb {
        outline: 1px dashed violet;
      }
    }
  }
`

const Slider = ({ title, input, output, min, max, step, mr, ml, type }) => {
  function handleChange(event) {
    input(event.target.value);
  }
  return (
    <Container mr={mr} ml={ml}>
      <label htmlFor={type}><span style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', }}>{title}</span><span>{output}px</span></label>
      <input
        id={type}
        type="range"
        min={min}
        max={max}
        step={step}
        value={output}
        onChange={handleChange}
      />
    </Container>
  )
}

export default Slider;