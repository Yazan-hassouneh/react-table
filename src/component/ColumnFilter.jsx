import PropTypes from 'prop-types';

function ColumnFilter({ column }) {
    const {filterValue, setFilter} = column
    return (
        <span>
            <input value={filterValue || ' '} onChange={(e) => setFilter(e.target.value.trim())} className='columnFilter'></input>
        </span>
    )
}

ColumnFilter.propTypes  = {
    column : PropTypes.any
}

export default ColumnFilter