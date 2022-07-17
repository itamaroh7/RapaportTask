import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import { useSelector } from "react-redux";
import { Filter } from "./Filter";

export const DiamondsTable = () => {
  const { diamonds } = useSelector((state) => state.diamondsState);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => diamonds, [diamonds]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
  } = useTable(
    {
      columns: columns,
      data: data,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageIndex } = state;

  return (
    <div>
      <h1 className="mt-5 fst-italic" style={{ fontSize: "8vh" }}>
        Diamonds
      </h1>
      <div className=" p-5 mt-5">
        <Filter filter={globalFilter} setFilter={setGlobalFilter} />
        <table className="table table-striped table-hover fst-italic" {...getTableProps()} style={{fontSize:'20px'}}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column,index) => (
                  <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell,index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <div className="btn btn-outline-secondary" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </div>
        <span> </span>
        <div className="btn btn-outline-secondary" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </div>
      </div>
    </div>
  );
};
