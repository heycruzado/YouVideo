import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classname';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/video-logo.png';
import icon from '../assets/statics/user-icon.png';

const Header = props => {
    const { user, isLogin, isRegister } = props;
    //Comprobacion para saber los elementos del objeto y para saber si tenemos una cuenta iniciada
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({}); //Reiniciamos el estado (simulado)
    };

    const headerClass = classNames('header', {
        isLogin,
        isRegister,
    });

    return (        
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="YouVideo" />                               
            </Link>
            <h3>YouVideo</h3> 
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ?
                            <img src={gravatar(user.email)} alt="user.email" />
                            :
                            <img src={icon} alt="" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>

                    {hasUser ? //Sesion iniciada
                        <li><a href="/">{user.name}</a></li>
                        :
                        null

                    }
                    {hasUser ? //Para cerrar sesion
                        <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar sesión
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};


const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 
