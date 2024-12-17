import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import 'regenerator-runtime/runtime';

function GlobalFilter({filter, setFilter}) {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || '')
    }, 1000)
    return (
        <span>
            Search : {' '}
            <input value={value || ' '} onChange={(e) => {
                    setValue(e.target.value.trim())
                    onChange(e.target.value.trim())
                    }
                }></input>
        </span>
    )
}

GlobalFilter.propTypes  = {
    filter : PropTypes.string,
    setFilter : PropTypes.func
}

export default GlobalFilter
