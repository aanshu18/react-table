import {format} from 'date-fns'
import {ColumnFilter} from './ColumnFilter'


// export const COLUMNS = [

//   ,
//   { Header: "Email", accessor: "email",Footer: "email"
//   },
// ];


//Cell property control what is rendered on the UI, it is equal to a function
//


export const GROUPED_HEADERS = [
  { Header: "Id", accessor: "id",
Footer: "Id",
Filter: ColumnFilter
  },
  { Header: "Name",
Footer: "Name",
columns: [
          { Header: "First Name", accessor: "first_name",Footer: "First Name",Filter: ColumnFilter

          },
          { Header: "Last Name", accessor: "last_name",
  Footer: "Last Nam",Filter: ColumnFilter
          }
      ]
  },
  { Header: "Info",
Footer: "Info",
columns: [
          { Header: "Email", accessor: "email",Footer: "Email", Filter: ColumnFilter
          },
          { Header: "IP Address", accessor: "ip_address",Footer: "IP Address", Filter: ColumnFilter
          },
          { Header: "Gender", accessor: "gender",Footer: "Gender", Filter: ColumnFilter
          },
          { Header: "DOB", accessor: "date_of_birth",Footer: "DOB", Filter: ColumnFilter,
            Cell: ({value}) => {return format(new Date(value),'dd/MM/yyy')}
          }
      ]
  },
]