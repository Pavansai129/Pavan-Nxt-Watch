import styled from 'styled-components'

export const TrendingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const TrendingVideoItemThumbnailImage = styled.img`
  width: 300px;
`
export const TrendingChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
