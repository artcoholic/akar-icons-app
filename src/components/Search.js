import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  --focus: ${props => props.theme.colors.secondary};
  --default: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  color: ${props => props.theme.colors.secondary};
  order: -1;
  flex-grow: 1;
  flex-basis: 0;
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 1280px) {
    margin-right: 12px;
  }
`

const SearchInput = styled.input`
  border: none; 
  border-radius: 4px;
  padding: 12px 16px 12px 48px;
  width: 100%;
  background: ${props => props.theme.colors.tertiary};
  line-height:1.5;
  -webkit-appearance: none;
  color: ${props => props.theme.colors.primary};
  transition: ${props => props.theme.transition};
  &:focus, &:active {
   outline: none;
   background: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.secondary};
  }
  &::placeholder  {
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transition};
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 6px;
  transform: translateX(0);
  padding: 11px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${props => props.focus ? 'var(--focus)' : 'var(--default)'};
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
  svg {
    display: block;
    position: relative;
    left: 0;
    stroke-width: 2;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0px;
  padding: 0 14px;
  box-sizing: border-box;
  transition: ${props => props.theme.transition};
  color: ${props => props.focus ? 'var(--focus)' : 'var(--default)'};
  svg {
    display: block;
  }
`

const ForwardSlash = styled.span`
  position: absolute;
  right: 14px;
  padding: 2px 8px 4px;
  color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.15);
  visibility: hidden;
  transition: ${props => props.theme.transition};
  @media (min-width: 1280px) {
    visibility: visible;
  }
`

const Search = ({ query, updateQuery, icons }) => {
  const [focus, setFocus] = React.useState(false);
  const searchInput = React.useRef();

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value)
  };

  function onClear() {
    searchInput.current.focus();
    updateQuery('');
  }

  function autoFocus(e) {
    if (e.key === '/') {
      searchInput.current.focus();
      e.preventDefault();
    }
  }

  function autoClear(e) {
    if (e.key === 'Escape') {
      updateQuery('');
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', autoFocus);
    document.addEventListener('keydown', autoClear);
    return () => {
      document.removeEventListener('keydown', autoFocus);
      document.removeEventListener('keydown', autoClear);
    }
  })

  return (
    <Container>
      <SearchIcon focus={focus}><icons.Search size={20} /></SearchIcon>
      <SearchInput
        ref={searchInput}
        type="text"
        autocomplete="off"
        value={query}
        onChange={onSearch}
        placeholder={`Search ${Object.keys(icons).length} icons`}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        aria-label="Search"
      />
      {query && (
        <ClearButton aria-label="Clear search" onClick={onClear} focus={focus}>
          <icons.Cross size={14} strokeWidth={3} />
        </ClearButton>
      )}
      {!query && !focus && <ForwardSlash>/</ForwardSlash>}
    </Container>
  )
}

export default Search;