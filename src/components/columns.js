import {format} from 'date-fns'


// export const COLUMNS = [

//   ,
//   { Header: "Email", accessor: "email",Footer: "email"
//   },
// ];


//Cell property control what is rendered on the UI, it is equal to a function
//


export const GROUPED_HEADERS = [
  { Header: "Id", accessor: "id",
Footer: "id"
  },
  { Header: "Name",
Footer: "Name",
columns: [
          { Header: "First Name", accessor: "first_name",Footer: "first_name"
          },
          { Header: "Last Name", accessor: "last_name",
  Footer: "last_name"
          }
      ]
  },
  { Header: "Info",
Footer: "id",
columns: [
          { Header: "Email", accessor: "email",Footer: "email"
          },
          { Header: "IP Address", accessor: "ip_address",Footer: "IP Address"
          },
          { Header: "Gender", accessor: "gender",Footer: "Gender"
          },
          { Header: "DOB", accessor: "date_of_birth",Footer: "DOB",
            Cell: ({value}) => {return format(new Date(value),'dd/MM/yyy')}
          }
      ]
  },
]