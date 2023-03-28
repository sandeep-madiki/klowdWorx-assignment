import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

const App = () => (
  <div className="main-white">
    <div className="border-main">
      <Route exact path="/" component={Home} />
    </div>
  </div>
)

export default App
