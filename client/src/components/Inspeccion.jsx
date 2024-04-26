import React, { useState, useEffect, useRef } from 'react';
import "../css/InspeccionModule.css";


function Inspeccion() {



    const [inspeccion, setInspeccion] = useState({
        fechaCreacion: '',
        tasadorId: '',
        solicitante: '',
        ordenId: '',
        bancoId: '',
        departamentoId: '',
        calle: '',
        entreCalles: '',
        localidad: '',
        nroPuerta: '',
        unidad: '',
        seccionalJudicial: '',
        piso: '',
        esquina: '',
        padron: '',
        garage: false,
        clasificacion: '',
        caractResidencial: false,
        caractComercial: false,
        caractIndustrial: false,
        caractOtros: false,
        edificacion: '',
        densidad: '',
        pavimento: '',
        ose: false,
        pozo: false,
        colector: false,
        ute: false,
        antel: false,
        carpinteriaComun: false,
        carpinteriaAluminio: false,
        carpinteriapvc: false,
        carpinteriaMadera: false,
        carpinteriaOtros: false,
        cerramientosCortinas: false,
        cerramientosPostigos: false,
        cerramientosCelosias: false,
        cerramientosRejas: false,
        cerramientosOtros: false,
        instalacionesAguaBanoCaliente: false,
        instalacionesAguaBanoFria: false,
        instalacionesAguaCocinaFria: false,
        instalacionesAguaCocinaCaliente: false,
        instalacionesElectricidadEmbutida: false,
        instalacionesElectricidadExterior: false,
        instalacionesElectricidadMixta: false,
        instalacionesElectricidadInstGas: false,
        instalacionesSanitariaColector: false,
        instalacionesSanitariaCamSeptica: false,
        instalacionesSanitariaPozoNegro: false,
        instalacionesTermicasLosaRad: false,
        instalacionesTermicasRadiadores: false,
        instalacionesTermicasPanelElect: false,
        instalacionesTermicasAireAcond: false,
        instalacionesTermicasOtros: false,
        categoriaModesta: false,
        categoriaEconomica: false,
        categoriaBuena: false,
        categoriaConfortable: false,
        categoriaMuyConfortable: false,
        conservacionMalo: false,
        conservacionRegular: false,
        conservacionBueno: false,
        conservacionMuyBueno: false,
        conservacionNuevo: false,
        ocupacionActual: '',
        ocupacionEdad: '',
        tipo: '',
        edificioCantidadPisos: '',
        edificioAptoPisos: '',
        edificioAscensores: false,
        edificioPorteroElectrico: false,
        propiedadComunM2: '',
        superficieCubierta: '',
        superficieSemiCubierta: '',
        propiedadHorizontalM2: '',
        bienesPropios: '',
        bienesComunes: '',
        observaciones: '',
    });


    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setInspeccion({ ...inspeccion, [name]: inputValue });
    };

    // Manejador para enviar el formulario
    const submitHandler = async (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario al backend para guardar la inspección
        console.log('Formulario enviado:', inspeccion);
    };



    return (

        <div className="container-fluid fondoInspeccion">
            <h2 className="text-center mb-4">Crear Inspección</h2>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="d-flex justify-content-between">
                                    <div className="form-group p-2 d-flex align-items-center">
                                        <label htmlFor="avalador" style={{ width: '120px' }} >Avaluador :</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group p-2 d-flex align-items-center">
                                        <label htmlFor="fechaAvalador" style={{ width: '75px' }}>Fecha :</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">


                                    <div className="form-group p-2 d-flex align-items-center">
                                        <label htmlFor="banco" style={{ width: '75px' }}>Banco :</label>
                                        <select className="form-control" id="banco" name="banco" style={{ width: '300px' }}>
                                            <option value="">Seleccione un banco</option> {/* Opcional: opción predeterminada */}
                                        </select>
                                    </div>
                                    <div className="form-group p-2 d-flex align-items-center">
                                        <label htmlFor="solicitante" style={{ width: '75px' }}>Solicitante :</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>

                                <div className="botonLogin mt-3">
                                    <button type="submit" className="btn btn-primary">Crear Inspección</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Inspeccion;