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
            <h2 className="text-center mb-4">Inspección</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card fondoIntroInspeccion">
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <div className="form-group p-1 d-flex align-items-center">
                                                <label htmlFor="avalador" style={{ width: '80px' }}>Avaluador:</label>
                                                <input type="text" className="form-control" placeholder="" style={{ width: '250px' }} />
                                            </div>
                                            <div className="form-group p-1 d-flex align-items-center">
                                                <label htmlFor="banco" style={{ width: '80px' }}>Banco:</label>
                                                <select className="form-control" id="banco" name="banco" style={{ width: '250px' }}>
                                                    <option value="">Seleccione un banco</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <div className="form-group p-1 d-flex align-items-center">
                                                <label htmlFor="fechaAvalador" style={{ width: '80px' }}>Fecha:</label>
                                                <input type="date" className="form-control" style={{ width: '250px' }} />
                                            </div>
                                            <div className="form-group p-1 d-flex align-items-center">
                                                <label htmlFor="solicitante" style={{ width: '80px' }}>Solicitante:</label>
                                                <input type="text" className="form-control" style={{ width: '250px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-end mt-3">
                <div className="col" >
                    <h4 className="text-center mb-2">Ubicación</h4>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="card fondoIntroInspeccion">
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="departamento" style={{ width: '130px' }}>Departamento :</label>
                                            <select className="form-control" id="departamento" name="departamento" style={{ width: '350px' }}>
                                                <option value="">Seleccione un departamento</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="localidad" style={{ width: '80px' }}>Localidad :</label>
                                            <input type="text" className="form-control" style={{ width: '350px' }} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="secJudicial" style={{ width: '80px' }}>Sec. Jud. :</label>
                                            <input type="text" className="form-control" style={{ width: '110px' }} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="padron" style={{ width: '60px' }}>Padron :</label>
                                            <input type="number" className="form-control" style={{ width: '60px' }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="calle" style={{ width: '130px' }}>Calle :</label>
                                            <input type="text" className="form-control" style={{ width: '350px' }} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="nro" style={{ width: '80px' }}>Nro :</label>
                                            <input type="number" className="form-control" style={{ width: '80px' }} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="unidad" style={{ width: '80px' }}>Unidad :</label>
                                            <input type="number" className="form-control" style={{ width: '80px' }} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="piso" style={{ width: '80px' }}>Piso :</label>
                                            <input type="number" className="form-control" style={{ width: '80px' }} />
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check p-1 d-flex align-items-center">
                                            <label htmlFor="garage" className="form-check-label" style={{ width: '90px' }}>Garage :</label>
                                            <input type="checkbox" className="form-check-input" id="garage" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="entreCalles" style={{ width: '130px' }}>Entre las Calle :</label>
                                            <input type="text" className="form-control" style={{ width: '450px' }} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group p-1 d-flex align-items-center">
                                            <label htmlFor="esquina" style={{ width: '130px' }}>Esquina :</label>
                                            <input type="text" className="form-control" style={{ width: '450px' }} />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row justify-content-end mt-3">
                <div className="col" >
                    <h4 className="text-center mb-2">Zona</h4>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-md-11">
                    <div className="card fondoIntroInspeccion">
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Clasificación</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="urbano" className="form-check-label" style={{ width: '110px' }}>Urbano :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="suburbano" className="form-check-label" style={{ width: '110px' }}>Suburbano :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="suburbano" className="form-check-label" style={{ width: '110px' }}>Suburbano :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="rural" className="form-check-label" style={{ width: '110px' }}>Rural :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Características</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="residencial" className="form-check-label" style={{ width: '110px' }}>Residencial :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="comercial" className="form-check-label" style={{ width: '110px' }}>Comercial :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="industrial" className="form-check-label" style={{ width: '110px' }}>Industrial :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="otros" className="form-check-label" style={{ width: '110px' }}>Otros :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Edificación</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="suntuosa" className="form-check-label" style={{ width: '110px' }}>Suntuosa :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="muyBbuena" className="form-check-label" style={{ width: '110px' }}>Muy buena :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="buena" className="form-check-label" style={{ width: '110px' }}>Buena :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="económica" className="form-check-label" style={{ width: '110px' }}>Económica :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="modesta" className="form-check-label" style={{ width: '110px' }}>Modesta :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Densidad</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="compacta" className="form-check-label" style={{ width: '110px' }}>Compacta :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="media" className="form-check-label" style={{ width: '110px' }}>Media :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="pocoDensa" className="form-check-label" style={{ width: '110px' }}>Poco Densa :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="rala" className="form-check-label" style={{ width: '110px' }}>Rala :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Pavimento</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="hormBitu" className="form-check-label" style={{ width: '110px' }}>Horm./Bitu. :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="balastro" className="form-check-label" style={{ width: '110px' }}>Balastro :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Servicios</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="ose" className="form-check-label" style={{ width: '110px' }}>OSE :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="pozo" className="form-check-label" style={{ width: '110px' }}>Pozo :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="colector" className="form-check-label" style={{ width: '110px' }}>Colector :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="ute" className="form-check-label" style={{ width: '110px' }}>UTE :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="antel" className="form-check-label" style={{ width: '110px' }}>ANTEL :</label>
                                                <input type="checkbox" className="form-check-input" id="garage" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="botonLogin mt-3">
                <button type="submit" className="btn btn-primary">Crear Inspección</button>
            </div>



        </div>



    );
}


export default Inspeccion;