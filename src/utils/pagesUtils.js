const totalCount = 80;

export const getPageCount = (limitPerPage) => {
   return Math.ceil(totalCount / limitPerPage);
}

export const getPagesArray = (totalPage) => {
   let resultArr = [];
   for (let i = 1; i < totalPage + 1; i++) {
      resultArr.push(i);
   }
   return resultArr;
}