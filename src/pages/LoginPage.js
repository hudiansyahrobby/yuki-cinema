import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { signin } from '../actions/userAction';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner/Spinner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { authenticated, loading } = useSelector((state) => state.user);

  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    dispatch(signin(newUser, history));
  };

  if (authenticated) {
    return <Redirect to='/profile' />;
  }
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='login'>
          <h1 id='judul' className='mt-16'>
            Selamat Datang
          </h1>
          <h2 id='login'>Silahkan Login Disini</h2>

          <form onSubmit={onSubmitHandler}>
            <fieldset id='kotak'>
              <label className='marginket'>Email</label>
              <br />
              <input
                type='email'
                placeholder='Enter Email'
                size='40'
                className='marginkiri'
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <label className='marginket'>Password</label>
              <br />
              <input
                type='password'
                placeholder='Enter Password'
                size='40'
                className='marginkiri'
                onChange={(e) => setPassword(e.target.value)}
              />

              <div id='masuk'>
                <Link to='/signup' className='akunbaru'>
                  Buat akun
                </Link>
                <input type='submit' name='proses' value=' Masuk ' className='akunbaru' />
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </Layout>
  );
}
