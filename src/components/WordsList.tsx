import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { Word } from '../types/Word';
import { DefaultWords } from './DefaultWords';

export const WordsList: React.FC = () => {
  const words: Word[] = useAppSelector(state => state.words.words);

  return (
    <div>
      <DefaultWords />
      <Link to="/input">
        add word
      </Link>
      <Link to="/checking">
        check words
      </Link>
      {words.length === 0
        ? 'Add words to your vocabulary'
        : (
          <table>
            <thead>
              <tr>
                <td>
                  #
                </td>
                <td>
                  English
                </td>
                <td>
                  Translate
                </td>
              </tr>
            </thead>
            <tbody>
              {words.map((word, i) => (
                <tr
                  key={`${word.engWord}${word.translateWord}`}
                >
                  <td>
                    {i + 1}
                  </td>
                  <td>
                    {word.engWord}
                  </td>
                  <td>
                    {word.translateWord}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
};
