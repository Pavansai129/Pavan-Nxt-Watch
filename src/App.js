import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'
import NxtWatchContext from './context/NxtWatchContext'

// Replace your code here

class App extends Component {
  state = {
    isDarkTheme: false,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateLikeStatus = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  updateDislikeStatus = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  updateSavedStatus = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  updateSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    if (savedVideos.includes(videoDetails)) {
      const filteredSavedVideos = savedVideos.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({savedVideos: filteredSavedVideos, isSaved: false})
    } else {
      this.setState({
        savedVideos: [...savedVideos, videoDetails],
        isSaved: true,
      })
    }
  }

  render() {
    const {isDarkTheme, isLiked, isDisliked, isSaved, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          isLiked,
          updateLikeStatus: this.updateLikeStatus,
          isDisliked,
          updateDislikeStatus: this.updateDislikeStatus,
          isSaved,
          updateSavedStatus: this.updateSavedStatus,
          savedVideos,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
