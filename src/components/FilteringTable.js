import React,{useMemo} from 'react'
import { useTable, useGlobalFilter} from 'react-table'
import mockdata from './mockdata.json'
import {COLUMNS, GROUPED_HEADERS} from './columns'
import './table.css'
import {GlobalFilter} from './GlobalFilter'
export const FilteringTable = () => {
    
const columns = useMemo(() => GROUPED_HEADERS,[])
const data  = useMemo(() =>mockdata,[])

// const tableInstance =   useTable({
//         columns,
//         data
// }) 
  
//destructuring properties from table instance.
//these are basically functions and arrays that the useTable hook 
//given us enable easy table creation



const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,} = useTable({
        columns,
        data
}, useGlobalFilter) 
  

const {globalFilter} = state

    //getTableProps is a fucntion needs to be destructured at table tag, similarily for getTableBodyProps
    //headerGroups is a array 
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
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
               {rows.map((row) => {
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
            <tfoot>
               {footerGroups.map((footerGroup) => (
                   <tr {...footerGroup.getFooterGroupProps()}>
                       {footerGroup.headers.map((column) => (
                            <td {...column.getFooterProps}>
                                {
                                    column.render('Footer')
                                }
                            </td>
                       ))}
                   </tr>
               ))}
            </tfoot>
        </table>
    </>
    )
}
