import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.secondary};
  padding: 24px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.colors.primary};
  -webkit-appearance: none;
  &:focus, &:hover {
    background: ${props => props.theme.colors.tertiary};
    span {
      opacity: 1;
      transform: translateY(-16px);
    }
  }
  &:focus, &:active {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    outline: none;
    box-shadow: none;
  }
  span {
    position: absolute;
    bottom: 0px;
    font-size: 12px;
    opacity: 0;
    padding: 0 24px;
  }
  &.active {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
`

const IconWrapper = ({ children, icon, setOpen, setName, setCopiedSVG, addSpace, amplitude }) => {

  useEffect(() => {
    const timeout = setTimeout(() => { setCopiedSVG(false); }, 3000);
    return () => clearTimeout(timeout);
  }, [setCopiedSVG]);

  const handleClick = (i, e) => {
    setOpen(true);
    setName(i);
    const svg = e.currentTarget.querySelector(`.ai-${i}`);
    const s = new XMLSerializer();
    const str = s.serializeToString(svg);
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedSVG(true);
    amplitude.getInstance().logEvent("Icon Clicked", {
      "name": i,
    });
  }
  return (
    <Wrapper onClick={(e) => { handleClick(icon, e) }}>
      {children}
      <span>{addSpace(icon)}</span>
    </Wrapper>
  )
}

export default IconWrapper;