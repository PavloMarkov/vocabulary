import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { addTestResults } from '../store/wordsSlice';
import { Word } from '../types/Word';

export const WordsChecking: React.FC = () => {
  const dispatch = useDispatch();
  const allWords = useAppSelector(state => state.words.words);
  const [wordsToCheck, setWordsToCheck] = useState<Word[]>([]);
  const [numberWord, setNumberWord] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const randomWords: Word[] = _.sampleSize(allWords, 10);

    setWordsToCheck(randomWords);

    return () => setWordsToCheck([]);
  }, []);

  const variants = () => {
    const words = _.filter(allWords, el => el.engWord !== wordsToCheck[numberWord].engWord);
    const randomVariants = _.shuffle(words).slice(0, 3);

    return _.shuffle([wordsToCheck[numberWord], ...randomVariants]);
  };

  const canWork = wordsToCheck.length > 0 && numberWord < 10;

  const orderOfBtns = canWork
    ? variants()
    : [];

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Link to="/" className="button is-danger is-outlined mg-small">
          Exit
        </Link>
      </div>
      <div className="subtitle is-3">
        {allWords.length >= 10
          ? 'Let\'s start the checking!'
          : `Words to check is less then 10. Add ${10 - allWords.length} words or use default words`}
      </div>
      {wordsToCheck.length === 10 && numberWord < 10 && (
        <div>
          <h3 className="title is-3">
            {`"${wordsToCheck[numberWord].engWord}" is:`}
          </h3>
          <div className="buttons">
            {orderOfBtns.map((btn) => (
              <button
                key={btn.engWord}
                className="button is-info is-rounded"
                type="button"
                onClick={() => {
                  if (wordsToCheck[numberWord].translateWord === btn.translateWord) {
                    setCorrectAnswers(prev => prev + 1);
                  }

                  if (numberWord === 9) {
                    if (wordsToCheck[numberWord].translateWord === btn.translateWord) {
                      dispatch(addTestResults(correctAnswers + 1));
                    } else {
                      dispatch(addTestResults(correctAnswers));
                    }

                    navigate('/results');
                  }

                  setNumberWord(prev => prev + 1);
                }}
              >
                {`${btn.translateWord}`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
