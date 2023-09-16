import styled from 'styled-components'

export const VideoItemCard = styled.li`
  padding: 0;
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 330px;
    gap: 20px;
  }
`
export const VideoItemThumbnailImage = styled.img`
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  border: none;
  background: none;
`
export const ChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 5px;
`

export const VideoDataContainer = styled.div`
  padding-left: 10px;
  border: none;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background-color: transparent;
  line-height: 1.2;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const NameViewsPublishedContainer = styled.div`
  display: flex;
  gap: 5px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const ViewsPublishedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ChannelName = styled.p`
  font-size: 10px;
  font-weight: 300px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 100%;
    margin-bottom: 5px;
  }
`
export const VideoDataText = styled.p`
  font-size: 10px;
  font-weight: 300px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`