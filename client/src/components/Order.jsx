import React, { useState, useEffect, useRef } from 'react';
import "../css/OrderModule.css";
import OrderService from '../api/OrderService';


function Order() {


    const defaulttasadorInspeccion = "default value";

    const [tasadorInspecciones, settasadorInspecciones] = useState([]);
    const [tasadorAntecedentes, setTasadorAntecedentes] = useState([]);
    const [bancos, setBancos] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [loading, setLoading] = useState(false);

    //const [tasadorInspeccion, settasadorInspeccion] = useState();

    const [info, setInfo] = useState({
        // Datos generales de la orden
        nombreContacto: '', // Nombre de la orden de tasación
        fechaInspeccion: '', // Fecha de inspección
        horaInspeccion: '', // Hora de inspección

        // Sección de orden de tasación
        fechaCreacion: '', // Fecha de la orden
        titular: '', // Titular de la orden
        telefonoSolicitante: '', // Teléfono
        nombreSolicitante: '',
        telefonoContacto: '', // Teléfono de contacto
        calle: '', // Calle
        nroPuerta: '', // Número de puerta
        unidad: '', // Unidad
        esquina: '', // Esquina
        localidad: '', // Localidad
        tasadorAntecedenteId: '', // Asegúrate de definir tasadorAntecedenteId
        padron: '', // Padrón

        // Campos adicionales y checkboxes
        tasacion: false, // Checkbox para tasación
        retasacion: false, // Checkbox para retasación
        enInspeccion: false, // Checkbox para estado de inspección
        enEstudio: false, // Checkbox para estado de estudio
        fechaAntecedente: '', // Fecha de antecedentes
        oficialBanco: '', // Oficial de banco
        sucursal: '', // Sucursal
        observacion: '', // Observaciones
    });

    const selectedTasadorId = info.tasadorInspeccion ? info.tasadorInspeccion.id : '';
    const selectedTasadorAntecedenteId = info.tasadorAntecedenteId ? info.tasadorAntecedenteId : '';
    const selectedBancoId = info.banco ? info.banco.id : '';
    const selectedDepartamentoId = info.departamento ? info.departamento.id : '';

    useEffect(() => {
        const fetchtasadorInspecciones = async () => {
            try {
                const data = await OrderService.getTasadores();
                settasadorInspecciones(data);
            } catch (error) {
                // Manejar errores
            }
        };

        fetchtasadorInspecciones();
    }, [tasadorInspecciones]);


    useEffect(() => {
        const fetchTasadorAntecedentes = async () => {
            try {
                const data = await OrderService.getTasadores();
                setTasadorAntecedentes(data);
            } catch (error) {
                // Manejar errores
            }
        };

        fetchTasadorAntecedentes();
    }, [tasadorAntecedentes]);


    useEffect(() => {
        const fetchBancos = async () => {
            try {
                const data = await OrderService.getBancos();
                setBancos(data);
            } catch (error) {
                // Manejar errores
            }
        };

        fetchBancos();
    }, [bancos]);


    useEffect(() => {
        const fetchDepartamentos = async () => {
            try {
                const data = await OrderService.getDepartamentos();
                setDepartamentos(data);
            } catch (error) {
                // Manejar errores
            }
        };

        fetchDepartamentos();
    }, [departamentos]);


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'tasadorInspeccion') {
            // Definir una función asincrónica dentro de handleInputChange
            const fetchTasador = async () => {
                try {
                    // Obtener el objeto tasador completo por su ID
                    const selectedTasador = await OrderService.getTasadorById(value);
                    // Asignar el objeto tasador completo al estado
                    setInfo(prevInfo => ({
                        ...prevInfo,
                        tasadorInspeccion: selectedTasador
                    }));
                } catch (error) {
                    // Manejar errores
                }
            };

            // Llamar a la función fetchTasador
            fetchTasador();
        }

        else if (name === 'tasadorAntecedenteId') {
            // Asignar directamente el ID al estado

            setInfo(prevInfo => ({
                ...prevInfo,
                tasadorAntecedenteId: value
            }));
        }



        else if (name === 'banco') {
            // Definir una función asincrónica dentro de handleInputChange
            const fetchBanco = async () => {
                try {
                    // Obtener el objeto tasador completo por su ID
                    const selectedBanco = await OrderService.getBancoById(value);
                    console.log("selectedBancoId", selectedBanco.id);
                    // Asignar el objeto tasador completo al estado
                    setInfo(prevInfo => ({
                        ...prevInfo,
                        banco: selectedBanco
                    }));
                } catch (error) {
                    // Manejar errores
                }
            };

            // Llamar a la función fetchTasador
            fetchBanco();
        }



        // Si el cambio proviene del select de banco, asignar directamente el valor (id) seleccionado
        else if (name === 'departamento') {
            // Definir una función asincrónica dentro de handleInputChange
            const fetchDepartamento = async () => {
                try {
                    const selectDepartamento = await OrderService.getDepartamentoById(value);
                    // Asignar el objeto tasador completo al estado
                    setInfo(prevInfo => ({
                        ...prevInfo,
                        departamento: selectDepartamento
                    }));
                } catch (error) {
                    // Manejar errores
                }
            };

            // Llamar a la función fetchTasador
            fetchDepartamento();
        }

        else if (name === 'fechaAntecedente') {
            // Formatear la fecha para incluir la hora (00:00:00)
            const fechaFormateada = new Date(value + 'T00:00:00');
            setInfo(prevInfo => ({
                ...prevInfo,
                [name]: fechaFormateada.toISOString() // Enviar la fecha formateada al backend
            }));
        }
        else {
            // Para otros campos, seguir el enfoque actual
            setInfo(prevInfo => ({
                ...prevInfo,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log("info", info);
            // Logs para cada campo de info
            console.log('nombreContacto:', info.nombreContacto);
            console.log('tasadorInspeccion:', info.tasadorInspeccion);
            console.log('fechaInspeccion:', info.fechaInspeccion);
            console.log('horaInspeccion:', info.horaInspeccion);
            console.log('fechaCreacion:', info.fechaCreacion);
            console.log('banco:', info.banco);
            console.log('titular:', info.titular);
            console.log('telefonoSolicitante:', info.telefonoSolicitante);
            console.log('nombreSolicitante:', info.nombreSolicitante);
            console.log('telefonoContacto:', info.telefonoContacto);
            console.log('calle:', info.calle);
            console.log('nroPuerta:', info.nroPuerta);
            console.log('unidad:', info.unidad);
            console.log('esquina:', info.esquina);
            console.log('localidad:', info.localidad);
            console.log('departamento:', info.departamento);
            console.log('padron:', info.padron);
            console.log('tasacion:', info.tasacion);
            console.log('retasacion:', info.retasacion);
            console.log('enInspeccion:', info.enInspeccion);
            console.log('enEstudio:', info.enEstudio);
            console.log('fechaAntecedente:', info.fechaAntecedente);
            console.log('tasadorAntecedenteId:', info.tasadorAntecedenteId);
            console.log('oficialBanco:', info.oficialBanco);
            console.log('sucursal:', info.sucursal);
            console.log('observacion:', info.observacion);

            const response = await OrderService.createOrden(info);
            console.log('Orden creada:', response);
            // Aquí podrías agregar lógica adicional, como redirigir al usuario a otra página o mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error al crear orden:', error);
            // Aquí podrías manejar los errores y mostrar un mensaje al usuario
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="order">
            <h2>Crear Orden</h2>
            <form onSubmit={submitHandler}>
                <div className="main-container">
                    <div className="ordenUbicacion">
                        <div className="flex-container-orden-tasacion">
                            <h4>Orden de Tasación</h4>
                            <div className="form-group">
                                <label htmlFor="fechaCreacion">Fecha :</label>
                                <input type="date" className="form-control" id="fechaCreacion" name="fechaCreacion" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="banco">Banco :</label>
                                <select
                                    className="form-control"
                                    id="banco"
                                    name="banco"
                                    value={selectedBancoId} // Configurar el valor seleccionado
                                    onChange={handleInputChange} // Manejar cambios en la selección
                                >
                                    <option value="">Seleccione un banco</option> {/* Opcional: opción predeterminada */}
                                    {bancos.map((banco) => (
                                        <option key={banco.id} value={banco.id}>
                                            {banco.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="titular">Titular :</label>
                                <input type="text" className="form-control" id="titular" name="titular" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombreContacto">Nombre :</label>
                                <input type="text" className="form-control" id="nombreContacto" name="nombreContacto" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefonoContacto">Teléfono :</label>
                                <input type="number" className="form-control" id="telefonoContacto" name="telefonoContacto" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contacto">Contacto :</label>
                                <input type="text" className="form-control" id="nombreSolicitante" name="nombreSolicitante" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefonoSolicitante">Teléfono :</label>
                                <input type="number" className="form-control" id="telefonoSolicitante" name="telefonoSolicitante" onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="flex-container-ubicacion-inmueble">
                            <h4>Ubicación del Inmueble</h4>
                            <div className="form-group">
                                <label htmlFor="calle">Calle :</label>
                                <input type="text" className="form-control" id="calle" name="calle" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nroPuerta">Nro Puerta :</label>
                                <input type="number" className="form-control" id="nroPuerta" name="nroPuerta" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="unidad">Unidad :</label>
                                <input type="number" className="form-control" id="unidad" name="unidad" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="esquina">Entre/Esquina :</label>
                                <input type="text" className="form-control" id="esquina" name="esquina" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="localidad">Localidad :</label>
                                <input type="text" className="form-control" id="localidad" name="localidad" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="departamento">Departamento :</label>
                                <select
                                    className="form-control"
                                    id="departamento"
                                    name="departamento"
                                    value={selectedDepartamentoId} // Configurar el valor seleccionado
                                    onChange={handleInputChange} // Manejar cambios en la selección
                                >
                                    <option value="">Seleccione un departamento</option> {/* Opcional: opción predeterminada */}
                                    {departamentos.map((departamento) => (
                                        <option key={departamento.id} value={departamento.id}>
                                            {departamento.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="padron">Padrón :</label>
                                <input type="number" className="form-control" id="padron" name="padron" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>


                    <div className="inspeccionTipoTrabajo">
                        <div className="flex-container-inspeccion">
                            <div className="inspeccion">
                                <h4>Inspección</h4>
                                <div className="form-group">
                                    <label htmlFor="tasador Inspeccion">Tasador :</label>
                                    <select
                                        className="form-control"
                                        id="tasadorInspeccion"
                                        name="tasadorInspeccion"
                                        value={selectedTasadorId}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Seleccione un tasador</option>
                                        {tasadorInspecciones.map((tasador) => (
                                            <option key={tasador.id} value={tasador.id}>
                                                {tasador.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaInspeccion">Fecha :</label>
                                    <input type="date" className="form-control" id="fechaInspeccion" name="fechaInspeccion" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="horaInspeccion">Hora :</label>
                                    <input type="time" className="form-control" id="horaInspeccion" name="horaInspeccion" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div className="tipoTrabajoRecaudoAntecedente">
                            <div className="flex-container-tipo-trabajo">
                                <h4>Tipo de Trabajo</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-tasacion">
                                                    <label htmlFor="tasacion">Tasación</label>
                                                </div>
                                                <div className="col">
                                                    <input type="checkbox" className="form-check-input" id="tasacion" name="tasacion" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-tasacion">
                                                    <label htmlFor="tasacion">Retasación</label>
                                                </div>
                                                <div className="col">
                                                    <input type="checkbox" className="form-check-input" id="retasacion" name="retasacion" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-container-recaudos">
                                <h4>Recaudos</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-inspeccion">
                                                    <label htmlFor="enInspeccion">En Inspección</label>
                                                </div>
                                                <div className="col">
                                                    <input type="checkbox" className="form-check-input" id="enInspeccion" name="enInspeccion" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-inspeccion">
                                                    <label htmlFor="estudio">En Estudio</label>
                                                </div>
                                                <div className="col">
                                                    <input type="checkbox" className="form-check-input" id="enEstudio" name="enEstudio" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-container-antecedentes">
                                <h4>Antecedentes</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-antecedentes">
                                                    <label htmlFor="fechaAntecedente">Fecha :</label>
                                                </div>
                                                <div className="col">
                                                    <input type="date" className="form-control" id="fechaAntecedente" name="fechaAntecedente" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-antecedentes">
                                                    <label htmlFor="tasadorAntecedenteId">Tasador Antecedente :</label>
                                                </div>
                                                <div className="col">
                                                    <select
                                                        className="form-control"
                                                        id="tasadorAntecedenteId"
                                                        name="tasadorAntecedenteId"
                                                        value={selectedTasadorAntecedenteId}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Tasador</option>
                                                        {tasadorAntecedentes.map((tasador) => (
                                                            <option key={tasador.id} value={tasador.id}>
                                                                {tasador.nombre}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-container-pre-observaciones">
                                <h4>Oficial - Sucursal</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-pre-observaciones">
                                                    <label htmlFor="oficialBanco">Oficial del Banco :</label>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" id="oficialBanco" name="oficialBanco" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col label-pre-observaciones">
                                                    <label htmlFor="sucursal">Sucursal :</label>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" id="sucursal" name="sucursal" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>


                <div className="observacionesPre">
                    <div className="observaciones" style={{ height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="form-outline-observaciones">
                            <h4>Observaciones</h4>
                            <textarea className="form-control" id="observacion" name="observacion" rows="2" onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>

                <div className="botonOrden">
                    <button type="button" class="btn btn-primary">Crear Orden</button>
                </div>
            </form>
        </div>
    );

}




export default Order;