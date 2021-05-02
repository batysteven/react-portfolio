import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);

  if (aboutSelected == true) {
    page = <About />
  } else if (contactSelected == true) {
    page = <ContactForm />
  } else if (projectsSelected == true) {
    page = <Projects />
  }

  return (
    <div>
      <Header />
      <main>
        {page}
      </main>
      <Footer />
    </div>
  );
}

export default App;
