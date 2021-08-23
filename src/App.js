import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardsList from './components/CardsList';
import Card from './components/Card';
import SearchPanel from './components/SearchPanel';
import FilterForm from './components/FilterForm';

function App() {
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState({});

  const filteredData = listData.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  function resetFilters () {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
  }, []);

  const visibleData = (filteredData.map(item => (<Card key={item.id} item={item}/>)));
  let errNotFound = <h2 className="search-result">"{searchValue}" - was not found</h2>;

  return (
    <div className='container'>
      <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue}/>
      <FilterForm resetFilters={resetFilters} filterValue={filterValue} setFilterValue={setFilterValue} setListData={setListData}/>
      <CardsList filteredData={filteredData} visibleData={visibleData} errNotFound={errNotFound}/>
    </div>
  );
}

export default App;
