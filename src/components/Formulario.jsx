import { useState, useEffect } from "react"
import styled from '@emotion/styled'
import { useSelectMonedas } from "../hooks/useSelectMonedas"
import { Error } from "./Error"
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-weight: 700;
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: 0.3s all ease;

    &:hover {
        background-color: #7a7df3;
        cursor: pointer;
    }
`

export const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const arrayCriptos = resultado.Data.map(cripto => {
                const objetoCripto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objetoCripto
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        if (moneda === "" || criptoMoneda === "") {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptoMoneda
        })
    }

    return (
        <>
            {error && <Error mensaje="Todos los campos son obligatorios"/>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptoMonedas />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}