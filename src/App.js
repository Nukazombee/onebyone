import cards_data from "./Cards_data";
import Filters from "./Filters"
import './App.css';
  

  function App() {
    return (
      <div>
        <Filters cards={cards_data} />
      </div>
    );
  }


export default App;
