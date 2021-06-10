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

//for jumping on any specific page we destructure 2 more functions from table instance which is gotoPage and pageCount

//if we want to alter the page size the we destructure setPageSize from table instance and from state we destructure pageSize
//by default the pagesize is 10

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
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,} = useTable({
        columns,
        data
        //initialState: { pageIndex : 2}
},usePagination) 
  
//from state we further destructure pageIndex
const {pageIndex, pageSize} = state


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
            <span>
                | Go to page: {' '}
                <input type="number" defaultValue = {pageIndex+1} onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber) }} 
                        style={{ width: '50px'}}
                        /> 
            </span>

            <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} >
                {[10,20,30].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                        </option>
                    ))}
            </select>

            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>

        </div>
        </>
    )
}
