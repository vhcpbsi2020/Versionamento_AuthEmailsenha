import logoufopa from '../../img/logo_ufopa_inicio.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LayoutComponents } from '../../components/LayoutComponents'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e){
      e.preventDefault()
      signInWithEmailAndPassword(email, password)
    }
    if (loading) {
      return <p>carregando..</p>
  }

  if (user) {
    return console.log(user)
}
  

  return (

    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Bem vindo! <br></br> <span className='acervo-title'>Acervo Ufopa</span></span>
        <span className="login-form-title">
          <img src={logoufopa} alt='logo' />
        </span>

        <div className='wrap-input'>
          <input
            className={email !== "" ? 'has-val input' : 'input'}
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required = {true}
          />

          <span className='focus-input' data-placeholder='E-mail'></span>
        </div>

        <div className='wrap-input'>
          <input
            className={password !== "" ? 'has-val input' : 'input'}
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required = {true}
          />
          <span className='focus-input' data-placeholder='Senha'></span>
        </div>

        <div className='container-login-form-btn'>
          <button onClick={handleSignIn} className='login-form-btn'>login</button>
        </div>

        <div className='text-center'>
          <span className='txt1'>Não Possui conta? </span>

          <Link className='txt2' to='/register'>
            Criar conta
          </Link>
        </div>

      </form>
    </LayoutComponents>

  );
}
