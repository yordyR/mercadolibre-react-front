import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Search from './views/Search/Search';
import SearchResult from './views/Search/SearchResult';
import ProductDetail from './views/Products/ProductDetail';
import AppContext from './context/Appcontext';
import useInitialState from './hook/useInitialState';


function App() {
  const initialState = useInitialState()
  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
          <Routes>
              <Route path='/' element={<Search />} ></Route>
              <Route path='search-result/items' element={<SearchResult />} ></Route>
              <Route path='product/items/:id' element={<ProductDetail />} ></Route>
            </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
