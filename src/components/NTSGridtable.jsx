import { createSignal } from "solid-js";

const NTSGridTable = (props) => {
  const [currentPage, setCurrentPage] = createSignal(1);
  const [searchQuery, setSearchQuery] = createSignal("");
  const [filterData, setFilterData] = createSignal(null);
  const [sortColumn, setSortColumn] = createSignal("");
  const [sortDirection, setSortDirection] = createSignal("asc");

  const pageSize = props.pageSize || 5;
  const totalPages = Math.ceil(props.data.length / pageSize);

  const changePage = (page) => {
    setCurrentPage(page);
    if (filterData().length === 0) {
      setCurrentPage(1);
    }
  };

  const handleSearch = (e) => {
    if (e.target.value.charAt(0) === "~" && e.target.value.length > 1) {
      const enteredPageNumber = parseInt(e.target.value.split("~")[1]);
      if (enteredPageNumber > totalPages) {
        setCurrentPage(totalPages);
        
      } else {
        setCurrentPage(enteredPageNumber);
      }
    } else if (e.target.value.length > 1) {
      setSearchQuery(e.target.value);
      setCurrentPage(1);
    }
  };

  const handleSort = (column) => {
    if (props.sortColumn) {
      if (column === sortColumn()) {
        setSortDirection(sortDirection() === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    }
  };

  const renderTable = () => {
    const filteredData = props.data.filter((item) => Object.values(item).some((value) => typeof value === "string" && value.toLowerCase().includes(searchQuery().toLowerCase())));

    let sortedData = filteredData;
    if (sortColumn()) {
      sortedData = filteredData.slice(0).sort((a, b) => {
        const aValue = a[sortColumn()];
        const bValue = b[sortColumn()];
        if (aValue < bValue) return sortDirection() === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection() === "asc" ? 1 : -1;
        return 0;
      });
    }

    const startIndex = (currentPage() - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visiblePages = 5;
    let startPage = Math.max(1, currentPage() - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);
    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    if (filteredData.length === 0) {
      setFilterData(filteredData);
      return <div class="text-center text-gray-500">{`${props.customNotFoundMessage ?? "No records found."}`}</div>;
    } else {
      setFilterData(filteredData);
    }

    return (
      <table class="min-w-full divide-y divide-gray-200">
        {/* Table header */}
        <thead class="bg-[#3c67aa] text-white">
          <tr>
            {props.columns.map((column) => (
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" onClick={() => handleSort(column)} style={{ cursor: "pointer" }}>
                {column}
                {column === sortColumn() && <span>{sortDirection() === "asc" ? " ▲" : " ▼"}</span>}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody class="bg-white divide-y divide-gray-200 ">
          {sortedData.slice(startIndex, endIndex).map((item, index) => (
            <tr key={index} class={`${index % 2 != 0 ? "bg-slate-200" : ""}`}>
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
    if (totalPages <= 1 || filterData().length === 0 || filterData().length < pageSize) return null;

    const visiblePages = 5;
    const pageItems = [];

    let startPage = Math.max(1, currentPage() - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    pageItems.push(
      <button class={`mx-1 px-3 py-2 rounded-md ${currentPage() === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white"}`} onClick={() => currentPage() > 1 && changePage(currentPage() - 1)} disabled={currentPage() === 1}>
        Previous
      </button>
    );

    if (startPage > 1) {
      pageItems.push(<span class="mx-1 px-3 py-2">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(
        <button class={`mx-1 px-3 py-2 rounded-md ${i > Math.ceil(filterData().length / pageSize) ? "!hidden" : ""} ${currentPage() === i ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`} onClick={() => changePage(i)}>
          {i}
        </button>
      );
    }

    if (endPage < totalPages && currentPage() < Math.ceil(filterData().length / pageSize)) {
      pageItems.push(<span class="mx-1 px-3 py-2">...</span>);
    }

    pageItems.push(
      <button class={`mx-1 px-3 py-2 rounded-md ${currentPage() === totalPages || currentPage() === Math.ceil(filterData().length / pageSize) ? "!bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white"}`} onClick={() => currentPage() < totalPages && changePage(currentPage() + 1)} disabled={currentPage() === totalPages || currentPage() === Math.ceil(filterData().length / pageSize)}>
        Next
      </button>
    );

    return <div class={`flex justify-${props.paginationposition ?? "center"} mt-4`}>{pageItems}</div>;
  };

  return (
    <div class="overflow-hidden">
      <div class="flex items-center justify-between mb-4">
        <div class={`flex space-x-4 w-full justify-${props.searchposition ?? "end"}`}>
          <input type="text" class="border border-gray-300 rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300" placeholder="Search / Go to page Ex: ~page number" value={searchQuery()} onInput={handleSearch} />
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={() => setSearchQuery("")}>
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
