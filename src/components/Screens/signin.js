import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
// import {useAuth} from '../../provider/auth'

import './signin.css';

function App() {
  // const {user, setUser} = useAuth();

  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const onSubmit = data => {
    // setUser({
    //   matricula:data.matricula,
    //   senha: data.password,
    // })

    history.push('./home');
  };

  return (
    <div className="app-window">
      <div className="sidebar" />

      <div className="contentarea">
        <div className="contentbox">
          <form onSubmit={handleSubmit(onSubmit)} className="formfields">
            <label className="labelinput">EFETUE SEU LOGIN</label>

            <input
              type="text"
              placeholder="N MATRÍCULA"
              name="matricula"
              ref={register}
              className="inputtext"
            />
            <input
              type="password"
              placeholder="SENHA"
              name="password"
              ref={register({ required: 'PASSWORD REQUIRED' })}
              className="inputtext"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit" className="submitbutton">
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
