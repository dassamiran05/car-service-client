import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignup =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero w-full my-24">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt=''/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-16 pt-12">
                    <h1 className="text-5xl text-center font-bold">Sign up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Sign up' className="btn btn-primary"/>
                        </div>
                    </form>
                    <p className='text-center'>Already have an account <Link to='/login' className='font-bold text-orange-500'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;