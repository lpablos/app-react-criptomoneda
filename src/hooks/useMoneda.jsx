import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useMoneda = (label, stateInicial, opciones) => {

    const [state, actualizarState] = useState('')

    const Seleccionar = () => (
        <Fragment>
            <Label htmlFor="moneda">{label}</Label>
            <Select 
                name="" 
                id=""
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">Selecione</option>
                {opciones.map(opt =>(
                    <option key={opt.codigo} value={opt.codigo}>{opt.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )
    // Retorna state, interface y fun que modica el state
    return [Seleccionar, state]
}

export default useMoneda