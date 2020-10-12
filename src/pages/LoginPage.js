import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='login'>
      <h1 id='judul' className='mt-16'>
        Selamat Datang
      </h1>
      <h2 id='login'>Silahkan Login Disini</h2>

      <form>
        <fieldset id='kotak'>
          <label className='marginket'>Email</label>
          <br />
          <input type='email' placeholder='Enter Email' size='40' className='marginkiri' />
          <br />
          <br />
          <label className='marginket'>Password</label>
          <br />
          <input type='password' placeholder='Enter Password' size='40' className='marginkiri' />

          <div id='masuk'>
            <Link to='/signup' className='akunbaru'>
              Buat akun
            </Link>
            <input type='submit' name='proses' value=' Masuk ' className='akunbaru' />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
