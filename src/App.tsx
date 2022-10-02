import React from 'react';
import './App.scss';
import { Input } from './components/Input';
import { WordsChecking } from './components/WordsChecking';
import { WordsList } from './components/WordsList';
import { useAppSelector } from './store/hooks';

export const App: React.FC = () => {
  const isCheckingWords = useAppSelector(state => state.words.isCheckingWords);

  return (
    <div className="starter">
      {!isCheckingWords && (
        <>
          <Input />
          <WordsList />
        </>
      )}
      {isCheckingWords && (
        <WordsChecking />
      )}
    </div>
  );
};
