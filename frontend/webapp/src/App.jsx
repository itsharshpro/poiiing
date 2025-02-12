import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import LoginForm from './pages/Auth/LoginForm'
import SignUpForm from './pages/Auth/SignUpForm'
import Dashboard from './pages/Dashboard/Home'
import CreatePoll from './pages/Dashboard/CreatePoll'
import MyPolls from './pages/Dashboard/MyPolls'
import VotedPolls from './pages/Dashboard/VotedPolls'
import Bookmarks from './pages/Dashboard/Bookmarks'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/my-polls" element={<MyPolls />} />
          <Route path="/voted-polls" element={<VotedPolls />} />
          <Route path="/bookmarked-polls" element={<Bookmarks />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

// Root component to handle the initial redirect
const Root = () => {
  const isAuthenticated = !!localStorage.getItem('poiiingtoken')
  /* localStorage.getItem('token') can return different types of values:
  If the token exists, it returns a string (or whatever was stored).
  If the token does not exist, it returns null.
  By using !!, we convert these values into a strict boolean (true or false). */
  return isAuthenticated ? (
    <Navigate to="/dashboard"/>
  ) : (
    <Navigate to="/login"/>
  );
}