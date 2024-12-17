import { format } from "date-fns"

export const COLUMNS = [
    {
        Header : "Id",
        accessor : "id"
    },
    {
        Header : "First Name",
        accessor : "first_name"
    },
    {
        Header : "Last Name",
        accessor : "last_name"
    },
    {
        Header : "Date of birth",
        accessor : "date_of_birth"
    },
    {
        Header : "Country",
        accessor : "country"
    },
    {
        Header : "Phone",
        accessor : "phone"
    },
]

export const GROPED_COLUMNS = [
    {
        Header : "Id",
        accessor : "id"
    },
    {
        Header : "Name",
        columns : [
            {
                Header : "First Name",
                accessor : "first_name"
            },
            {
                Header : "Last Name",
                accessor : "last_name"
            },
        ]
    },
    {
        Header : "Info",
        columns : [
            {
                Header : "Date of birth",
                accessor : "date_of_birth"
            },
            {
                Header : "Country",
                accessor : "country"
            },
            {
                Header : "Phone",
                accessor : "phone"
            },
        ]
    }
]
export const COLUMNS_FORMATTED = [
    {
        Header : "Id",
        accessor : "id"
    },
    {
        Header : "First Name",
        accessor : "first_name"
    },
    {
        Header : "Last Name",
        accessor : "last_name"
    },
    {
        Header : "Date of birth",
        accessor : "date_of_birth",
        Cell : ({value}) => {return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header : "Country",
        accessor : "country"
    },
    {
        Header : "Phone",
        accessor : "phone"
    },
]