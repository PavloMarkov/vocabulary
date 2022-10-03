import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { addTestResults, checkingTenWords } from '../store/wordsSlice';
import { Word } from '../types/Word';
import { ButtonsOfChecking } from './ButtonsOfChecking';

export const WordsChecking: React.FC = () => {
  const dispatch = useDispatch();
  const allWords = useAppSelector(state => state.words.words);
  const [numberWord, setNumberWord] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wordsToCheck, setWordsToCheck] = useState<Word[]>([]);

  const randomIndex = () => Math.floor(Math.random() * allWords.length);

  useEffect(() => {
    const randomWords: Word[] = [];
    const addRandomWords = () => {
      for (let i = 0; i < 10; i += 1) {
        // eslint-disable-next-line no-console
        console.log(randomWords);

        let index = randomIndex();

        while (randomWords.includes(allWords[index])) {
          index = randomIndex();
        }

        randomWords[i] = (allWords[index]);
      }
    };

    addRandomWords();

    setWordsToCheck(randomWords);
  }, []);

  if (numberWord > 9) {
    dispatch(addTestResults(correctAnswers));
    dispatch(checkingTenWords());
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkingTenWords())}
      >
        Exit
      </button>
      <div>
        {allWords.length >= 10
          ? 'Let\'s start the checking!'
          : `Words to check is less then 10. Add ${10 - allWords.length} words or use default words`}
      </div>
      {wordsToCheck.length >= 10 && (
        <div>
          {`${wordsToCheck[numberWord].engWord} is:`}
          <button
            type="button"
            onClick={() => {
              setNumberWord(prev => prev + 1);
              setCorrectAnswers(prev => prev + 1);
            }}
          >
            {`${wordsToCheck[numberWord].translateWord}`}
          </button>
        </div>
      )}
      <ButtonsOfChecking />
    </div>
  );
};
