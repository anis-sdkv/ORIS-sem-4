export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getAllPages = (totalPages) => {
  let pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
};

export const getPagesFor = (page, totalPages, pageCount) => {
  let pagesArray = [];
  if (page <= 2) page = 2;
  for (let i = page - 2; i < totalPages; i++) {
    if (i - page + 2 == pageCount) break;
    pagesArray.push(i);
  }
  return pagesArray;
};
