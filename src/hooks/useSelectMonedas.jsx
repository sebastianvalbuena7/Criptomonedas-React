import { useState } from "react"
import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
`

export const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={() => setState(event.target.value)}>
                <option value="">Selecciona</option>
                {opciones.map(option => <option value={option.id} key={option.id}>{option.nombre}</option>)}
            </Select>
        </>
    )

    return [state, SelectMonedas]
}