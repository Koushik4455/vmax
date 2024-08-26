import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        address: ''
    });

    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({ name: '', age: '', email: '', phone: '', address: '' });
    };
    return (
        <div>
            <h4 className='text-center mt-5 mb-5 vmax-head-title'>Table and Form</h4>
            <div className='container vmax-form-bg'>
                <form onSubmit={handleSubmit}>
                    <div className='row p-3 vmax-responcive'>
                        <div className='col-md-3'>
                            <label><b>Name :</b></label><br />
                            <input type='text' className='vmax-input-border' name='name' value={formData.name} onChange={handleChange} />
                        </div>
                        <div className='col-md-3'>
                            <label><b>Age :</b></label><br />
                            <input type='tel' className='vmax-input-border' name='age' value={formData.age} onChange={handleChange} />
                        </div>
                        <div className='col-md-3'>
                            <label><b>Email:</b></label><br />
                            <input type='email' className='vmax-input-border' name='email' value={formData.email} onChange={handleChange} />
                        </div>
                        <div className='col-md-3'>
                            <label><b>Phone Number :</b></label><br />
                            <input type='tel' className='vmax-input-border' name='phone' value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 pt-2 vmax-res2'>
                            <label><b>Address :</b></label>
                            <div className='d-flex'>
                                <input type='text' className='vmax-input-border ' name='address' value={formData.address} onChange={handleChange} />
                                <button className='vmax-button-color ms-2'>Add</button>
                            </div>
                        </div>
                    </div>
                </form>



            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='vmax-table'>
                            <thead className='vmax-table-headclr'>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                            </thead>
                            <tbody>
                                {submittedData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form
