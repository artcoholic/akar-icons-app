import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 99;
  button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg.primary};
  color: ${props => props.theme.colors.content.primary};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.colors.boxShadow} 0px 6px 12px 0px;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  pointer-events: auto;
  margin: 16px;
  @media (min-width: 768px) {
    margin: 24px;
  }
`

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.content.tertiary};
  .icon-wrapper {
    --pattern-color: ${props => props.theme.colors.content.tertiary};
    padding: 12px;
    background-image: linear-gradient(45deg, var(--pattern-color) 25%, transparent 25%), 
                      linear-gradient(-45deg, var(--pattern-color) 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, var(--pattern-color) 50%), 
                      linear-gradient(-45deg, transparent 75%, var(--pattern-color) 50%);
    background-size: 10px 10px;
    background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
    border-radius: 4px;
    svg {
      display: block;
    }
  }
  .icon-name {
    padding: 0 1em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .close-btn {
    background: none;
    padding: 16px;
    margin-right: 8px;
    &:hover {
      background: ${props => props.theme.colors.bg.secondary};
    }
    svg {
      display: block;
      color: ${props => props.theme.colors.content.primary};
    }
  }
`

const CodeSnippet = styled.div`
  padding: 16px 16px 0;
  .label {
    font-size: 14px;
    margin-bottom: .5em;
  }
  .snippet-box {
    background-color: ${props => props.theme.colors.bg.tertiary};
    padding: 4px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.content.tertiary};
    input {
      font-size: 14px;
      padding: 0 1em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background: none;
      border: none;
      outline: none;
      font-family: monospace;
      width: 100%;
      color: ${props => props.theme.colors.content.primary};;
    }
    .copy-snippet-btn {
      background: none;
      padding: 11px;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      position: relative;
      &:hover {
        background-color: ${props => props.theme.colors.bg.secondary};
        .tooltip {
          opacity: 1;
          transform: translateY(-8px);
        }
      }
      svg {
        color: ${props => props.theme.colors.content.primary};
        stroke-width: 1.2;
      }
      .tooltip {
        position: absolute;
        background-color: ${props => props.theme.colors.content.primary};
        color: ${props => props.theme.colors.bg.primary};
        text-align: center;
        border-radius: 2px;
        font-size: 10px;
        opacity: 0;
        top: -22px;
        text-transform: uppercase;
        padding: .5em .75em;
        white-space: nowrap;
        pointer-events: none;
        &::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -4px;
          border-width: 4px;
          border-style: solid;
          border-color: ${props => props.theme.colors.content.primary} transparent transparent transparent;
        }
      }
    }
  }
`

const CopySVGContainer = styled.div`
  padding: 16px;
`
const CopySVGButton = styled.button`
  ${color}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  pointer-events: ${({ copied }) => copied ? 'none' : 'auto'};
  &:hover {
    box-shadow: rgb(45 59 66 / 0.15) 0px 6px 12px 0px;
  }
  &:active {
    box-shadow: none;
  }
  svg {
    margin-right: 8px;
  }
`

const Popover = ({ open, setOpen, name, icons, size, copiedSVG, setCopiedSVG, addSpace }) => {
  const [reactSnippet, setReactSnippet] = useState(false);
  const [iconFontSnippet, setIconFontSnippet] = useState(false);
  const dashed = str => str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

  useEffect(() => {
    const timeout = setTimeout(() => { setReactSnippet(false); }, 3000);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const timeout = setTimeout(() => { setIconFontSnippet(false); }, 3000);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const timeout = setTimeout(() => { setCopiedSVG(false); }, 3000);
    return () => clearTimeout(timeout);
  });

  const Icon = icons[name];
  const copySVG = (i) => {
    const svg = document.querySelector(`.ai-${i}`);
    const s = new XMLSerializer();
    const str = s.serializeToString(svg);
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedSVG(true);
  }
  function copySnippet(type) {
    const snippet = document.getElementById(`${type}`);
    snippet.select(snippet.value);
    snippet.setSelectionRange(0, 99999);
    document.execCommand("copy");
    if (type === 'reactSnippet') {
      setReactSnippet(true);
    } else {
      setIconFontSnippet(true);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <Container
          id="popover"
          as={motion.div}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0, transition: { type: 'spring', stiffness: 100 } }}
        >
          <Wrapper>
            <Header>
              <div style={{ display: 'flex', alignItems: 'center', flexFlow: 'row nowrap', padding: 8 }}>
                <div className="icon-wrapper"><Icon /></div>
                <div className="icon-name">{addSpace(name)}</div>
              </div>
              <button className="close-btn" onClick={() => setOpen(false)}><icons.Cross size={16} /></button>
            </Header>
            <CodeSnippet>
              <div className="label">React snippet</div>
              <div className="snippet-box">
                <input type="text" value={`<${name} size={${size}} />`} id="reactSnippet" readOnly />
                <button className="copy-snippet-btn" onClick={() => copySnippet('reactSnippet')}>
                  <span className="tooltip" id="myTooltip">
                    {reactSnippet ? 'Copied!' : 'Copy snippet'}
                  </span>
                  {reactSnippet ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                </button>
              </div>
            </CodeSnippet>
            <CodeSnippet>
              <div className="label">HTML/CSS snippet</div>
              <div className="snippet-box">
                <input type="text" value={`<i class="ai${dashed(name)}"></i>`} id="iconFontSnippet" readOnly />
                <button className="copy-snippet-btn" onClick={() => copySnippet('iconFontSnippet')}>
                  <span className="tooltip" id="myTooltip">
                    {iconFontSnippet ? 'Copied!' : 'Copy snippet'}
                  </span>
                  {iconFontSnippet ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                </button>
              </div>
            </CodeSnippet>
            <CopySVGContainer>
              <CopySVGButton
                bg={copiedSVG ? "bg.primary" : "content.primary"}
                color={copiedSVG ? "content.primary" : "content.secondary"}
                onClick={() => copySVG(name)}
                copied={copiedSVG}
              >
                {copiedSVG ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                {copiedSVG ? "SVG copied to clipboard!" : "Copy SVG"}
              </CopySVGButton>
            </CopySVGContainer>
          </Wrapper>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Popover;