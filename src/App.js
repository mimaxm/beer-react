import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getPageCount } from './utils/pagesUtils';
import CardsList from './components/CardsList';
import Card from './components/Card';
import SearchPanel from './components/SearchPanel';
import FilterForm from './components/FilterForm';
import Pagination from './components/Pagination';
import { Loader } from './components/Loader';

function App() {
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(20);
  const [isLoading, setLoading] = useState();

  const filteredData = listData.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.trim().toLowerCase());
  });

  const baseUrl = 'https://api.punkapi.com/v2/beers';

  useEffect(() => {
    setLoading(true);
    axios.get(baseUrl, {
      params: {
        page: page,
        per_page: limitPerPage,
      }
    })
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
      setTotalPage(getPageCount(limitPerPage));
      setLoading(false);
  }, [page, limitPerPage, setPage]);

  function resetFilters () {
    axios.get(baseUrl)
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
  }

  const visibleData = (filteredData.map(item => (<Card key={item.id} item={item}/>)));
  const errNotFound = <h2 className="search-result">No results found :(</h2>;



  return (
    <div className='container'>
      <SearchPanel setSearchValue={setSearchValue} setTotalPage={setTotalPage} getPageCount={getPageCount} filteredData={filteredData}/>
      {isLoading === false 
      ?
      <> 
        <FilterForm baseUrl={baseUrl} resetFilters={resetFilters} filterValue={filterValue} setFilterValue={setFilterValue} setListData={setListData}/>
        <Pagination page={page} setPage={setPage} limitPerPage={limitPerPage} setLimitPerPage={setLimitPerPage} totalPage={totalPage}/>
        <CardsList filteredData={filteredData} visibleData={visibleData} errNotFound={errNotFound}/>
      </>
      : 
      <Loader />}
    </div>
  );
}

export default App;
