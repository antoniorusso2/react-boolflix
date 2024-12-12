import './App.css';
import Header from './components/Header';
import { GlobalContext } from './globalContext';

function App() {
  return (
    <GlobalContext.Provider>
      <Header />
    </GlobalContext.Provider>
  );
}

export default App;
