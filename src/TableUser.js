import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import "./TableUser.css"
import axios from 'axios'
import Pagination from "react-js-pagination";
export default function TableUser() {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const [employees, setEmployees] = React.useState([])
    React.useEffect(() => {
        getData()
    }, [])
    const [page, setPage] = React.useState(1);
    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setPage(pageNumber);
    }
    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }
    const renderHeader = () => {
        let headerElement = ['id', 'Name', 'Lastseen', 'Order', 'Total spent', 'Last purschase', 'New', 'Segment']

        return headerElement.map((key, index) => {
            return <th key={index} style={{ padding: "12px" }}>{key.toUpperCase()}</th>
        })
    }
    const renderBody = () => {
        return employees && employees.map(({ id, name, email, phone }) => {
            return (
                <tr style={{ width: "100%!important" }} key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>10/10/2020</td>
                    <td>0</td>
                    <td>$10.00</td>


                    <td>$10.00</td>
                    <td>
                        <button className="btn btn-success">New</button>
                    </td>
                    <td className='opration'>
                        <button className='button-remove' onClick={() => removeData(id)}>Delete</button>
                        <button className="button-edit" >Edit</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="container-user" >
            <table id='table-user' style={{ width: "100%" }} >
                <thead style={{ width: "100% !important" }}>
                    <tr> {renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={450}
                itemClass="page-item"
                linkClass="page-link"
                pageRangeDisplayed={5}
                onChange={handlePageChange.bind(this)}
            />
        </div>
    )
}
