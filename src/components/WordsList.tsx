import React from 'react';
import { useAppSelector } from '../store/hooks';
import { Word } from '../types/Word';

export const WordsList: React.FC = () => {
  const words: Word[] = useAppSelector(state => state.words.words);

  return (
    <div>
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
