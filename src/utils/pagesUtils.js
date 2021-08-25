const totalCount = 325;

const getPageCount = (limitPerPage) => {
   return Math.ceil(totalCount / limitPerPage);
}

const getPagesArray = (totalPage) => {
   let resultArr = [];
   for (let i = 1; i < totalPage + 1; i++) {
      resultArr.push(i);
   }
   console.log(resultArr.length);
   return resultArr;
}

   export {getPageCount, getPagesArray};