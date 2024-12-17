import './styles/App.css'
import BasicTable from './tables/BasicTable'
import FormattingTable from './tables/FormattingTable'
import GropedTable from './tables/GropedTable'
import SortingTable from './tables/SortingTable'

function App() {

  return (
    <>
      <BasicTable></BasicTable>
      <GropedTable></GropedTable>
      <SortingTable></SortingTable>
      <FormattingTable></FormattingTable>
    </>
  )
}

export default App
