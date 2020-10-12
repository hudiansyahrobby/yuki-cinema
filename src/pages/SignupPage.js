import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/userAction';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };
    dispatch(signup(newUser));
  };
  return (
    <div className='buatakun'>
      <title>Create New Account</title>
      <h1 id='h1'>Create New Account</h1>
      <fieldset id='kolom'>
        <label id='judul1'>Membuat Akun Baru</label>
        <br />
        <label id='judul2'>Silahkan Melengkapi Form Dibawah</label>
        <br />
        <br />

        <form onSubmit={onSubmitHandler}>
          <label className='labelnama'>Nama</label>
          <br />
          <input
            type='text'
            placeholder='Nama'
            size='40'
            className='nama'
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label className='labelnama'>Email pengguna</label>
          <br />
          <input
            type='email'
            placeholder='Email Pengguna'
            size='40'
            className='nama'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label className='labelnama' onChange={(e) => setPassword(e.target.value)}>
            Sandi
          </label>
          <button type='submit' id='kirimdata'>
            Mengirim
          </button>
          <br />
          <input type='Password' placeholder='Sandi' size='40' className='nama' />
        </form>
      </fieldset>
    </div>
  );
}
