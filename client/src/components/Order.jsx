import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Si necesitas hacer llamadas a API
import "../css/OrderModule.css";
import OrderService from '../api/OrderService';


function Order() {

    const defaultTasador = "default value";

    const [tasadores, setTasadores] = useState([]);
    const [bancos, setBancos] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {
        const fetchTasadores = async () => {
            try {
                const data = await OrderService.getTasadores();
                setTasadores(data);
            } catch (error) {
                // Manejar errores
            }
        };

        fetchTasadores();
    }, []);



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
    }, []);


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
    }, []);

    return (
        <div className="order">
            <h2>Creación Orden</h2>
            <div className="flex-container-inspeccion">
                <form className='inspeccion'>
                    <h4>Inspección</h4>
                    <div class="form-group">

                        <label for="tasador">Tasador : </label>
                        <select class="form-control" name="tasador" defaultValue={defaultTasador}>
                            {tasadores.map((tasador) => (
                                <option key={tasador.id} value={tasador.id}>
                                    {tasador.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fechaInspeccion">Fecha : </label>
                        <input type="date" class="form-control" id="fechaInspeccion" />
                    </div>
                    <div class="form-group">
                        <label for="horaInspeccion">Hora : </label>
                        <input type="time" class="form-control" id="horaInspeccion" placeholder="name@example.com" />
                    </div>
                </form>
            </div>

            <div className="ordenUbicacion">
                <div className="flex-container-orden-tasacion">
                    <form className='orden-tasacion'>
                        <h4>Orden de Tasación</h4>
                        <div class="form-group">
                            <label for="fechaOrden">Fecha : </label>
                            <input type="date" class="form-control" id="fechaOrden" placeholder="name@example.com" />
                        </div>
                        <div class="form-group">

                            <label for="banco">Banco : </label>
                            <select class="form-control" name="banco" defaultValue={defaultTasador}>
                                {bancos.map((banco) => (
                                    <option key={banco.id} value={banco.id}>
                                        {banco.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="titular">Titular : </label>
                            <input type="text" class="form-control" id="titular" />
                        </div>
                        <div class="form-group">
                            <label for="nombre">Nombre : </label>
                            <input type="text" class="form-control" id="nombre" />
                        </div>
                        <div class="form-group">
                            <label for="telefono">Telefono : </label>
                            <input type="number" class="form-control" id="telefono" />
                        </div>

                        <div class="form-group">
                            <label for="contacto">Contacto : </label>
                            <input type="text" class="form-control" id="contacto" />
                        </div>
                        <div class="form-group">
                            <label for="telefonoContacto">Telefono : </label>
                            <input type="number" class="form-control" id="telefonoContacto" />
                        </div>

                    </form>
                </div>


                <div className="flex-container-ubicacion-inmueble">
                    <form className='ubicacion-inmueble'>
                        <h4>Ubicación del Inmueble</h4>
                        <div class="form-group">
                            <label for="calle">Calle : </label>
                            <input type="text" class="form-control" id="calle" />
                        </div>
                        <div class="form-group">
                            <label for="numeroPuerta">Nro Puerta : </label>
                            <input type="number" class="form-control" id="numeroPuerta" />
                        </div>
                        <div class="form-group">
                            <label for="unidad">Unidad : </label>
                            <input type="number" class="form-control" id="unidad" />
                        </div>
                        <div class="form-group">
                            <label for="esquina">Entre/Esquina : </label>
                            <input type="text" class="form-control" id="esquina" />
                        </div>
                        <div class="form-group">
                            <label for="localidad">Localidad : </label>
                            <input type="text" class="form-control" id="localidad" />
                        </div>
                        <div class="form-group">

                            <label for="departamento">Departamento : </label>
                            <select class="form-control" name="departamento" defaultValue={defaultTasador}>
                                {departamentos.map((departamento) => (
                                    <option key={departamento.id} value={departamento.id}>
                                        {departamento.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="padron">Padrón : </label>
                            <input type="number" class="form-control" id="padron" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="tipoTrabajoRecaudoAntecedente">
                <div class="flex-container-tipo-trabajo">
                    <h4>Tipo de Trabajo</h4>
                    <div class="row">
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-tasacion">
                                        <label for="tasacion">Tasación</label>
                                    </div>
                                    <div class="col">
                                        <input type="checkbox" class="form-check-input" id="tasacion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-tasacion">
                                        <label for="tasacion">Retasación</label>
                                    </div>
                                    <div class="col">
                                        <input type="checkbox" class="form-check-input" id="retasacion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex-container-recaudos">
                    <h4>Recaudos</h4>
                    <div class="row">
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-inspeccion">
                                        <label for="enInspeccion">En Inspección</label>
                                    </div>
                                    <div class="col">
                                        <input type="checkbox" class="form-check-input" id="enInspeccion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-inspeccion">
                                        <label for="estudio">En Estudio</label>
                                    </div>
                                    <div class="col">
                                        <input type="checkbox" class="form-check-input" id="enEstudio" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex-container-antecedentes">
                    <h4>Antecedentes</h4>
                    <div class="row">
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-antecedentes">
                                        <label for="antecedentesFecha">Fecha</label>
                                    </div>
                                    <div class="col">
                                        <input type="date" class="form-control" id="antecedentesFecha" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-antecedentes">
                                        <label for="antecedentesTasador">Tasador : </label>
                                    </div>
                                    <div class="col">
                                        <select class="form-control" name="tasador" defaultValue={defaultTasador}>
                                            {tasadores.map((tasador) => (
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
                <div class="flex-container-pre-observaciones">
                    <div class="row">
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-pre-observaciones">
                                        <label for="oficialBanco">Oficial del Banco</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" id="oficialBanco" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col label-pre-observaciones">
                                        <label for="sucursal">Sucursal</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" id="sucursal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="observaciones" style={{ height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="form-outline-observaciones">
                        <h4>Observaciones</h4>
                        <textarea className="form-control" id="observaciones" rows="2"></textarea>
                    </div>
                </div>
                
            </div>



        </div>
    );

}




export default Order;