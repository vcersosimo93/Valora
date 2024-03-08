import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Si necesitas hacer llamadas a API
import "../css/OrderModule.css";
import OrderService from '../api/OrderService';


function Order() {

    const defaultTasador = "default value";

    const [tasadores, setTasadores] = useState([]);

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

    const [bancos, setBancos] = useState([]);

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
                        <input type="date" class="form-control" id="fechaInspeccion" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="horaInspeccion">Hora : </label>
                        <input type="time" class="form-control" id="horaInspeccion" placeholder="name@example.com" />
                    </div>
                </form>
            </div>

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
            

        </div>
    );

}




export default Order;