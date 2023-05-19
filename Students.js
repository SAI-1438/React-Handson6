import './Style.css';
import { Link } from 'react-router-dom';
import store from './Store';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Students(){
    const ContextData = useContext(store);
    const Navi= useNavigate();
    return(
        <>
        <div className='stdhdng'>
        <h1>Students Details</h1>
        <button onClick={()=>{Navi('/Submit')}}>Add new Student</button>
        </div>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {ContextData.entries.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td><Link to='/Update' state={{data:index}}>Edit</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    );
}

export default Students;