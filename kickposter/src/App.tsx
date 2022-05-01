import './App.css'
import UserSidebar from './components/UserSidebar/UserSidebar';
import PostsContainer from './components/PostsContainer/PostsContainer';
import { loadInitialData } from './utils'

function App() {
  loadInitialData()
  return (
    <div className = 'App-container'>
      <UserSidebar/>
      <PostsContainer/>
    </div>
  );
}

export default App;
