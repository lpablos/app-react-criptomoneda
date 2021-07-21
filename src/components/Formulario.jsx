import React from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'

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

    // Utilizacion del useMoneda
    const [SelectMonedas] = useMoneda('Elige tu moneda','', MONEDAS)
    // Utilizacion del useCriptomoneda
    const [SelecionarCripto] = useCriptomoneda('Elige tu Criptomoneda', '')

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
