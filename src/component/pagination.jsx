// import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";

// const ITEMS_PER_PAGE = 5;

// const PaginatedComponent = () => {
//   const [data, setData] = useState([]);
//   const [pageNumber, setPageNumber] = useState(0);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   const pagesVisited = pageNumber * ITEMS_PER_PAGE;
//   const currentItems = data.slice(pagesVisited, pagesVisited + ITEMS_PER_PAGE);

//   return (
//     <div>
//       <h2 className="text-xl font-bold">Paginated Data</h2>
//       <ul>
//         {currentItems.map((item) => (
//           <li key={item.id} className="border p-2 my-2">
//             {item.title}
//           </li>
//         ))}
//       </ul>

//       {/* Pagination Component */}
//       <ReactPaginate
//         previousLabel={"Prev"}
//         nextLabel={"Next"}
//         pageCount={Math.ceil(data.length / ITEMS_PER_PAGE)}
//         onPageChange={({ selected }) => setPageNumber(selected)}
//         containerClassName={"flex gap-2 mt-4"}
//         pageClassName={"px-3 py-1 bg-gray-300 rounded"}
//         activeClassName={"bg-blue-500 text-white"}
//       />
//     </div>
//   );
// };

// export default PaginatedComponent;


import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 5; // Items per page

const SearchAndPagination = () => {
  const [data, setData] = useState([]); // API Data
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [currentPage, setCurrentPage] = useState(1); // Current page

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations for filtered data
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Search & Paginate Data</h2>

      {/* Search Input */}
      <input
        type="search"
        placeholder="Search..."
        className="border-2 rounded p-2 mb-4 w-full"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // Reset to page 1 when searching
        }}
      />

      {/* Data List */}
      <ul>
        {currentItems.map((item) => (
          <li key={item.id} className="border p-2 my-2">
            {item.title}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex gap-2 mt-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchAndPagination;

