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
        nombreOrdenTasacion: '', // Nombre de la orden de tasación
        fechaInspeccion: '', // Fecha de inspección
        horaInspeccion: '', // Hora de inspección

        // Sección de orden de tasación
        fechaCreacion: '', // Fecha de la orden
        titular: '', // Titular de la orden
        telefono: '', // Teléfono
        contacto: '', // Contacto
        telefonoContacto: '', // Teléfono de contacto
        calle: '', // Calle
        numeroPuerta: '', // Número de puerta
        unidad: '', // Unidad
        esquina: '', // Esquina
        localidad: '', // Localidad
        padron: '', // Padrón

        // Campos adicionales y checkboxes
        tasacion: false, // Checkbox para tasación
        retasacion: false, // Checkbox para retasación
        enInspeccion: false, // Checkbox para estado de inspección
        enEstudio: false, // Checkbox para estado de estudio
        fechaAntecedente: '', // Fecha de antecedentes
        oficialBanco: '', // Oficial de banco
        sucursal: '', // Sucursal
        observaciones: '', // Observaciones
    });

    const selectedTasadorId = info.tasadorInspeccion ? info.tasadorInspeccion.id : '';
    const selectedTasadorAntecedenteId = info.tasadorAntecedente ? info.tasadorAntecedente.id : '';
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


        else if (name === 'tasadorAntecedente') {
            // Verificar si se selecciona el mismo tasador en ambos selectores
            if (value === info.tasadorInspeccion?.id) {
                // Manejar caso especial si se selecciona el mismo tasador en ambos selectores
                // Por ejemplo, puedes actualizar el estado de `info` solo para el selector de antecedentes
                setInfo(prevInfo => ({
                    ...prevInfo,
                    tasadorAntecedente: value,
                }));
            } else {
                // Continuar con el manejo normal de la selección del tasador
                const fetchTasador = async () => {
                    try {
                        const selectedTasadorAntecedentes = await OrderService.getTasadorById(value);
                        setInfo(prevInfo => ({
                            ...prevInfo,
                            tasadorAntecedente: selectedTasadorAntecedentes
                        }));
                    } catch (error) {
                        // Manejar errores
                    }
                };
                fetchTasador();
            }
        }


        // if (name === 'tasadorAntecedente') {

        //     const fetchTasadorAntecedente = async () => {
        //         try {
        //             // Obtener el objeto tasador completo por su ID
        //             const selectedTasadorAntecedentes = await OrderService.getTasadorById(value);
        //             // Asignar el objeto tasador completo al estado
        //             setInfo(prevInfo => ({
        //                 ...prevInfo,
        //                 tasadorAntecedente: selectedTasadorAntecedentes
        //             }));
        //         } catch (error) {
        //             // Manejar errores
        //         }
        //     };

        //     // Llamar a la función fetchTasador
        //     fetchTasadorAntecedente();
        // }

        

        else if (name === 'banco') {
            // Definir una función asincrónica dentro de handleInputChange
            const fetchBanco = async () => {
                try {
                    // Obtener el objeto tasador completo por su ID
                    const selecteBanco = await OrderService.getBancoById(value);
                    // Asignar el objeto tasador completo al estado
                    setInfo(prevInfo => ({
                        ...prevInfo,
                        banco: selecteBanco
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
            console.log('nombreOrdenTasacion:', info.nombreOrdenTasacion);
            console.log('tasadorInspeccion:', info.tasadorInspeccion);
            console.log('fechaInspeccion:', info.fechaInspeccion);
            console.log('horaInspeccion:', info.horaInspeccion);
            console.log('fechaCreacion:', info.fechaCreacion);
            console.log('banco:', info.banco);
            console.log('titular:', info.titular);
            console.log('telefono:', info.telefono);
            console.log('contacto:', info.contacto);
            console.log('telefonoContacto:', info.telefonoContacto);
            console.log('calle:', info.calle);
            console.log('numeroPuerta:', info.numeroPuerta);
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
            console.log('tasadorAntecedente:', info.tasadorAntecedente);
            console.log('oficialBanco:', info.oficialBanco);
            console.log('sucursal:', info.sucursal);
            console.log('observaciones:', info.observaciones);

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
            <h2>Creación Orden</h2>
            <form onSubmit={submitHandler}>
                <div className="flex-container-inspeccion">
                    <div className="inspeccion">
                        <h4>Inspección</h4>
                        <div className="form-group">
                            <label htmlFor="tasadorInspeccion">Tasador :</label>
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
                            <label htmlFor="nombreOrdenTasacion">Nombre :</label>
                            <input type="text" className="form-control" id="nombreOrdenTasacion" name="nombreOrdenTasacion" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono :</label>
                            <input type="number" className="form-control" id="telefono" name="telefono" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contacto">Contacto :</label>
                            <input type="text" className="form-control" id="contacto" name="contacto" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefonoContacto">Teléfono :</label>
                            <input type="number" className="form-control" id="telefonoContacto" name="telefonoContacto" onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="flex-container-ubicacion-inmueble">
                        <h4>Ubicación del Inmueble</h4>
                        <div className="form-group">
                            <label htmlFor="calle">Calle :</label>
                            <input type="text" className="form-control" id="calle" name="calle" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numeroPuerta">Nro Puerta :</label>
                            <input type="number" className="form-control" id="numeroPuerta" name="numeroPuerta" onChange={handleInputChange} />
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
                                            <label htmlFor="fechaAntecedente">Fecha</label>
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" id="fechaAntecedente" name="fechaAntecedente" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="container">
                                    <div className="row">
                                        <div className="col label-antecedentes">
                                            <label htmlFor="tasadorAntecedente">tasadorInspeccion :</label>
                                        </div>
                                        <div className="col">
                                            <select
                                                className="form-control"
                                                id="tasadorAntecedente"
                                                name="tasadorAntecedente"
                                                value={selectedTasadorAntecedenteId}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Seleccione un tasador</option>
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
                </div>

                <div className="observacionesPre">
                    <div className="flex-container-pre-observaciones">
                        <div className="row">
                            <div className="col">
                                <div className="container">
                                    <div className="row">
                                        <div className="col label-pre-observaciones">
                                            <label htmlFor="oficialBanco">Oficial del Banco</label>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" id="oficialBanco" name="oficialBanco" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="container">
                                    <div className="row">
                                        <div className="col label-pre-observaciones">
                                            <label htmlFor="sucursal">Sucursal</label>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" id="sucursal" name="sucursal" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="observaciones" style={{ height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="form-outline-observaciones">
                            <h4>Observaciones</h4>
                            <textarea className="form-control" id="observaciones" name="observaciones" rows="2" onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>

                <div className="botonCrearOrden">
                    <button type="submit" className="btn btn-primary button">Crear Orden</button>
                </div>
            </form>
        </div>
    );

}




export default Order;