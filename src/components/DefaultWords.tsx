import React from 'react';
import { useDispatch } from 'react-redux';

import { defaultWords } from '../defaultWords';
import { useAppSelector } from '../store/hooks';
import { addDefaultWords } from '../store/wordsSlice';

export const DefaultWords: React.FC = () => {
  const dispatch = useDispatch();
  const allWords = useAppSelector(state => state.words.words);

  return (
    <div>
      {allWords.length < 10
        ? <p>Use Default words?</p>
        : ''}
      {allWords.length < 10 && (
        <button
          type="button"
          onClick={() => {
            dispatch(addDefaultWords(defaultWords));
          }}
        >
          Default words
        </button>
      )}
    </div>
  );
};
