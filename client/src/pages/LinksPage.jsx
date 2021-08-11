import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from "../context/AuthContext";
import Loader from '../components/Loader';
import LinksList from '../components/LinksList';

const LinksPage = () => {
    const [links, setLinks] = useState([]);
    const { loading, request } = useHttp();
    const { token } = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            debugger;
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setLinks(fetched);
            console.log(links);
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }
    debugger;
    return (
        
            <div>
                {!loading && <LinksList links={links} />}
            </div>
    );
}

export default LinksPage;
