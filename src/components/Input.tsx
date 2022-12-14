import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addWord } from '../store/wordsSlice';

export const Input: React.FC = () => {
  const [engWord, setEngWord] = useState('');
  const [translateWord, setTranslateWord] = useState('');

  const dispatch = useDispatch();

  const createNewWord = (eng: string, translate: string) => ({
    engWord: eng,
    translateWord: translate,
  });

  const clearInputs = () => {
    setEngWord('');
    setTranslateWord('');
  };

  return (
    <div>
      <form>
        <div>
          <label
            htmlFor="engWordInput"
          >
            Enter word in English
            <input
              type="text"
              id="engWordInput"
              value={engWord}
              className="input"
              onChange={(e) => setEngWord(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="engTranslateInput"
          >
            Enter the translation
            <input
              type="text"
              id="engTranslateInput"
              className="input"
              value={translateWord}
              onChange={(e) => setTranslateWord(e.target.value)}
            />
          </label>
        </div>
        <button
          type="button"
          className="button is-primary mt-2"
          disabled={engWord === '' || translateWord === ''}
          onClick={() => {
            dispatch(addWord(createNewWord(engWord, translateWord)));
            clearInputs();
          }}
        >
          add word
        </button>
      </form>
      <div className="buttons mt-3">
        <div>
          <Link to="/checking" className="button is-success">
            check words
          </Link>
        </div>
        <div>
          <Link to="/" className="button is-link">
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};
