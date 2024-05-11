import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Prueba() {
    const myInputRef = useRef(null);

    useEffect(() => {
        // Aquí puedes acceder al elemento de forma segura
        if (myInputRef.current) {
            myInputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                            {/* Asigna la referencia al input */}
                            <input ref={myInputRef} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Botón que activa el modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Abrir modal
            </button>
        </div>
    );
}

export default Prueba;