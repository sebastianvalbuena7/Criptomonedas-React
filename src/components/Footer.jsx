import styled from '@emotion/styled'

const FooterContainer = styled.div`
        margin-top: 3rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: white;
    margin-bottom: 5rem;
`

const FooterIcons = styled.i`
    font-size: 5rem;
    color: white;
    &:hover {
        color: rgb(173, 173, 173);
        transition: 0.3s all linear;
    }
`

export const Footer = () => {
    return (
        <FooterContainer>
            <h2>Desarrollado por: Sebastian Valbuena</h2>
            <h4>Proyecto Desarrollado con React</h4>

            <div>
                <a href="https://github.com/sebastianvalbuena7/" target="_blank"><FooterIcons className='bx bxl-github'></FooterIcons></a>
                <a href="https://www.linkedin.com/in/sebastianvalbuenaacosta/" target="_blank"><FooterIcons className='bx bxl-linkedin-square'></FooterIcons></a>
                <a href="https://www.instagram.com/sebastianvalbuena9246/" target="_blank"><FooterIcons className='bx bxl-instagram-alt'></FooterIcons></a>
            </div>
        </FooterContainer>
    )
}