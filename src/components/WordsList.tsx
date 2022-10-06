import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { Word } from '../types/Word';
import { DefaultWords } from './DefaultWords';

export const WordsList: React.FC = () => {
  const words: Word[] = useAppSelector(state => state.words.words);

  return (
    <div>
      <div className="buttons">
        <DefaultWords />
        <div>
          <Link to="/input" className="button is-primary">
            add word
          </Link>
        </div>
        <div>
          <Link to="/checking" className="button is-link">
            check words
          </Link>
        </div>
      </div>
      {words.length === 0
        ? <p className="title is-3">Add words to your vocabulary or use default words</p>
        : (
          <table className="table is-hoverable is-bordered is-striped">
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
