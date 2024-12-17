import { useTable, useSortBy } from "react-table"
import MOCK_DATA from '../data/randomData.json'
import { COLUMNS } from "../configuration/columns"
import { useMemo } from "react"
import '../styles/basicTable.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowDown, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"

function SortingTable() {
    // It is much better to memoize the columns and the data
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns : columns,
        data : data,
        },
        useSortBy
    )
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

    return (
        <div>
            <h1>Table With Sorting</h1>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup, i) => (
                            <tr {...headerGroup.getHeaderGroupProps} key={i}>
                                {
                                    headerGroup.headers.map((column, i) =>
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} key={i}>
                                            {column.render('Header')}
                                            <span className="sortingIcon" key={i}>
                                                {
                                                    column.isSorted 
                                                    ? (column.isSortedDesc ? <FontAwesomeIcon icon={faCircleArrowDown} /> : <FontAwesomeIcon icon={faCircleArrowUp} />) 
                                                    : ''
                                                }
                                            </span>
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

export default SortingTable