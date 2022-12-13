import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrder(data);
            });
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete this order');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Order deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrder(remaining);
                })
        }
    }

    return (
        <div className='my-12'>
            {
                orders.length > 0 ?
                    <>
                        <h2 className='text-2xl'>You have {orders.length} orders</h2>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Service name</th>
                                        <th>Favorite Color</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => <OrderRow
                                            key={order._id}
                                            order={order}
                                            handleDelete={handleDelete}
                                        ></OrderRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <h3 className='text-5xl'>No data to show</h3>
            }

        </div>
    );
};

export default Orders;