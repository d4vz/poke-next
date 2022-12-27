import React, { ReactNode } from 'react';

export const SearchContext = React.createContext({} as IContext);

interface IContext {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContextProvider = ({ children }: any) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};
