import './App.css'
import Directory from './components/directory/directory.component'
import HomePage from './pages/homepage/Homepage.component'

function App() {
  return (
    <div>
      <HomePage>
        <Directory />
      </HomePage>
    </div>
  )
}

export default App
