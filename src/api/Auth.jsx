import { url } from './Configuration';


export const register = async (body) => {
    const response = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
};


export const login = async (body) => {
    const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
};


export const checkToken = async (token) => {
    const response = await fetch(`${url}/checkToken`, {
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return await response.json();
};

// Logout user
export const logout = async (token) => {
    const response = await fetch(`${url}/logout`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return await response.json();
};
