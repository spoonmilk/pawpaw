import React from 'react'
import {useLocation} from 'react-router-dom';

const Opener = () => {
    const location = useLocation();

    if (location.pathname === 'https://www.brown.edu/') {
        return (
            <div className="fixed top-0 right-0 mt-4 bg-slate-800 shadow-md, rounded px-4 py-2 w-64">
                <div className="flex justify-center">
                    <h1>Detected a Relevant URL</h1>
                </div>
            </div>
        )
    }
}

export default Opener;