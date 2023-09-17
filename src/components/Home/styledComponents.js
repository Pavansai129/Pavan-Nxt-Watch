import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const LeftMenubarAndHomeVideosContainer = styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  width: 100%;
`
export const LeftNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 91vh;
  margin-top: 9vh;
  padding-top: 30px;
  flex-shrink: 0;
  border: none;
  position: fixed;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContactUsSectionContainer = styled.div`
  padding: 10%;
  width: 100%;
`
export const ContactText = styled.p`
  font-size: ${props => (props.boldText ? '20px' : '16px')};
  border: none;
  font-weight: ${props => (props.boldText ? '900' : '500')};
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background-color: transparent;
  line-height: 1.5;
  margin-bottom: 10px;
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`
export const SocialMediaIcon = styled.img`
  height: 25px;
`
export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  min-height: 91vh;
  overflow-y: scroll;
  margin-top: 9vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const HomeBannerSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  border: none;
  flex-grow: 1;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`
export const BannerContentContainer = styled.div`
  border: none;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

export const NxtWatchLogo = styled.img`
  height: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    height: 15px;
  }
`

export const BannerText = styled.p`
  font-size: 18px;
  border: none;
  font-weight: 500px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background-color: transparent;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const GetItNowButton = styled.button`
  height: 35px;
  width: 120px;
  font-size: 16px;
  color: #181818;
  border: 1px solid #181818;
  background: none;
  @media screen and (max-width: 768px) {
    height: 20px;
    width: 80px;
    font-size: 12px;
  }
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
`
export const HomeSearchSectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  height: 30px;
  background: none;
  outline: none;
  flex-grow: 1;
  border: 1px solid #616e7c;
  font-size: 12px;
  font-weight: 300;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    font-size: 18px;
    height: 40px;
  }
`
export const SearchButton = styled.button`
  height: 30px;
  width: 30px;
  padding: 3px;
  font-size: 20px;
  background-color: #cccccc;
  border: 1px solid #616e7c;
  outline: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 40px;
    width: 40px;
  }
`
export const HomeVideosContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 100%;
  height: 91vh;
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 400px;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 150px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const FailureCaption = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const RetryButton = styled.button`
  height: 30px;
  width: 100px;
  font-size: 16px;
  color: #ffffff;
  border: none;
  background-color: #00306e;
`
