import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { signup } from '../actions/userAction';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner/Spinner';
import Image from '../assets/images/back.jpeg';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const { authenticated, loading } = useSelector((state) => state.user);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };
    dispatch(signup(newUser, history));
  };

  if (authenticated) {
    return <Redirect to='/profile' />;
  }
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div class='background'>
            <div class='image-container'>
              <img src={Image} alt='' style={{ width: '100%', height: '100%' }} />
            </div>

            <div class='form'>
              <h1>Selamat Datang</h1>
              <h2>Silahkan Buat Akun Anda</h2>
              <form onSubmit={onSubmitHandler}>
                <div>
                  <input type='text' required onChange={(e) => setName(e.target.value)} />
                  <label>Nama </label>
                </div>
                <div>
                  <input type='email' required onChange={(e) => setEmail(e.target.value)} />
                  <label>Email</label>
                </div>
                <div>
                  <input type='password' required onChange={(e) => setPassword(e.target.value)} />
                  <label>Password</label>
                </div>
                <input type='submit' value='Daftar' />
              </form>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
