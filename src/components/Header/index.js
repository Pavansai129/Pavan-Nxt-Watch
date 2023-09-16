import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import NavLinks from '../NavLinks'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  Navbar,
  SmNavItemsList,
  MdNavItemsList,
  NavItem,
  ThemeButtonContainer,
  PopupMenuButton,
  PopupLogoButton,
  PopupLogoutButton,
  PopupMenuIconContainer,
  PopupMenuContainer,
  CloseButtonContainer,
  CloseButton,
  PopupNavLinksContainer,
  ProfileImage,
  PopupLogoutContainer,
  PopupLogoutCardContainer,
  PopupLogoutText,
  PopupLogoutButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import {WebsiteLogo} from '../LoginForm/styledComponents'

const Header = props => {
  const mdNavItems = () => {
    const popupLogout = close => (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const onClickCancel = () => {
            close()
          }

          const onClickConfirm = () => {
            const {history} = props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          return (
            <PopupLogoutContainer>
              <PopupLogoutCardContainer bgColor={isDarkTheme}>
                <PopupLogoutText fontColor={isDarkTheme}>
                  Are you sure you want to Logout?
                </PopupLogoutText>
                <PopupLogoutButtonsContainer>
                  <CancelButton fontColor={isDarkTheme} onClick={onClickCancel}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton onClick={onClickConfirm}>
                    Confirm
                  </ConfirmButton>
                </PopupLogoutButtonsContainer>
              </PopupLogoutCardContainer>
            </PopupLogoutContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )

    const renderPopupLogoutButton = () => (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <PopupMenuIconContainer className="popup-container">
              <Popup
                modal
                trigger={
                  <PopupLogoutButton type="button" fontColor={isDarkTheme}>
                    Logout
                  </PopupLogoutButton>
                }
              >
                {close => popupLogout(close, props)}
              </Popup>
            </PopupMenuIconContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value
          const themeLogo = isDarkTheme ? (
            <HiOutlineSun
              size="35px"
              color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}
            />
          ) : (
            <HiMoon size="35px" color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
          )
          const onClickThemeIcon = () => {
            changeTheme()
          }
          return (
            <MdNavItemsList>
              <NavItem>
                <ThemeButtonContainer
                  data-testid="theme"
                  onClick={onClickThemeIcon}
                >
                  {themeLogo}
                </ThemeButtonContainer>
              </NavItem>
              <NavItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavItem>
              <NavItem>{renderPopupLogoutButton(props)}</NavItem>
            </MdNavItemsList>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  const smNavItems = () => {
    const popupLogout = close => (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const onClickCancel = () => {
            close()
          }

          const onClickConfirm = () => {
            const {history} = props
            console.log(props)
            console.log(history)
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          return (
            <PopupLogoutContainer>
              <PopupLogoutCardContainer bgColor={isDarkTheme}>
                <PopupLogoutText fontColor={isDarkTheme}>
                  Are you sure you want to Logout?
                </PopupLogoutText>
                <PopupLogoutButtonsContainer>
                  <CancelButton fontColor={isDarkTheme} onClick={onClickCancel}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton onClick={onClickConfirm}>
                    Confirm
                  </ConfirmButton>
                </PopupLogoutButtonsContainer>
              </PopupLogoutCardContainer>
            </PopupLogoutContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )

    const renderPopupLogoutIcon = () => (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <PopupMenuIconContainer className="popup-container">
              <Popup
                modal
                trigger={
                  <PopupLogoButton type="button" className="trigger-button">
                    <FiLogOut
                      size="25px"
                      color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}
                    />
                  </PopupLogoButton>
                }
              >
                {close => popupLogout(close, props)}
              </Popup>
            </PopupMenuIconContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    const renderPopupMenu = () => (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <PopupMenuIconContainer className="popup-container">
              <Popup
                modal
                trigger={
                  <PopupMenuButton type="button" className="trigger-button">
                    <GiHamburgerMenu
                      size="25px"
                      color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}
                    />
                  </PopupMenuButton>
                }
              >
                {close => (
                  <PopupMenuContainer bgColor={isDarkTheme}>
                    <CloseButtonContainer>
                      <CloseButton
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        <IoMdClose
                          size="30px"
                          color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}
                        />
                      </CloseButton>
                    </CloseButtonContainer>
                    <PopupNavLinksContainer>
                      <NavLinks />
                    </PopupNavLinksContainer>
                  </PopupMenuContainer>
                )}
              </Popup>
            </PopupMenuIconContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value
          const themeLogo = isDarkTheme ? (
            <HiOutlineSun
              size="35px"
              color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}
            />
          ) : (
            <HiMoon size="35px" color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
          )
          const onClickThemeIcon = () => {
            changeTheme()
          }
          return (
            <SmNavItemsList>
              <NavItem>
                <ThemeButtonContainer
                  data-testid="theme"
                  onClick={onClickThemeIcon}
                >
                  {themeLogo}
                </ThemeButtonContainer>
              </NavItem>
              <NavItem>{renderPopupMenu()}</NavItem>
              <NavItem>{renderPopupLogoutIcon()}</NavItem>
            </SmNavItemsList>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        console.log(props)
        const websiteLogoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <Navbar bgColor={isDarkTheme}>
            <Link to="/">
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
            </Link>
            {smNavItems()}
            {mdNavItems()}
          </Navbar>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
