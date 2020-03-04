import React from 'react';

export const PageContext = React.createContext({});

export const usePageContext = () => React.useContext(PageContext);
