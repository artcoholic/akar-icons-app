import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeToggler from './utilities/themeToggler';
import { GlobalStyles, lightTheme, darkTheme, grayTheme } from './theme';
import * as icons from './icons';

import IconWrapper from './components/IconWrapper';
import MinifiedPopover from './components/MinifiedPopover';
import Popover from './components/Popover';
import Footer from './components/Footer';
import UtilityBar from './components/UtilityBar';
import SearchResults from './components/SearchResults';
import Sidebar from './components/Sidebar';
import MinifiedSidebar from './components/MinifiedSidebar';
import useViewport from './utilities/useViewport';

import upperCamelCase from 'uppercamelcase';
import Fuse from 'fuse.js';
import data from './data.json';
import { amplitude } from './utilities/amplitude';

const NoResults = styled.span`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4em 0;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  code {
    margin-left: 2px;
    border-bottom: 1px dotted ${props => props.theme.colors.primary};
  }
  span:first-child {
    color: ${props => props.theme.colors.primary};
  }
  svg {
    stroke-width: 1.2;
  }
`

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`

const SecondaryLinks = styled.a`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primary};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
  svg {
    margin-right: 4px;
  }
`

const DATA = Object.values(data).map(x => [x])
const ICON_KEYS = Object.keys(icons)

const fuse = new Fuse(DATA.flat(), {
  keys: [
    'name',
    {
      name: 'description',
      weight: 0.1,
    },
  ],
  includeScore: true,
  threshold: 0.2,
})

const App = () => {
  const { width } = useViewport();
  const breakpoint = 1280;
  const [theme, toggler, mountedComponent] = ThemeToggler();
  const themeMode = (theme === 'light') ? lightTheme : (theme === 'dark') ? darkTheme : grayTheme;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [query, updateQuery] = useState('');
  const [stroke, setStroke] = useState(2);
  const [size, setSize] = useState(36);
  const [copiedSVG, setCopiedSVG] = useState(false);

  const fuseResults = fuse.search(query);
  const results = query ? fuseResults.map(search => upperCamelCase(search.item.name)) : ICON_KEYS;

  const addSpace = str => str.replace(/([a-z])([A-Z])/g, '$1 $2');
  if (!mountedComponent) return <div />
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {
          width < breakpoint ?
            <MinifiedSidebar icons={icons} theme={theme} toggler={toggler} amplitude={amplitude} /> :
            <Sidebar icons={icons} theme={theme} toggler={toggler} amplitude={amplitude} />
        }
        <section style={{ flexGrow: 1 }}>
          <UtilityBar
            query={query}
            updateQuery={updateQuery}
            icons={icons}
            stroke={stroke}
            setStroke={setStroke}
            size={size}
            setSize={setSize}
          />
          <SearchResults>
            {results.length === 0 && (
              <NoResults>
                <span style={{ fontSize: "6em" }}>( T _ T )</span>
                <span style={{ margin: "2em 0 1em 0" }}>There are no icons for <code>{query}</code></span>
                <SecondaryLinks className="button" href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=enhancement&template=icon-request.md&title=%5BICON+REQUEST%5D" target="_blank"><icons.File size={14} />Request an icon</SecondaryLinks>
              </NoResults>
            )}
            {results.map((key, index) => {
              const Icon = icons[key];

              return (
                <IconWrapper
                  key={index}
                  icon={key}
                  setOpen={setOpen}
                  setName={setName}
                  copiedSVG={copiedSVG}
                  setCopiedSVG={setCopiedSVG}
                  addSpace={addSpace}
                  amplitude={amplitude}
                >
                  <IconContainer>
                    <Icon strokeWidth={stroke} size={size} />
                  </IconContainer>
                </IconWrapper>
              )
            })}
          </SearchResults>
          <Footer icons={icons} />
        </section>
        {width < breakpoint ?
          <MinifiedPopover
            open={open}
            setOpen={setOpen}
            name={name}
            icons={icons}
            stroke={stroke}
            size={size}
            copiedSVG={copiedSVG}
            setCopiedSVG={setCopiedSVG}
            addSpace={addSpace}
            amplitude={amplitude}
          /> :
          <Popover
            open={open}
            setOpen={setOpen}
            name={name}
            icons={icons}
            stroke={stroke}
            size={size}
            copiedSVG={copiedSVG}
            setCopiedSVG={setCopiedSVG}
            addSpace={addSpace}
            amplitude={amplitude}
          />
        }
      </ThemeProvider>
    </>
  )
}

export default App;