
import Nav from './components/Nav'
import './App.css';
import Meme from './components/Meme';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <div className=' container body-content'>
        <Meme/>
     
      </div>
      
    </div>
  );
}

export default App;

