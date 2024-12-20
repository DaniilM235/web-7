import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Hello from './components/Hello';
import Query from './components/Query';

function App() {
  return (
    <div className="apps">
      <div className="services">
          <Count />
          <Hello />
          <Query />
      </div>
    </div>
  );
}

export default App;
