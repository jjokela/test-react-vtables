import React, { useState } from 'react';
import PropTypes from "prop-types";
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function Search(props) {

    const propTypes = {
        searchHandler: PropTypes.func
    };

    const [query, setQuery] = useState('')
    const handleSearchStringChange = (e) => {

        // prevent default action
        e.preventDefault();

        console.log(e.target.value);
        setQuery(e.target.value)
        props.searchHandler(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    type="search" value={query} 
                    onChange={handleSearchStringChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </form>
        </div>
    )
}