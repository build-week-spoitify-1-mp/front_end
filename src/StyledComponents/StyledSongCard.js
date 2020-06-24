import styled from 'styled-components'

export default styled.div`
    background-color: #1DB954;
    color: white;
    margin: 20px;
    padding: 10px;
    width: 600px;
    display: flex;
    border-radius: 10px;

    img {
        max-width: 100%;
    }

    .song-info {
        width: 45%;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        justify-content: space-evenly;
    }

    button {
        width: 50%;
    }

    a {
        width: 50%;
    }
`