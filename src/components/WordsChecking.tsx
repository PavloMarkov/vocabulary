import React from 'react';
import { useDispatch } from 'react-redux';
import { checkingTenWords } from '../store/wordsSlice';

export const WordsChecking: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkingTenWords())}
      >
        Exit
      </button>
      <div>
        Let&apos;s start the checking!
      </div>
    </div>
  );
};
