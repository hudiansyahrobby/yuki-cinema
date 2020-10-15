import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signin } from '../actions/userAction';
import Layout from '../components/Layout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    console.log(newUser);
    dispatch(signin(newUser));
    history.push('/');
  };
  return (
    <Layout>
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
    </Layout>
  );
}
