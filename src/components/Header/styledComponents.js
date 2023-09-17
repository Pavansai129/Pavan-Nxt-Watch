import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 20px 30px;
  height: 9vh;
  border: none;
  position: fixed;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
`

export const WebsiteLogo = styled.img`
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 25px;
  }
`
export const SmNavItemsList = styled.ul`
  height: 40px;
  display: flex;
  align-items: center;
  height: 50px;
  gap: 20px;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MdNavItemsList = styled.ul`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 50px;
  height: 50px;
  border: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThemeButtonContainer = styled.button`
  font-size: 25px;
  padding-top: 5px;
  height: 100%;
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    font-size: 33px;
    padding-top: 10px;
  }
`
export const PopupMenuButton = styled.button`
  font-size: 25px;
  border: none;
  background-color: transparent;
`
export const ProfileImage = styled.img`
  height: 30px;
`

export const PopupLogoButton = styled.button`
  font-size: 25px;
  border: none;
  background-color: transparent;
`
export const PopupLogoutButton = styled.button`
  height: 35px;
  width: 100px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  color: ${props => (props.fontColor ? '#ffffff' : '#4f46e5')};
  border: 1px solid ${props => (props.fontColor ? '#ffffff' : '#4f46e5')};
  background-color: transparent;
`
export const PopupMenuIconContainer = styled.div`
  border: none;
  background-color: transparent;
`
export const PopupMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border: none;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
`
export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
export const PopupNavLinksContainer = styled.div`
  border: none;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupLogoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const PopupLogoutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 25px 40px 25px 40px;
  border-radius: 8px;
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
`
export const PopupLogoutText = styled.p`
  font-size: 22px;
  border: none;
  font-weight: 500px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
`
export const PopupLogoutButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
`
export const CancelButton = styled.button`
  height: 45px;
  width: 100px;
  font-size: 18px;
  font-weight: 500px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  color: #616e7c;
  border: 1px solid #616e7c;
  background-color: transparent;
`
export const ConfirmButton = styled.button`
  height: 45px;
  width: 100px;
  font-size: 18px;
  font-weight: 500px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  border: none;
  background-color: #4f46e5;
`
