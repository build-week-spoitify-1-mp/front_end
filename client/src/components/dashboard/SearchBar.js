import React from 'react'

// Style
import styled from 'styled-components'
import { background_variant, accent_variant } from '../theme'

const StyledSearchBar = styled.div`
    width: 90%;
    margin: auto;
    input {
        background-color: ${background_variant};
        color: ${accent_variant};
        box-sizing: border-box;
        border-radius: 50px;
        width: 100%;
        padding: 5% 5%;
        border: none;
        
        font-size: 1rem;

        &:focus {
            outline: none;
        }
    }
`

const SearchBar = props => {

    return (
        <StyledSearchBar>
            <input type="text" placeholder="Search..."></input>
        </StyledSearchBar>
    )
}

export default SearchBar