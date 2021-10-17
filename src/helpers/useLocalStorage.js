import { useState, useEffect } from "react";

function getStorageValue(key, valorInicial) {  // Obtiene el valor guardado
    if (typeof window !== "undefined") {
        const guardado = localStorage.getItem(key);
        return guardado !== null ? JSON.parse(guardado) : valorInicial;
    }
}

export const useLocalStorage = (key, valorInicial) => {
    const [valor, setValor] = useState(() => {
        return getStorageValue(key, valorInicial);
    });

    useEffect(() => { // Guarda el valor
        localStorage.setItem(key, JSON.stringify(valor));
    }, [key, valor]);

    return [valor, setValor];
};
