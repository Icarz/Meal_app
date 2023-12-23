import "./App.css";
import { useGlobalContext } from "./context";

//* Components*/
import Favorites from './components/favorites'
import Search from './components/search'
import Modal from './components/modal'
import Meals from "./components/meals";

function App() {
  const { showModal, favorites } = useGlobalContext()
  return (
    <div className="App">
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
