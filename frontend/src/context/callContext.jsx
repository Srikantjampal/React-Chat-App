import React, { createContext, useState } from 'react';

const CallContext = createContext();

const CallProvider = ({ children }) => {
    const [call, setCall] = useState(true);

    return (
        <CallContext.Provider value={{ call, setCall }}>
            {children}
        </CallContext.Provider>
    );
};

export { CallContext, CallProvider };