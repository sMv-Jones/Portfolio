import './App.css';
import { Theme, Hero, About, Contact, Project, Resume, Skill, Education } from "./components/index"
export default function App() {
  return (
    <div className='content-box'>
      <header>
        <Hero />
        <Theme />
      </header>
      <main>
        <About />
        <Project />
        <Education />
        <Skill />
        <Resume />
        <Contact />
      </main>
    </div>
  )
} 