import { useTable } from "react-table"
import MOCK_DATA from '../data/randomData.json'
import { GROPED_COLUMNS } from "../configuration/columns"
import { useMemo } from "react"
import '../styles/basicTable.css'

function GropedTable() {
    // It is much better to memoize the columns and the data
    const columns = useMemo(() => GROPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns : columns,
        data : data,
    })
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    return (
        <div>
            <h1>Groped Table</h1>
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

export default GropedTable