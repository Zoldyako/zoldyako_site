import 'normalize.css' 
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <div className='container'>
        <Sidebar />
        <Projects />
      </div>
    </>
  )
}

export default App
