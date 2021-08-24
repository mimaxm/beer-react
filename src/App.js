import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getPageCount, getPagesArray } from './utils/pagesUtils';
import CardsList from './components/CardsList';
import Card from './components/Card';
import SearchPanel from './components/SearchPanel';
import FilterForm from './components/FilterForm';

function App() {
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(8);

  const pagesArray = getPagesArray(totalPage);

  const filteredData = listData.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const baseUrl = 'https://api.punkapi.com/v2/beers';

  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        page: page,
        per_page: limitPerPage,
      }
    })
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
      setTotalPage(getPageCount(limitPerPage))
  }, [page, limitPerPage, setPage]);

  function resetFilters () {
    axios.get(baseUrl)
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
  }

  const visibleData = (filteredData.map(item => (<Card key={item.id} item={item}/>)));
  const errNotFound = <h2 className="search-result">"{searchValue}" - was not found</h2>;

  function changeOption (event) {
    setLimitPerPage(event.target.value);
  }

  return (
    <div className='container'>
      <SearchPanel setSearchValue={setSearchValue}/>
      <FilterForm baseUrl={baseUrl} resetFilters={resetFilters} filterValue={filterValue} setFilterValue={setFilterValue} setListData={setListData}/>
      
      <div className="pagination">
        <div className="pagination__pages">
        {pagesArray.map(p => <button key={p} onClick={() => setPage(p)} className={page === p ? 'pagination__button-current' : 'pagination__button'}>{p}</button>)}
        </div>
        <div>
          <select name="limit-per-page" onChange={(e) => changeOption(e)}>
            <option value="8" >8 cards per page</option>
            <option value="10">10 cards</option>
            <option value="20">20 cards</option>
            <option value="50">50 cards</option>
          </select>
        </div>
      </div>
      
      <CardsList filteredData={filteredData} visibleData={visibleData} errNotFound={errNotFound}/>
    </div>
  );
}

export default App;
