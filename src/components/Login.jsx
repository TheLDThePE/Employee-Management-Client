import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import './Styles/Auth.css'
import emailicon from '../assets/email.png'
import passwordicon from '../assets/password.png'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    'email': '',
    'password':''
  }

  const validationSchema = Yup.object().shape({
    'email': Yup.string().email('Invalid email').required('Email is required'),
    'password': Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  })

  const handleLogin = (values) => {
    try {
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
        <Form className='container d-flex flex-column justify-content-center align-items-center form'>
          <div className='col-12 my-4 fs-5 d-flex flex-column justify-content-center align-items-center'>
            <div className="d-flex col-12">
            <label htmlFor="email" className='col-1'><img src={emailicon} alt="emailicon" className='icon'/></label>
            <Field type='email' className='ms-4 col-10 rounded p-1 ps-2' name='email' placeholder="email"></Field>
            </div>
            <ErrorMessage name='email' component='span' className='text-danger'></ErrorMessage>
          </div>
          <div className='col-12 my-4 fs-5 d-flex flex-column justify-content-center align-items-center'>
          <div className="d-flex col-12">
            <label htmlFor="email" className='col-1'><img src={passwordicon} alt="emailicon" className='icon'/></label>
              <Field type='password' className='col-10 ms-4 rounded p-1 ps-2' name='password' placeholder="password"></Field>
              </div>
            <ErrorMessage name='password' component='p' className='text-danger'></ErrorMessage>
          </div>
          <button type='submit' className='col-4 align-self-center btn btn-custom my-2 fs-5'>Login</button>
        </Form> 
      </Formik>
    </>
  )
}

export default Login