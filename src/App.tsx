import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { NotFoundPage } from './components/NotFoundPage';
import { Input } from './components/Input';
import { WordsChecking } from './components/WordsChecking';
import { WordsList } from './components/WordsList';
import { Results } from './components/Results';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WordsList />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="input" element={<Input />} />
        <Route path="checking" element={<WordsChecking />} />
        <Route path="results" element={<Results />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
