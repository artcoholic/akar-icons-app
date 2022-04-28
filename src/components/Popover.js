import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 25vw;
  min-width: 360px;
  max-width: 480px;
  height: 100%;
  display: flex;
  pointer-events: none;
  z-index: 99;
  button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: rgba(15,23,32,0.15) 0px 6px 12px 0px;
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
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  .icon-wrapper {
    --pattern-color: ${props => props.theme.colors.pattern};
    padding: 12px;
    background-image: linear-gradient(45deg, var(--pattern-color) 25%, transparent 25%),
                      linear-gradient(-45deg, var(--pattern-color) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, var(--pattern-color) 25%),
                      linear-gradient(-45deg, transparent 75%, var(--pattern-color) 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
    border-radius: 4px;
    svg {
      display: block;
    }
  }
  .icon-name {
    padding: 0 1em;
  }
  .close-btn {
    background: none;
    padding: 14px;
    margin-right: 8px;
    &:hover {
      background: ${props => props.theme.colors.primary};
      svg {
      color: ${props => props.theme.colors.secondary};
      }
    }
    svg {
      display: block;
      color: ${props => props.theme.colors.primary};
    }
  }
`

const CodeSnippet = styled.div`
  padding: 16px 16px 0;
  .label {
    font-size: 14px;
    margin-bottom: .75em;
    color: ${props => props.theme.colors.primary};
    text-decoration: underline dotted;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    
    &:hover {
      text-decoration: none;
    }
  }
  .snippet-box {
    background-color: ${props => props.theme.colors.tertiary};
    padding: 4px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      color: ${props => props.theme.colors.primary};
    }
    .copy-snippet-btn {
      background: none;
      padding: 11px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      position: relative;
      border: 1px solid ${props => props.theme.colors.tertiary};
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        svg {
          color: ${props => props.theme.colors.secondary};
        }
        .tooltip {
          opacity: 1;
          transform: translateY(-8px);
        }
      }
      &:active {
        box-shadow: none;
      }
      svg {
        color: ${props => props.theme.colors.primary};
        stroke-width: 1.2;
      }
      .tooltip {
        position: absolute;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        text-align: center;
        border-radius: 2px;
        font-size: 10px;
        opacity: 0;
        top: -22px;
        text-transform: uppercase;
        padding: .5em .75em;
        white-space: nowrap;
        pointer-events: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        &::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -4px;
          border-width: 4px;
          border-style: solid;
          border-color: ${props => props.theme.colors.primary} transparent transparent transparent;
        }
      }
    }
  }
`

const CopySVGContainer = styled.div`
  padding: 24px 16px 16px;
`
const CopySVGButton = styled.button`
  ${color}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  pointer-events: ${({ copied }) => copied ? 'none' : 'auto'};
  &:active {
    box-shadow: none;
  }
  svg {
    margin-right: 8px;
  }
`

const Popover = ({ open, setOpen, name, icons, size, stroke, copiedSVG, setCopiedSVG, addSpace, amplitude }) => {
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
      amplitude.getInstance().logEvent("copySnippetButtonClicked", {
        "name": name,
        "type": "reactSnippet"
      });
    } else {
      setIconFontSnippet(true);
      amplitude.getInstance().logEvent("copySnippetButtonClicked", {
        "name": name,
        "type": "iconFontSnippet"
      });
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <Container
          id="popover"
          as={motion.div}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } }}
          exit={{ x: '-100%', opacity: 0, transition: { type: 'spring', stiffness: 100 } }}
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
              <a aria-label="react snippet" href="https://github.com/artcoholic/akar-icons" className='label'>React snippet <icons.BookOpen size={14} strokeWidth={1} /></a>
              <div className="snippet-box">
                <input type="text" value={`<${name} strokeWidth={${stroke}} size={${size}} />`} id="reactSnippet" readOnly />
                <button className="copy-snippet-btn" onClick={() => copySnippet('reactSnippet')}>
                  <span className="tooltip">
                    {reactSnippet ? 'Copied!' : 'Copy snippet'}
                  </span>
                  {reactSnippet ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                </button>
              </div>
            </CodeSnippet>
            <CodeSnippet>
              <a aria-label="html/css snippet" href="https://github.com/artcoholic/akar-icons-fonts" className="label">HTML/CSS snippet <icons.BookOpen size={14} strokeWidth={1} /></a>
              <div className="snippet-box">
                <input type="text" value={`<i class="ai${dashed(name)}"></i>`} id="iconFontSnippet" readOnly />
                <button className="copy-snippet-btn" onClick={() => copySnippet('iconFontSnippet')}>
                  <span className="tooltip">
                    {iconFontSnippet ? 'Copied!' : 'Copy snippet'}
                  </span>
                  {iconFontSnippet ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                </button>
              </div>
            </CodeSnippet>
            <CopySVGContainer>
              <CopySVGButton
                bg={copiedSVG ? "secondary" : "primary"}
                color={copiedSVG ? "primary" : "secondary"}
                onClick={() => copySVG(name)}
                copied={copiedSVG}
              >
                {copiedSVG ? <icons.CircleCheckFill size={16} /> : <icons.Copy strokeWidth={1.2} size={16} />}
                {copiedSVG ? "SVG copied to clipboard!" : "Copy SVG"}
              </CopySVGButton>
            </CopySVGContainer>
          </Wrapper>
        </Container>
      )
      }
    </AnimatePresence >
  )
}

export default Popover;