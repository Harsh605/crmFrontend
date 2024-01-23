import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { adminRegister } from './slices/userSlice';
import { useNavigate } from 'react-router-dom';
import Alert from './Components/Alert';


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [flag, setFlag] = useState(false)
    const [message, setMessage] = useState("")
    const [errorType, setErrorType] = useState("")

    const { isAuthenticated, error, isLoading, userData } = useSelector((state) => state.userCustom)

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adminRegister({ email, password })).then(() => setFlag(true));
        // Handle form submission logic here

    };
    useEffect(() => {
        if (isAuthenticated) {
            navigate("admin/dashboard")
        }
        else {

        }
        if (error) {
            setErrorType('error');
            setMessage(error);
        }
        else if (isAuthenticated) {
            setErrorType('success');
            setMessage("Register Successfully");
        }

    }, [navigate, isAuthenticated])

    return (
        <div className='h-[100vh] flex justify-center items-center'>
            {
                flag && <Alert flag={flag} setFlag={setFlag} errorType={errorType} message={message} />
            }
            <div className="container max-w-md mx-auto  flex justify-center items-center xl:max-w-lg  flex bg-white rounded-lg shadow overflow-hidden">

                <div className="w-full xl:w-full p-8">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-bold text-[#452a72]">
                            Register new admin account
                        </h1>

                        <div className="mb-6 mt-6">
                            <label
                                className="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                                id="email"
                                type="text"
                                placeholder="Your email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="mb-3 mt-6">
                            <label
                                className="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="mb-2 text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline h-10"
                                id="password"
                                type="password"
                                placeholder="Your password"
                                value={password}
                                onChange={handlePasswordChange}
                            />


                        </div>

                        <div className="flex w-full mt-8">
                            <button
                                className="w-full bg-[#452a72] hover:bg-transparent hover:text-[#452a72] hover:border hover:border-[#452a72] text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                                type="submit"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;
