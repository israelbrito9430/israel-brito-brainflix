import React from 'react';


function App() {
  const names = [
    'Danyel Maudlin',

  ];

  return (
    <div className="App">
      <Hero />
      <main>
        <form>
          <label>User Picture:</label> <input type="text" placeholder = "Write comment here"/>
          <button>COMMENT</button>
        </form>
        <Student students={names} />
      </main>
      
    </div>
  );
}

function Student(props) {
  return (
    <ul className="student-list">
      {props.students.map((student, i) => {
        return <li key={i}>{student}</li>;
      })}
    </ul>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>JOIN THE CONVERSATION</h1>
    </section>
  );
}



export default App;
