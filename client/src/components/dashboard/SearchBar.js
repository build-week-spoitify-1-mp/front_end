import React, { useState } from 'react'

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
    const [newSearch, setNewSearch] = useState("")

    const handleChange = event => {
        setNewSearch(event.target.value)
    }
    
    const handleSubmit = event => {
        const searchQuery = newSearch.trim().split(" ").join("+")
        event.preventDefault()
        props.changeHistory(`/dashboard/search/${searchQuery}`)
        setNewSearch("")
    }

    return (
        <StyledSearchBar>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="search"
                    placeholder="Search..."
                    autoComplete="off"
                    onChange={handleChange}></input>
            </form>
        </StyledSearchBar>
    )
}

export default SearchBar