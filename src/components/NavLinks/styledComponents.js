import styled from 'styled-components'

export const NavLinksContainer = styled.ul`
  width: 100%;
  padding: 0;
`

export const NavLinkItem = styled.li`
  width: 100%;
  height: 45px;
  border: none;
  background-color: transparent;
`
export const NavLinkIconNameContainer = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  gap: 20px;
  padding-left: 40%;
  border: none;
  background: none;
  background-color: ${props => (props.navigatedTo ? '#94a3b8' : 'transparent')};
  @media screen and (min-width: 768px) {
    padding-left: 10%;
    font-size: 18px;
  }
`
export const NavLinkName = styled.p`
  border: none;
  font-weight: 500px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background-color: transparent;
`
