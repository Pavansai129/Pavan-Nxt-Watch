import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingVideoItemContainer,
  TrendingVideoItemThumbnailImage,
  TrendingChannelProfileImage,
} from './styledComponents'
import {
  VideoItemCard,
  DetailsContainer,
  VideoDataContainer,
  VideoTitle,
  NameViewsPublishedContainer,
  ChannelName,
  VideoDataText,
  DotContainer,
  ViewsPublishedContainer,
} from '../VideoItem/styledComponents'

const TrendingVideoItem = props => {
  const {videoItemDetails} = props
  const {
    channel,
    id,
    title,
    viewCount,
    thumbnailUrl,
    publishedAt,
  } = videoItemDetails
  const {name, profileImageUrl} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCard>
            <Link to={`/videos/${id}`}>
              <TrendingVideoItemContainer>
                <TrendingVideoItemThumbnailImage
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <DetailsContainer>
                  <TrendingChannelProfileImage
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoDataContainer>
                    <VideoTitle fontColor={isDarkTheme}>{title}</VideoTitle>
                    <NameViewsPublishedContainer>
                      <ChannelName>{name}</ChannelName>
                      <DotContainer>
                        <BsDot
                          size="15px"
                          color={isDarkTheme ? '#475569' : ' #94a3b8'}
                        />
                      </DotContainer>
                      <ViewsPublishedContainer>
                        <VideoDataText>{viewCount} views</VideoDataText>
                        <BsDot
                          size="15px"
                          color={isDarkTheme ? '#475569' : ' #94a3b8'}
                        />
                        <VideoDataText>
                          {formatDistanceToNowStrict(new Date(publishedAt), {
                            addSuffix: true,
                          })}
                        </VideoDataText>
                      </ViewsPublishedContainer>
                    </NameViewsPublishedContainer>
                  </VideoDataContainer>
                </DetailsContainer>
              </TrendingVideoItemContainer>
            </Link>
          </VideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
