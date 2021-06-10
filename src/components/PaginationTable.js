import React,{useMemo} from 'react'
import { useTable, usePagination} from 'react-table'
import mockdata from './mockdata.json'
import {COLUMNS, GROUPED_HEADERS} from './columns'
import './table.css'

export const PaginationTable = () => {
    
const columns = useMemo(() => GROUPED_HEADERS,[])
const data  = useMemo(() =>mockdata,[])

// const tableInstance =   useTable({
//         columns,
//         data
// }) 
  
//destructuring properties from table instance.
//these are basically functions and arrays that the useTable hook 
//given us enable easy table creation


//for pagination we destructure page instead of rows and use page in jsx in place of rows
//To go to nextPage and previousPage we need to destructure nextPage and PrevPage functions from table instanec

//we destructe state and pageOptions to for knowing which page we are on in pagination out of total pages
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,} = useTable({
        columns,
        data
},usePagination) 
  
//from state we further destructure pageIndex
const {pageIndex} = state


    //getTableProps is a fucntion needs to be destructured at table tag, similarily for getTableBodyProps
    //headerGroups is a array 
    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                       {headerGroup.headers.map((column) => (
                           <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                       ))}
                    </tr>
                    ))
                }
           </thead>
            <tbody {...getTableBodyProps()}>
               {page.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                            })}
                        </tr>
                    )
               })} 
            </tbody>
        </table>
        <div>
            <span>
                Page{' '}
                <strong>{pageIndex + 1} of {pageOptions.length}</strong>
            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        </div>
        </>
    )
}
