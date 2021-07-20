import React, { Fragment, useState } from 'react'

const useMoneda = () => {

    const [state, actualizarState] = useState('')

    const Seleccionar = () => (
        <Fragment>
            <label htmlFor="moneda">Moneda</label>
            <select name="" id="">
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    )
    // Retorna state, interface y fun que modica el state
    return [Seleccionar, state, actualizarState]
}

export default useMoneda