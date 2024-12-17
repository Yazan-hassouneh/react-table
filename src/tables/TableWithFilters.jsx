import { useFilters, useGlobalFilter, useTable } from "react-table"
import MOCK_DATA from '../data/randomData.json'
import { COLUMNS_WithFilter } from "../configuration/columns"
import { useMemo } from "react"
import '../styles/basicTable.css'
import GlobalFilter from "../component/GlobalFilter"

function TableWithFilters() {
    // It is much better to memoize the columns and the data
    const columns = useMemo(() => COLUMNS_WithFilter, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns : columns,
        data : data,
        },
        useGlobalFilter,
        useFilters
    )
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter} = tableInstance
    const { globalFilter } = state
    return (
        <div>
            <h1>Table With Filters</h1>
            <div>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
            </div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup, i) => (
                            <tr {...headerGroup.getHeaderGroupProps} key={i}>
                                {
                                    headerGroup.headers.map((column, i) =>
                                        <th {...column.getHeaderProps()} key={i}>
                                            {column.render('Header')}
                                            <div key={i}>{column.canFilter ? column.render('Filter') : null}</div>
                                        </th>
                                    )
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row, i) => {
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
        </div>
    )
}

export default TableWithFilters