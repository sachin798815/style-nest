import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context=useContext(myContext);
    const {loading,setLoading}=context;
    const navigate= useNavigate();

    //user signup state
    const [userSignup,setUserSignup]=useState({
        name:"",
        email:"",
        password:"",
        role:"user",
    });

    //user signup function
    const userSignupFunction=async()=>{
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            return toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(fireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            {/* Login Form  */}
            <div className="login_Form bg-violet-50 px-1 lg:px-8 py-6 border border-violet-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-violet-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='bg-violet-50 border border-violet-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-400'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                        className='bg-violet-50 border border-violet-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-400'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                        className='bg-violet-50 border border-violet-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-400'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-violet-500 hover:bg-violet-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-violet-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;