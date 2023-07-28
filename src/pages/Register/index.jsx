import { useState } from "react"
import { LayoutComponents } from "../../components/LayoutComponents"
import { Link } from "react-router-dom"
import { auth } from "../../services/firebaseConfig"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"


export const Register = () => {

    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useCreateUserWithEmailAndPassword(auth);
    
        function handleSignOut(e){
          e.preventDefault()
          createUserWithEmailAndPassword(email, password, name)
        }

        if (loading) {
            return <p>carregando..</p>
        }
        

    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Criar Conta</span>
                <span className="login-form-title">

                </span>



                <div className='wrap-input'>
                    <input
                        className={name !== "" ? 'has-val input' : 'input'}
                        type='Nome'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required={true}
                    />

                    <span className='focus-input' data-placeholder='Nome Completo'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        className={email !== "" ? 'has-val input' : 'input'}
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required={true}
                    />

                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        className={password !== "" ? 'has-val input' : 'input'}
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required={true}
                    />
                    <span className='focus-input' data-placeholder='Crie uma senha'></span>
                </div>

                <div className='container-login-form-btn'>
                    <button onClick={handleSignOut} className='login-form-btn'>Cadastrar</button>
                </div>

                <div className='text-center'>
                    <span className='txt1'>Já possui uma conta? </span>

                    <Link className='txt2' to='/'>
                        Acessar conta.
                    </Link>
                </div>

            </form>
        </LayoutComponents>
    )
}
