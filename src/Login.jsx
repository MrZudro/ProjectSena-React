import { useState } from 'react'
import './components/styles/Login.css'

export default function Login() {
const [change, setChange] = useState(true)
    if(change===true){
        return (
            <div className="contentForm">
                <form>
                    <div className="contTitle">
                        <h1>Logo</h1>
                    </div>
                    <div className="contSubtitle">
                        <h3>Bienvenido de nuevo</h3>
                        <p>Ingresa tus credenciales para acceder a tu cuenta</p>
                    </div>
                    <div className="contUser">
                        <input type="email" placeholder='Correo Electronico'/>
                    </div>
                    <div className="contUser" id='secundario'>
                        <input type="password" placeholder='Contraseña' />
                    </div>
                    <div className="questions">
                        <p><a href="" onClick={setChange(!change)}>¿Ha olvidado su contraseña?</a></p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Guardar informacion de inicio de sesión</p>
                    </div>
                    <div className="contBtn">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }else{
        return(
            <div className="contentForm2">
                <form>
                    <div className="contTitle">
                        <h1>Logo</h1>
                    </div>
                    <div className="contSubtitle">
                        <h3>Bienvenido de nuevo</h3>
                        <p>Ingresa tus credenciales para acceder a tu cuenta</p>
                    </div>
                    <div className="contUser">
                        <input type="email" placeholder='Correo Electronico'/>
                    </div>
                    <div className="contBtn2">
                        <button type="submit">Enviar enlace de recuperacion</button>
                    </div>
                    <div className="contLink">
                        <i class="bi bi-arrow-left-circle"></i>
                        <p>Volver al inicio de sesion</p>
                    </div>
                    <hr />
                    <div className="contInfo">
                        <div className="miniTitle">
                            <i class="bi bi-info-circle"></i>
                            <p>Información</p>
                        </div>
                        <p>Sí no recibes un correo electronico en unos minutos, revisa tu carpeta de spam o verifica que la direccion de correo electronico sea correcta.</p>
                    </div>
                </form>
            </div>
        )
    }

}
