import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Formulario = () => {
    // Arreglo de monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    // Listado de criptoMonedas
    const [criptomonedas, setCriptomonedas] = useState([])
    // Ejecutar llamada a la app
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            setCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])
    // Utilizacion del useMoneda
    const [SelectMonedas] = useMoneda('Elige tu moneda','', MONEDAS)
    // Utilizacion del useCriptomoneda
    const [SelecionarCripto] = useCriptomoneda('Elige tu Criptomoneda', '', criptomonedas)
    

    return (
        <form>
            
            <SelectMonedas/>
            <SelecionarCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    )
}

export default Formulario
