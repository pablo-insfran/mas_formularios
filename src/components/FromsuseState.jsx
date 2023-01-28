import React, {useState} from 'react'

const FromsuseState = () => {
    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getConfirmPassword, setConfirmPassword] = useState("");

    const persona = (evento) => {
        evento.preventDefault();
        console.log(evento.target);
    }

    return (
        <>
            <div>
                <form onSubmit={persona}  >
                    <div className="mb-3">
                        <label htmlFor="inputFirstName" className="form-label">First Name: </label>
                        <input onChange={(evento) => setFirstName (evento.target.value) } type="text" className="form-control" id="firstName" aria-describedby="firstName"/>
                        {/* Validacion */}
                        {(getFirstName.length < 2 && getFirstName !== "") ? <p className = 'text-danger'>Frist Name must be at least 2 character</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLastName" className="form-label">Last Name: </label>
                        <input onChange={(evento) => setLastName (evento.target.value) } type="text" className="form-control" id="lastName" aria-describedby="lastName"/>
                        {/* Validacion */}
                        {(getLastName.length < 2 && getLastName !== "") ? <p className = 'text-danger'>Last Name must be at least 2 character</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email: </label>
                        <input onChange={(evento) => setEmail (evento.target.value) } type="email" className="form-control" id="email" aria-describedby="email"/>
                        {/* Validacion */}
                        {(getEmail.length < 5 && getEmail !== "") ? <p className = 'text-danger'>Email must be at least 5 character</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password: </label>
                        <input onChange={(evento) => setPassword (evento.target.value) } type="password" className="form-control" id="inputPassword"/>
                        {/* Validacion */}
                        {(getPassword.length < 8 && getPassword !== "") ? <p className = 'text-danger'>Password must be at least 8 character</p> : null }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password: </label>
                        <input onChange={(evento) => setConfirmPassword (evento.target.value) } type="password" className="form-control" id="confirmPassword"/>
                        {/* Validacion */}
                        {(getConfirmPassword.length < 8 && getConfirmPassword !== "") ? <p className = 'text-danger'>Password must be at least 8 character</p> : null }
                        {(getConfirmPassword !== getPassword  && getConfirmPassword !== "") ? <p className = 'text-danger'>Password</p> : null }
                    </div>
                </form>
            </div>
            <br />
            <div>
                <p>First Name: {getFirstName}</p>
                <p>Last Name: {getLastName}</p>
                <p>Email: {getEmail}</p>
                <p>Password: {getPassword}</p>
                <p>Confirm Password: {getConfirmPassword}</p>
            </div>
        </>
    )

}

export default FromsuseState