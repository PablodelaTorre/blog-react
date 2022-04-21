import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Inicio = () => {

    const {user, signIn, signOut} = useContext(UserContext)

    return (
        <div className='inicio'>
            <h1>Inicio</h1>
            <h2>{user? "Conectado" : "Desconectado"}</h2>
            {user? (
                <>
                    <button className='boton-acceder' onClick={signOut}>Cerrar Sesión</button>
                    <Link to="/protegida">Ruta Protegida</Link>
                </>
            ) : (
                <button className='boton-acceder' onClick={signIn}>Iniciar Sesión</button>
            )}
        </div>
    )
}

export default Inicio