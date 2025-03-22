import 'normalize.css'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Projects from './components/projects/Projects'
import project_one from './assets/imgs/etch_a_sketch.png'
import perfil from './assets/imgs/foto_perfil.png'

export default function App() {

  return (
    <>
      <Sidebar/>
      <div className='projects-container '>
        <Projects
          name="Etch a Sketch"
          desc="The Odin Project's etch a sketch is a challenge meant to put to work the concepts that were taught up to that point in the course."
          img={project_one}
          link="https://github.com/Zoldyako/etch-a-sketch"
        />
        <Projects
          name="My Personal site (this one :P)"
          desc="A basic site made to display my current skills with programming. Right now it is made with React/Vite."
          img={perfil}
          link="https://github.com/Zoldyako/zoldyako_site"
        />
      </div>
    </>
  );
}
