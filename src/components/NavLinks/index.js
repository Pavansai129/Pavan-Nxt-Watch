// import {Link, withRouter} from 'react-router-dom'
// import {AiFillHome} from 'react-icons/ai'
// import {BiListPlus} from 'react-icons/bi'
// import {HiFire} from 'react-icons/hi'
// import {SiYoutubegaming} from 'react-icons/si'
// import NxtWatchContext from '../../context/NxtWatchContext'
// import {
//   NavLinksContainer,
//   NavLinkItem,
//   NavLinkIconNameContainer,
//   NavLinkName,
// } from './styledComponents'

// const NavLinks = props => (
//   <NxtWatchContext.Consumer>
//     {value => {
//       const {isDarkTheme} = value
//       return (
//         <NavLinksContainer>
//           <NavLinkItem>
//             <Link to="/">
//               <NavLinkIconNameContainer bgThemeColor={getHomeBgColor}>
//                 <AiFillHome size="25px" color="blue" />
//                 <NavLinkName fontColor={isDarkTheme}>Home</NavLinkName>
//               </NavLinkIconNameContainer>
//             </Link>
//           </NavLinkItem>
//           <NavLinkItem>
//             <Link to="/trending">
//               <NavLinkIconNameContainer bgThemeColor={getTrendingBgColor}>
//                 <HiFire size="25px" color="red" />
//                 <NavLinkName fontColor={isDarkTheme}>Trending</NavLinkName>
//               </NavLinkIconNameContainer>
//             </Link>
//           </NavLinkItem>
//           <NavLinkItem>
//             <Link to="/gaming">
//               <NavLinkIconNameContainer bgThemeColor={getGamingBgColor}>
//                 <SiYoutubegaming size="25px" color="green" />
//                 <NavLinkName fontColor={isDarkTheme}>Gaming</NavLinkName>
//               </NavLinkIconNameContainer>
//             </Link>
//           </NavLinkItem>
//           <NavLinkItem>
//             <Link to="/saved-videos">
//               <NavLinkIconNameContainer bgThemeColor={getSavedVideosBgColor}>
//                 <BiListPlus size="30px" color="orange" />
//                 <NavLinkName fontColor={isDarkTheme}>Saved Videos</NavLinkName>
//               </NavLinkIconNameContainer>
//             </Link>
//           </NavLinkItem>
//         </NavLinksContainer>
//       )
//     }}
//   </NxtWatchContext.Consumer>
// )

// export default withRouter(NavLinks)
