
import './App.css'

import Header from './components/Header';
import Section from './components/Section';
import Samples from './components/Samples';
import Schools from './components/Schools';
import Skills from './components/Skills';
import Jobs from './components/Jobs';
import Extras from './components/Extras';

function App() {
  

  return (
    <>
      
        <Header/>
        <main>
          <Section><Schools/></Section>
          <Section><Skills/></Section>
          <Section><Samples/></Section>
          <Section><Jobs/></Section>
          <Section><Extras/></Section>
        </main>
    </>
  )
}

export default App
