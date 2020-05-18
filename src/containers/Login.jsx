import React, { useState } from 'react';
import { connect } from 'react-redux'; //Conectar con redux
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions'; //importamos el loginrequest
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/statics/google-icon.png'
import twitterIcon from '../assets/statics/twitter-icon.png'

const Login = props => {
    //--------------Manejar el form
    //[form, setValues] form (toda la informacion que voy a gaurdar) setValues (me permite guardar los valores obtenido)
    //useState - la informacion que vamos a utlizar
    const [form, setValues] = useState({
        email: '', //Informacion inicial del estado
    });

    //Manejamos los cambios dentro del input
    const handleInput = event => {
        //setValues (me permite guardar los valores obtenido)
        setValues({
            ...form, //Obtenemos lo del form
            //[valor dinamico]: obtenemos el value del input  
            [event.target.name]: event.target.value
        })
    }

    //Manejamos el envio de la información la capturamos y la enviamos
    const handleSubmit = event => {
        event.preventDefault(); //Prohibe el envio por get
        props.loginRequest(form); //enviamos el estado la informacion que capturamos
        props.history.push('/'); //movemos a el home    
    }
    //------------------------------


    return (
        <React.Fragment>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input
                            name="email"
                            className="input"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput} //Nos permite escuchar lo que tipeamos
                        />
                        <input
                            name="password"
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={googleIcon} /> Inicia sesión con Google</div>
                        <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">
                        No tienes ninguna cuenta {' '}
                        <Link to="/register">
                            Regístrate
                </Link>
                    </p>
                </section>
            </section>
        </React.Fragment>
    );
}

//Dispatch - permite enviar la informacion de los actions 
const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login)