import React from 'react'


//filter is the value of the text input
export const GlobalFilter = ({ filter, setFilter}) => {
    return (
        <span>
            Search: {' '}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}
