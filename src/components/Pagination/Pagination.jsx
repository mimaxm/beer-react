import { getPagesArray } from '../../utils/pagesUtils';
import { useMemo } from 'react';

const Pagination = ( { page, setPage, totalPage}) => {

   const pagesArray = useMemo(() => getPagesArray(totalPage), [totalPage]);

   return (
      <div className="pagination">
         <div className="pagination__pages">
         {pagesArray.map(p => <button key={p} onClick={() => setPage(p)} className={page === p ? 'pagination__button-current' : 'pagination__button'}>{p}</button>)}
         </div>
      </div>
   )
}

export default Pagination;