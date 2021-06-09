import React from 'react'


//filter is the value of the text input
export const ColumnFilter = ({ column}) => {
   
   const {filterValue, setFilter } = column
    return (
        <span>
            Search: {' '}
            <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}
