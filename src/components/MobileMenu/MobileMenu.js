/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Navigation Links">
        <CloseButton onClick={onDismiss}>
          <Icon id="close"></Icon>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler></Filler>
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Filler = styled.div`
  flex: 1;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const Link = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
  &:hover {
    color: ${COLORS.secondary};
  }
`;

const Content = styled(DialogContent)`
  background: #fff;
  width: 300px;
  height: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`;

export default MobileMenu;
