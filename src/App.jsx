import './styles/App.css'
import BasicTable from './tables/BasicTable'
import FormattingTable from './tables/FormattingTable'
import GropedTable from './tables/GropedTable'
import SortingTable from './tables/SortingTable'
import TableWithFilters from './tables/TableWithFilters'
import TableWithPagination from './tables/TableWithPagination'

function App() {

  return (
    <>
      <TableWithPagination></TableWithPagination>
      <TableWithFilters></TableWithFilters>
      <BasicTable></BasicTable>
      <GropedTable></GropedTable>
      <SortingTable></SortingTable>
      <FormattingTable></FormattingTable>
    </>
  )
}

export default App
