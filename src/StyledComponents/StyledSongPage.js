import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: center;
    margin: 50px auto;

    img {
        width: 40%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .song-info {
        background-color: #1DB954;
        color: #1C1C1C;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 20px;

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1.5rem;
        }

        button {
            align-self: flex-start;
        }
    }
`