import { useTable, usePagination } from "react-table"
import MOCK_DATA from '../data/randomData.json'
import { COLUMNS } from "../configuration/columns"
import { useMemo } from "react"
import '../styles/basicTable.css'

function TableWithPagination() {
    // It is much better to memoize the columns and the data
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns : columns,
        data : data,
        },
        usePagination
    )
    const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, state, gotoPage, setPageSize} = tableInstance
    const { pageIndex, pageSize } = state
    return (
        <div>
            <h1>Table With Pagination</h1>
            <div>
                <span>page Size </span>
                <select value={pageSize} onChange={e => setPageSize(e.target.value)}>
                    {
                        [5, 10, 15].map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))
                    }
                </select>
            </div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup, i) => (
                            <tr {...headerGroup.getHeaderGroupProps} key={i}>
                                {
                                    headerGroup.headers.map((column, i) =>
                                        <th {...column.getHeaderProps()} key={i}>{column.render('Header')}</th>
                                    )
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} key={i}>
                                    {
                                        row.cells.map((cell, i) => {
                                            return (<td {...cell.getCellProps()} key={i}>{cell.render('Cell')}</td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <span>page <strong>{pageIndex+1}</strong> of <strong>{pageOptions.length}</strong></span>

                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button> 
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>

                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </div>
    )
}

export default TableWithPagination