import { Container, List } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CardUsers from '../components/CardsUsers.jsx';
import { useLocalStorage } from "../helpers/useLocalStorage";

function DiscoverPage() {
    const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);

    return (
        <>
            <CardUsers />
        </>
    );
}

export default DiscoverPage;