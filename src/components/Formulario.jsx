import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Error from './Error'
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

const Formulario = ({setMoneda, setCriptomoneda}) => {
    // Arreglo de monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]
    // Error en el formulario
    const [error, setError] = useState(false)

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
    const [SelectMonedas, moneda] = useMoneda('Elige tu moneda','', MONEDAS)
    // Utilizacion del useCriptomoneda
    const [SelecionarCripto, cripto] = useCriptomoneda('Elige tu Criptomoneda', '', criptomonedas)
    
    const cotizarMoneda = e =>{
        e.preventDefault()
        if(moneda === '' || cripto === ''){
            setError(true)
            return
        }
        setError(false)
        setMoneda(moneda)
        setCriptomoneda(cripto)
        
    }

    return (
        <form
            onSubmit={cotizarMoneda}>
            {
                error ? <Error mensaje="Todos los campos son obligatorios"/>: null
            }
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
