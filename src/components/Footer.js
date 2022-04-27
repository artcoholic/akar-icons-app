import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  padding: 16px;
  border-top: 1px solid ${props => props.theme.colors.primary};
  font-size: .875em;
  flex-flow: row wrap;
  width: 100%;
  justify-content: flex-start;
  a {
    color: ${props => props.theme.colors.secondary};
  }
`

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 4px;
  border-radius: 4px;
  padding: 8px 12px;
  gap: 8px;
  background: ${props => props.theme.colors.tertiary};
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.colors.primary};
  }
`

const Footer = ({ icons }) => (
  <Container>
    <LinkWrapper className="button" href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=enhancement&template=icon-request.md&title=%5BICON+REQUEST%5D" target="_blank" rel="noopener"><icons.File size={14} strokeWidth={1.2} /> Request an icon</LinkWrapper>
    <LinkWrapper className="button" href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=bug&template=bug_report.md&title=%5BBUG%5D" target="_blank" rel="noopener"><icons.Bug size={14} strokeWidth={1.2} /> Report a bug</LinkWrapper>
    <LinkWrapper className="button" href="https://paypal.me/awibawa/5" target="_blank" rel="noopener"><icons.Coin size={14} strokeWidth={1.2} /> Donate</LinkWrapper>
  </Container>
)

export default Footer;
