import 'normalize.css' 
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <Sidebar />
      <div className='projects-container'>
        <Projects 
          name="Project 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima."
          img="https://placehold.co/150/png"
        />
        <Projects 
          name="Project 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima."
          img="https://placehold.co/150/png"
        />
        <Projects 
          name="Project 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima."
          img="https://placehold.co/150/png"
        />
      </div>
    </>
  )
}

export default App
