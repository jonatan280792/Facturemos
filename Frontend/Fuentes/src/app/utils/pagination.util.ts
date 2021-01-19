const pagination = (total, resultsPerPage = 20) => {
  const results = resultsPerPage;
  const pages = Math.ceil(total / results);
  const totalPages = [];

  let resultInit = 1;
  let resultFinish = resultsPerPage;

  for (let i = 1; i <= pages; i++) {
    totalPages.push({
      page: i,
      resultFinish: resultFinish,
      resultInit: resultInit
    });

    resultInit += resultsPerPage;
    resultFinish += resultsPerPage;
  }

  return totalPages;
};

const paginationChange = (page, totalItems, itemsPerPage) => {
  let finalItem = page * itemsPerPage;
  const initItem = finalItem - itemsPerPage + 1;

  finalItem = finalItem > totalItems ? totalItems : finalItem;

  return {
    finalItem,
    initItem
  };
};

export {
  paginationChange,
  pagination
};
