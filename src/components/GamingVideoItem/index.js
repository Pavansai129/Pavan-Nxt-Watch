import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingVideoItemContainer,
  GamingDetailsContainer,
  GamingVideoTitle,
  GamingVideoDataText,
} from './styledComponents'
import {
  VideoItemCard,
  VideoItemThumbnailImage,
} from '../VideoItem/styledComponents'

const GamingVideoItem = props => {
  const {videoItemDetails} = props
  const {id, title, viewCount, thumbnailUrl} = videoItemDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCard>
            <Link to={`/videos/${id}`}>
              <GamingVideoItemContainer>
                <VideoItemThumbnailImage
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <GamingDetailsContainer>
                  <GamingVideoTitle fontColor={isDarkTheme}>
                    {title}
                  </GamingVideoTitle>
                  <GamingVideoDataText>
                    {viewCount} Watching Worldwide
                  </GamingVideoDataText>
                </GamingDetailsContainer>
              </GamingVideoItemContainer>
            </Link>
          </VideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
