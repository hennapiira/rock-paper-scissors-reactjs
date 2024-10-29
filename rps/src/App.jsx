import './App.css';
import Header from './Header';
import Game from './Game';
import Result from './Result';

function App() {
  return (
    <div className="main-container">
      <div className="sliding-background"></div>
      <div className="content-container">
        <Header />
        <Game />
      </div>
    </div>
  );
}

export default App;
