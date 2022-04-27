import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Search from './Search';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Container = styled.form`
  grid-column: 1 / -1;
  margin: 0;
  position: sticky;
  top: 0px;
  background: ${props => props.theme.colors.secondary};
  padding: 16px;
  box-shadow: ${({ isStuck }) => isStuck ? 'rgba(15,23,32,0.1) 0px 6px 12px 0px' : 'none'};
  z-index: 98;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  transition: box-shadow 150ms ease-out;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    padding: 24px;
  }
`

const Wrapper = styled.div`
  display: none;
  flex-flow: row nowrap;
  flex-basis: 100%;
  @media (min-width: 1280px) {
    display: flex;
  }
`

const ResetButton = styled.button`
  --active-bg: ${props => props.theme.colors.tertiary};
  --active-color: ${props => props.theme.colors.primary};
  border: none;
  font-size: 12px;
  border-radius: 4px;
  background: ${({ disabled }) => disabled ? '#F2F2F2' : 'var(--active-bg)'};
  color: ${({ disabled }) => disabled ? '#BDBDBD' : 'var(--active-color)'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  order: -1;
  padding: 0 16px;
  margin-left: 8px;
  display: none;
  border: none;
  &:enabled:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
  svg {
    display: block;
    stroke-width: 1.2;
  }
  @media (min-width: 768px) {
    order: 0;
    margin-left: 12px;
  }
  @media (min-width: 1280px) {
    display: block;
  }
`

const UtilityBar = ({ stroke, setStroke, size, setSize, query, updateQuery, icons }) => {
  const [isStuck, setIsStuck] = useState(false);
  const isEnabled = query !== '' || stroke !== 2 || size !== 36;

  useScrollPosition(({ currPos }) => {
    setIsStuck(currPos.y < 0);
  })

  function handleReset() {
    setStroke(2);
    setSize(36);
    updateQuery('');
  }

  return (
    <>
      <Container isStuck={isStuck}>
        <Search query={query} updateQuery={updateQuery} icons={icons} />
        <Wrapper>
          <Slider
            title="Stroke width"
            output={stroke}
            input={setStroke}
            min={0.5}
            max={3}
            step={0.5}
            ml={[0, 12]}
            type="stroke-width"
          />
          <Slider
            title="Icon size"
            output={size}
            input={setSize}
            min="12"
            max="64"
            step="4"
            mr={[0, 12]}
            type="icon-size"
          />
        </Wrapper>
        <ResetButton disabled={!isEnabled} type="button" onClick={handleReset} aria-label="Reset">
          <icons.ArrowCounterClockwise size={16} />
        </ResetButton>
      </Container>
    </>
  )
}

export default UtilityBar;