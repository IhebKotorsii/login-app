import React from 'react';
import './login.scss';

function Login() {
    return (
        <div className="app-login">
            <div className="card border-0">
                <div className="card-header bg-blue-light px-4 py-3 border-0">
                   <div className="listCircle d-flex">
                        <span className="circle bg-white">

                    </span>
                       <span className="circle bg-white">

                    </span>
                       <span className="circle bg-white">

                    </span>
                   </div>
                </div>
                <div className="card-body py-5 bg-blue-alice">
                    <div className="content">
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <button type="button" className="btn btn-sm border-radius-10 px-3 btn-secondary">Cybergward</button>
                        </div>
                        <div className="form-group">
                            <input type="text" name="" className="form-control border-radius-10 text-center" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="" className="form-control border-radius-10 text-center" placeholder="Password" />
                        </div>
                        <button type="button" className="btn mt-4 px-3 py-2 w-100 border-radius-10 btn-primary">Se Connecter</button>
                    </div>
                    <div className="footerCard d-flex justify-content-center align-items-center mt-4">
                        <button type="button" className="btn btn-sm border-radius-10 btn-secondary">S'inscrire</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;