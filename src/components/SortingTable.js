import React,{useMemo} from 'react'
import { useTable, useSortBy} from 'react-table'
import mockdata from './mockdata.json'
import {COLUMNS, GROUPED_HEADERS} from './columns'
import './table.css'

export const SortingTable = () => {
    
const columns = useMemo(() => GROUPED_HEADERS,[])
const data  = useMemo(() =>mockdata,[])

// const tableInstance =   useTable({
//         columns,
//         data
// }) 
  
//destructuring properties from table instance.
//these are basically functions and arrays that the useTable hook 
//given us enable easy table creation


//we pass userSortBy as second argument to useTable to add sorting feature to our table instance
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,} = useTable({
        columns,
        data
},useSortBy) 
  
    //getTableProps is a fucntion needs to be destructured at table tag, similarily for getTableBodyProps
    //headerGroups is a array 
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                       {headerGroup.headers.map((column) => (
                           <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                           <span>
                               {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : '' }
                           </span>
                           </th>
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
    )
}
