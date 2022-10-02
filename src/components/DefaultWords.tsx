import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { defaultWords } from '../defaultWords';
import { addDefaultWords } from '../store/wordsSlice';

export const DefaultWords: React.FC = () => {
  const dispatch = useDispatch();

  const [isNotUsedDefaultWords, setIsNotUsedDefaultWords] = useState(true);

  return (
    <div>
      {isNotUsedDefaultWords
        ? <p>Use Default words?</p>
        : <p>Default words were used</p>}
      {isNotUsedDefaultWords && (
        <button
          type="button"
          onClick={() => {
            dispatch(addDefaultWords(defaultWords));
            setIsNotUsedDefaultWords(false);
          }}
        >
          Default words
        </button>
      )}
    </div>
  );
};
