import styled from '@emotion/styled';

export const NavbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: black;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

`;
export const NavbarLabel = styled.span`
  font: inherit;
  font-size: 20px;
  padding-right: 30px;
  color:white;
  :hover {
    color: orangered;
    opacity: 1;
    text-decoration-line: underline;
    text-decoration-color: red;
  }
`;
