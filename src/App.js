import './App.scss';
import { useState, useEffect } from 'react';
import { getPageCount, BASE_URL } from './utils/pagesUtils';
import getData from './utils/getData';
import CardsList from './components/CardsList';
import Card from './components/CardItem/Card';
import SearchPanel from './components/SearchPanel';
import FilterForm from './components/FilterForm';
import Pagination from './components/Pagination/Pagination';
import PrevNextButtons from './components/Pagination/PrevNextButtons';
import { Loader } from './components/Loader';

function App() {
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(20);
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    let fetchUrl;
    const searchUrl = `${BASE_URL}?beer_name=${searchValue}`;
    searchValue ? fetchUrl = searchUrl : fetchUrl = BASE_URL;

    getData(fetchUrl, page, limitPerPage, setListData);

    setTotalPage(getPageCount(limitPerPage));
    setLoading(false);
  }, [searchValue, page, limitPerPage]);

  function resetFilters () {
    getData(BASE_URL, page, limitPerPage, setListData);
  }

  const visibleData = listData.map(item => (<Card key={item.id} item={item}/>));

  const pageCompopents = (
    <div className="page-wrapper"> 
      <FilterForm 
        resetFilters={resetFilters} 
        filterValue={filterValue} 
        setFilterValue={setFilterValue} 
        setListData={setListData}
      />
      <PrevNextButtons 
        page={page} 
        setPage={setPage} 
        limitPerPage={limitPerPage} 
        setLimitPerPage={setLimitPerPage}  
        />
      <CardsList 
        visibleData={visibleData} 
      />
      <Pagination 
        page={page} 
        setPage={setPage} 
        totalPage={totalPage}
      />
    </div>
  )

  return (
    <div className='container'>
      <SearchPanel 
        setSearchValue={setSearchValue} 
      />
      {isLoading === false ? pageCompopents : <Loader />}
    </div>
  );
}

export default App;
