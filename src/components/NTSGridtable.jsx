import { createSignal } from "solid-js";

const NTSGridTable = (props) => {
  const [currentPage, setCurrentPage] = createSignal(1);
  const [searchQuery, setSearchQuery] = createSignal("");

  //Find the total number of pages like (total number of data / page size)
  const pageSize = props.pageSize || 5;
  const totalPages = Math.ceil(props.data.length / pageSize);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const renderTable = () => {
    const startIndex = (currentPage() - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const filteredData = props.data.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchQuery().toLowerCase())
      )
    );

    if (filteredData.length === 0 && !props.customNotFound) {
      return <div class="text-center text-gray-500">No records found.</div>;
    }

    return (
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            {props.columns.map((column) => (
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {filteredData.slice(startIndex, endIndex).map((item, index) => (
            <tr key={index}>
              {props.columns.map((column) => (
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{item[column]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const visiblePages = 10; 
    const pageItems = [];

    let startPage = Math.max(1, currentPage() - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    pageItems.push(
      <button
        class={`mx-1 px-3 py-2 rounded-md ${
          currentPage() === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-white text-gray-700"
        }`}
        onClick={() => currentPage() > 1 && changePage(currentPage() - 1)}
        disabled={currentPage() === 1}
      >
        Previous
      </button>
    );

    if (startPage > 1) {
      pageItems.push(
        <span class="mx-1 px-3 py-2">...</span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(
        <button
          class={`mx-1 px-3 py-2 rounded-md ${
            currentPage() === i ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pageItems.push(
        <span class="mx-1 px-3 py-2">...</span>
      );
    }

  
    pageItems.push(
      <button
        class={`mx-1 px-3 py-2 rounded-md ${
          currentPage() === totalPages ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-white text-gray-700"
        }`}
        onClick={() => currentPage() < totalPages && changePage(currentPage() + 1)}
        disabled={currentPage() === totalPages}
      >
        Next
      </button>
    );

    return <div class="flex justify-center mt-4">{pageItems}</div>;
  };

  return (
    <div class="overflow-hidden">
      <div class="flex items-center justify-between mb-4">
        <div class="flex space-x-4">
          <input
            type="text"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search..."
            value={searchQuery()}
            onInput={handleSearch}
          />
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </button>
        </div>
      </div>
      {renderTable()}
      {renderPagination()}
    </div>
  );
};

export default NTSGridTable;
