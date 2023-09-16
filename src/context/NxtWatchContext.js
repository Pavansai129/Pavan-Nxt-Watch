import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  isLiked: false,
  updateLikeStatus: () => {},
  isDisliked: false,
  updateDislikeStatus: () => {},
  isSaved: false,
  updateSavedStatus: () => {},
  savedVideos: [],
  updateSavedVideos: () => {},
})

export default NxtWatchContext
