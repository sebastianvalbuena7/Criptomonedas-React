import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #ca2219;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
`

export const Error = ({mensaje}) => {
    return (
        <Texto>{mensaje}</Texto>
    )
}