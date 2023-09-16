import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiFire, HiMoon, HiOutlineSun} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {
  HomePageContainer,
  LeftMenubarAndHomeVideosContainer,
  LeftNavBarContainer,
  ContactUsSectionContainer,
  ContactText,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  HomeBodyContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureCaption,
} from '../Home/styledComponents'
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
} from '../Header/styledComponents'

import {
  NavLinksContainer,
  NavLinkItem,
  NavLinkIconNameContainer,
  NavLinkName,
} from '../NavLinks/styledComponents'
import {WebsiteLogo} from '../LoginForm/styledComponents'

class NotFound extends Component {
  renderPopupNavLinks = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NavLinksContainer>
            <NavLinkItem>
              <Link to="/">
                <NavLinkIconNameContainer>
                  <AiFillHome color={isDarkTheme ? '#ffffff' : '#181818'} />
                  <NavLinkName fontColor={isDarkTheme} navigatedTo>
                    Home
                  </NavLinkName>
                </NavLinkIconNameContainer>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link to="/trending">
                <NavLinkIconNameContainer>
                  <HiFire color={isDarkTheme ? '#ffffff' : '#181818'} />
                  <NavLinkName fontColor={isDarkTheme}>Trending</NavLinkName>
                </NavLinkIconNameContainer>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link to="/gaming">
                <NavLinkIconNameContainer>
                  <SiYoutubegaming
                    color={isDarkTheme ? '#ffffff' : '#181818'}
                  />
                  <NavLinkName fontColor={isDarkTheme}>Gaming</NavLinkName>
                </NavLinkIconNameContainer>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link to="/saved-videos">
                <NavLinkIconNameContainer>
                  <BiListPlus color={isDarkTheme ? '#ffffff' : '#181818'} />
                  <NavLinkName fontColor={isDarkTheme}>
                    Saved Videos
                  </NavLinkName>
                </NavLinkIconNameContainer>
              </Link>
            </NavLinkItem>
          </NavLinksContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderHeader = () => {
    const mdNavItems = () => {
      const popupLogout = close => (
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            const onClickCancel = () => {
              close()
            }

            const onClickConfirm = () => {
              const {history} = this.props
              Cookies.remove('jwt_token')
              history.replace('/login')
            }
            return (
              <PopupLogoutContainer>
                <PopupLogoutCardContainer bgColor={isDarkTheme}>
                  <PopupLogoutText fontColor={isDarkTheme}>
                    Are you sure, you want to Logout?
                  </PopupLogoutText>
                  <PopupLogoutButtonsContainer>
                    <CancelButton
                      fontColor={isDarkTheme}
                      onClick={onClickCancel}
                    >
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
                  {close => popupLogout(close)}
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
              <HiOutlineSun color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
            ) : (
              <HiMoon color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
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
                <NavItem>{renderPopupLogoutButton()}</NavItem>
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
              const {history} = this.props
              Cookies.remove('jwt_token')
              history.replace('/login')
            }
            return (
              <PopupLogoutContainer>
                <PopupLogoutCardContainer bgColor={isDarkTheme}>
                  <PopupLogoutText fontColor={isDarkTheme}>
                    Are you sure, you want to Logout?
                  </PopupLogoutText>
                  <PopupLogoutButtonsContainer>
                    <CancelButton
                      fontColor={isDarkTheme}
                      onClick={onClickCancel}
                    >
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
                      <FiLogOut color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
                    </PopupLogoButton>
                  }
                >
                  {close => popupLogout(close)}
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
                        {this.renderPopupNavLinks()}
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
              <HiOutlineSun color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
            ) : (
              <HiMoon color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'} />
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

  renderContactUsSection = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ContactUsSectionContainer>
            <ContactText fontColor={isDarkTheme} boldText>
              CONTACT US
            </ContactText>
            <SocialMediaIconsContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <ContactText fontColor={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactText>
          </ContactUsSectionContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLeftMenubar = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LeftNavBarContainer bgColor={isDarkTheme}>
            {this.renderPopupNavLinks()}
            {this.renderContactUsSection()}
          </LeftNavBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const failureImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <HomePageContainer bgColor={isDarkTheme}>
              {this.renderHeader()}
              <LeftMenubarAndHomeVideosContainer bgColor={isDarkTheme}>
                {this.renderLeftMenubar()}
                <HomeBodyContainer data-testid="home" bgColor={isDarkTheme}>
                  <FailureViewContainer>
                    <FailureImage src={failureImage} alt="not found" />
                    <FailureHeading fontColor={isDarkTheme}>
                      Page Not Found
                    </FailureHeading>
                    <FailureCaption fontColor={isDarkTheme}>
                      We are sorry, the page you requested could not be found
                    </FailureCaption>
                  </FailureViewContainer>
                </HomeBodyContainer>
              </LeftMenubarAndHomeVideosContainer>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NotFound
