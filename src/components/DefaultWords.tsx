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
      {allWords.length < 10 && (
        <button
          type="button"
          className="button is-warning"
          onClick={() => {
            dispatch(addDefaultWords(defaultWords));
          }}
        >
          Use Default words
        </button>
      )}
    </div>
  );
};
