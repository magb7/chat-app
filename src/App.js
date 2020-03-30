import React from 'react';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/53.jpg"
        name="Vicki Washington"
        online
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/89.jpg"
        name="Darryl Rodriquez"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/59.jpg"
        name="Pauline Vasquez"
        online
      />
    </div>
  );
}

export default App;
