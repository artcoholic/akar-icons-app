import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  padding: 16px;
  border-top: 1px solid ${props => props.theme.colors.bg.secondary};
  font-size: .875em;
  flex-flow: row wrap;
  width: 100%;
  justify-content: flex-start;
  a {
    color: ${props => props.theme.colors.content.primary};
  }
`

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 4px;
  border-radius: 4px;
  padding: 8px 12px;
  background: ${props => props.theme.colors.bg.tertiary};
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.colors.bg.secondary};
  }
`

const MadeByContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: 12px;
  margin-top: 12px;
  @media (min-width: 768px) {
    border: none;
    padding: 0;
    margin: 0;
  }
`

const style = {
  marginRight: 4,
  strokeWidth: 1.2,
}

const Footer = ({ icons }) => (
  <Container>
    <LinkWrapper className="button" href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=enhancement&template=icon-request.md&title=%5BICON+REQUEST%5D" target="_blank" rel="noopener"><icons.File size={14} style={style} /> Request an icon</LinkWrapper>
    <LinkWrapper className="button" href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=bug&template=bug_report.md&title=%5BBUG%5D" target="_blank" rel="noopener"><icons.Bug size={14} style={style} /> Report a bug</LinkWrapper>
    <LinkWrapper className="button" href="https://paypal.me/awibawa/5" target="_blank" rel="noopener"><icons.Coin size={14} style={style} /> Donate</LinkWrapper>
  </Container>
)

export default Footer;
