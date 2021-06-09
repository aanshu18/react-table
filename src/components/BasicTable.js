import React,{useMemo} from 'react'
import { useTable} from 'react-table'
import mockdata from './mockdata.json'
import {COLUMNS} from './columns'
import './table.css'

export const BasicTable = () => {
    
const columns = useMemo(() => COLUMNS,[])
const data  = useMemo(() =>mockdata,[])

const tableInstance =   useTable({
        columns,
        data
}) 
  
//destructuring properties from table instance.
//these are basically functions and arrays that the useTable hook 
//given us enable easy table creation

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,} = tableInstance
  
    //getTableProps is a fucntion needs to be destructured at table tag, similarily for getTableBodyProps
    //headerGroups is a array 
    return (
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
        </table>
    )
}