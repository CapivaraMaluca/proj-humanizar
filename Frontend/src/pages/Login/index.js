/**
 * 
 * PAGINA DE LOGIN
 */

import React, { /*useState*/ } from 'react'; 
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
//import api from '../../services/api';

import './styles.css';

export default function Login () {
    /*
    * TUDO QUE ESTIVER COMENTADO SAO COISAS PARA SEREM IMPLEMENTADAS COM O BACK-END
    *
    *const [email, setEmail] = useState('');
    *const [password, setPassword] = useState('');
    *const history = useHistory();
    *
    * localStorage.setItem('', email) - Local para armazenar email do usuario no navegador
    * localStorage.setItem('', senha) - Local para armazenar senha do usuario no navegador
    * 
    * history.push('/'); - Vai fazer um push e levar o cara que logou pra tela principal do aplicativo
    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('email', { email }) //colocar a rota de login
            const response = await api.post('senha', { password}) //colocar a rota da senha

            console.log(response.data.email);
            console.log(response.data.password);
        } catch (err) {
            alert('Falha no login');
        }
    }*/


    return (
        <div className="login-container">
            <div className="login-caixa">
            <section className="form">
                <img src={logoImg} alt="Grupo Humanizar" />
                
            <form /*onSubmit={handleLogin}*/>
                <h1> Faça seu Login </h1>
                <input 
                    type="text"
                    placeholder="Seu login"
                    //onChange = {e => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Sua senha"
                    //onChange = {e => setPassword(e.target.value)}
                />
                <button type="submit" className="button">
                    Entrar
                </button>

                <Link className="back-link" to="/cadastro">
                    <FiLogIn size={18} color="#facd6c" /> 
                     Não possui cadastro? Cadastre-se aqui! 
                </Link>
            </form>
            
            </section>
            </div>
           
        </div>
    );
}