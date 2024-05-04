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

            <div className="row justify-content-end mt-3">
                <div className="col" >
                    <h4 className="text-center mb-2">Predio</h4>
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
                                            <h6 className="text-center mb-4">Topografia</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="alto" className="form-check-label" style={{ width: '90px' }}>Alto :</label>
                                                <input type="checkbox" className="form-check-input" id="alto" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="aNivel" className="form-check-label" style={{ width: '90px' }}>A Nivel :</label>
                                                <input type="checkbox" className="form-check-input" id="aNivel" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="bajo" className="form-check-label" style={{ width: '90px' }}>Bajo :</label>
                                                <input type="checkbox" className="form-check-input" id="bajo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Forma</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="irregular" className="form-check-label" style={{ width: '100px' }}>Irregular :</label>
                                                <input type="checkbox" className="form-check-input" id="irregular" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="regular" className="form-check-label" style={{ width: '100px' }}>Regular :</label>
                                                <input type="checkbox" className="form-check-input" id="regular" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Ensanche</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="siEnsanche" className="form-check-label" style={{ width: '60px' }}>Si :</label>
                                                <input type="checkbox" className="form-check-input" id="siEnsanche" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="noEnsanche" className="form-check-label" style={{ width: '60px' }}>No :</label>
                                                <input type="checkbox" className="form-check-input" id="noEnsanche" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Retiro</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="siRetiro" className="form-check-label" style={{ width: '60px' }}>Si :</label>
                                                <input type="checkbox" className="form-check-input" id="siRetiro" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="noRetiro" className="form-check-label" style={{ width: '60px' }}>No :</label>
                                                <input type="checkbox" className="form-check-input" id="noRetiro" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Orientación</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <input type="text" className="form-control" id="orientacion" style={{ width: '80px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Deslinde</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="frente" className="form-check-label" style={{ width: '60px' }}>Frente :</label>
                                                <input type="number" className="form-control" id="frente" style={{ width: '120px' }} />
                                                <span style={{ marginLeft: '5px', width: '30px' }}>m</span>
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="fondo" className="form-check-label" style={{ width: '60px' }}>Fondo :</label>
                                                <input type="number" className="form-control" id="fondo" style={{ width: '120px' }} />
                                                <span style={{ marginLeft: '5px', width: '30px' }}>m</span>
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="supTotal" className="form-check-label" style={{ width: '60px' }}>S.Total :</label>
                                                <input type="number" className="form-control" id="supTotal" style={{ width: '120px' }} />
                                                <span style={{ marginLeft: '5px', width: '30px' }}>m²</span>
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
                    <h4 className="text-center mb-2">Cerram. Instalaciones</h4>
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
                                            <h6 className="text-center mb-4">Carpinteria</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="comun" className="form-check-label" style={{ width: '90px' }}>Común :</label>
                                                <input type="checkbox" className="form-check-input" id="comun" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="aluminio" className="form-check-label" style={{ width: '90px' }}>Aluminio :</label>
                                                <input type="checkbox" className="form-check-input" id="aluminio" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="pvc" className="form-check-label" style={{ width: '90px' }}>P.V.C. :</label>
                                                <input type="checkbox" className="form-check-input" id="pvc" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="madera" className="form-check-label" style={{ width: '90px' }}>Madera :</label>
                                                <input type="checkbox" className="form-check-input" id="madera" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="otrosCarpinteria" className="form-check-label" style={{ width: '90px' }}>Otros :</label>
                                                <input type="checkbox" className="form-check-input" id="otrosCarpinteria" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Cerramientos</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="cortinas" className="form-check-label" style={{ width: '100px' }}>Cortinas :</label>
                                                <input type="checkbox" className="form-check-input" id="cortinas" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="postigos" className="form-check-label" style={{ width: '100px' }}>Postigos :</label>
                                                <input type="checkbox" className="form-check-input" id="postigos" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="celosias" className="form-check-label" style={{ width: '100px' }}>Celosías :</label>
                                                <input type="checkbox" className="form-check-input" id="celosias" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="rejas" className="form-check-label" style={{ width: '100px' }}>Rejas :</label>
                                                <input type="checkbox" className="form-check-input" id="rejas" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="otrosCerramientos" className="form-check-label" style={{ width: '100px' }}>Otros :</label>
                                                <input type="checkbox" className="form-check-input" id="otrosCerramientos" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Agua</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="banoCal" className="form-check-label" style={{ width: '110px' }}>Baño Cal. :</label>
                                                <input type="checkbox" className="form-check-input" id="banoCal" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="banoFria" className="form-check-label" style={{ width: '110px' }}>Baño Fría. :</label>
                                                <input type="checkbox" className="form-check-input" id="banoFria" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="cocinaCal" className="form-check-label" style={{ width: '110px' }}>Cocina Cal. :</label>
                                                <input type="checkbox" className="form-check-input" id="cocinaCal" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="cocinaFria" className="form-check-label" style={{ width: '110px' }}>Cocina Fría. :</label>
                                                <input type="checkbox" className="form-check-input" id="cocinaFria" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Elect.</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="embutida" className="form-check-label" style={{ width: '110px' }}>Embutida :</label>
                                                <input type="checkbox" className="form-check-input" id="embutida" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="exterior" className="form-check-label" style={{ width: '110px' }}>Exterior :</label>
                                                <input type="checkbox" className="form-check-input" id="exterior" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="mixta" className="form-check-label" style={{ width: '110px' }}>Mixta :</label>
                                                <input type="checkbox" className="form-check-input" id="mixta" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="instGas" className="form-check-label" style={{ width: '110px' }}>Inst. Gas :</label>
                                                <input type="checkbox" className="form-check-input" id="instGas" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Sanit</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="colector" className="form-check-label" style={{ width: '110px' }}>Colector :</label>
                                                <input type="checkbox" className="form-check-input" id="colector" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="camSeptica" className="form-check-label" style={{ width: '110px' }}>Cám.Séptica :</label>
                                                <input type="checkbox" className="form-check-input" id="camSeptica" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="pozoNegro" className="form-check-label" style={{ width: '110px' }}>Pozo Negro :</label>
                                                <input type="checkbox" className="form-check-input" id="pozoNegro" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Term</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="losaRad" className="form-check-label" style={{ width: '110px' }}>Losa Rad. :</label>
                                                <input type="checkbox" className="form-check-input" id="losaRad" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="radiadores" className="form-check-label" style={{ width: '110px' }}>Radiadores :</label>
                                                <input type="checkbox" className="form-check-input" id="radiadores" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="panelElect" className="form-check-label" style={{ width: '110px' }}>Panel Eléct. :</label>
                                                <input type="checkbox" className="form-check-input" id="panelElect" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="aireAcond" className="form-check-label" style={{ width: '110px' }}>Aire Acond. :</label>
                                                <input type="checkbox" className="form-check-input" id="aireAcond" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="otrosIntTerm" className="form-check-label" style={{ width: '110px' }}>Otros :</label>
                                                <input type="checkbox" className="form-check-input" id="otrosIntTerm" />
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
                    <h4 className="text-center mb-2">Consideraciones Generales</h4>
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
                                            <h6 className="text-center mb-4">Categoria</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="modesta" className="form-check-label" style={{ width: '90px' }}>modesta :</label>
                                                <input type="checkbox" className="form-check-input" id="modesta" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="economica" className="form-check-label" style={{ width: '90px' }}>Económica :</label>
                                                <input type="checkbox" className="form-check-input" id="economica" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="buena" className="form-check-label" style={{ width: '90px' }}>Buena :</label>
                                                <input type="checkbox" className="form-check-input" id="buena" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="confortable" className="form-check-label" style={{ width: '90px' }}>Confortable :</label>
                                                <input type="checkbox" className="form-check-input" id="confortable" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="muyConfort" className="form-check-label" style={{ width: '90px' }}>Muy Confort. :</label>
                                                <input type="checkbox" className="form-check-input" id="muyConfort" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Conservacion</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="malo" className="form-check-label" style={{ width: '100px' }}>Malo :</label>
                                                <input type="checkbox" className="form-check-input" id="malo" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="regular" className="form-check-label" style={{ width: '100px' }}>Regular :</label>
                                                <input type="checkbox" className="form-check-input" id="regular" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="celosias" className="form-check-label" style={{ width: '100px' }}>Celosías :</label>
                                                <input type="checkbox" className="form-check-input" id="celosias" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="rejas" className="form-check-label" style={{ width: '100px' }}>Rejas :</label>
                                                <input type="checkbox" className="form-check-input" id="rejas" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="otrosCerramientos" className="form-check-label" style={{ width: '100px' }}>Otros :</label>
                                                <input type="checkbox" className="form-check-input" id="otrosCerramientos" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Agua</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="banoCal" className="form-check-label" style={{ width: '110px' }}>Baño Cal. :</label>
                                                <input type="checkbox" className="form-check-input" id="banoCal" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="banoFria" className="form-check-label" style={{ width: '110px' }}>Baño Fría. :</label>
                                                <input type="checkbox" className="form-check-input" id="banoFria" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="cocinaCal" className="form-check-label" style={{ width: '110px' }}>Cocina Cal. :</label>
                                                <input type="checkbox" className="form-check-input" id="cocinaCal" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="cocinaFria" className="form-check-label" style={{ width: '110px' }}>Cocina Fría. :</label>
                                                <input type="checkbox" className="form-check-input" id="cocinaFria" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Elect.</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="embutida" className="form-check-label" style={{ width: '110px' }}>Embutida :</label>
                                                <input type="checkbox" className="form-check-input" id="embutida" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="exterior" className="form-check-label" style={{ width: '110px' }}>Exterior :</label>
                                                <input type="checkbox" className="form-check-input" id="exterior" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="mixta" className="form-check-label" style={{ width: '110px' }}>Mixta :</label>
                                                <input type="checkbox" className="form-check-input" id="mixta" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="instGas" className="form-check-label" style={{ width: '110px' }}>Inst. Gas :</label>
                                                <input type="checkbox" className="form-check-input" id="instGas" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Sanit</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="colector" className="form-check-label" style={{ width: '110px' }}>Colector :</label>
                                                <input type="checkbox" className="form-check-input" id="colector" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="camSeptica" className="form-check-label" style={{ width: '110px' }}>Cám.Séptica :</label>
                                                <input type="checkbox" className="form-check-input" id="camSeptica" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="pozoNegro" className="form-check-label" style={{ width: '110px' }}>Pozo Negro :</label>
                                                <input type="checkbox" className="form-check-input" id="pozoNegro" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="col-12">
                                            <h6 className="text-center mb-4">Inst. Term</h6>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="losaRad" className="form-check-label" style={{ width: '110px' }}>Losa Rad. :</label>
                                                <input type="checkbox" className="form-check-input" id="losaRad" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="radiadores" className="form-check-label" style={{ width: '110px' }}>Radiadores :</label>
                                                <input type="checkbox" className="form-check-input" id="radiadores" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="panelElect" className="form-check-label" style={{ width: '110px' }}>Panel Eléct. :</label>
                                                <input type="checkbox" className="form-check-input" id="panelElect" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="aireAcond" className="form-check-label" style={{ width: '110px' }}>Aire Acond. :</label>
                                                <input type="checkbox" className="form-check-input" id="aireAcond" />
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check p-1 d-flex align-items-center">
                                                <label htmlFor="otrosIntTerm" className="form-check-label" style={{ width: '110px' }}>Otros :</label>
                                                <input type="checkbox" className="form-check-input" id="otrosIntTerm" />
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