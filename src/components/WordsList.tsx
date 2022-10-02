import React from 'react';
import { useAppSelector } from '../store/hooks';
import { Word } from '../types/Word';

export const WordsList: React.FC = () => {
  const words: Word[] = useAppSelector(state => state.words.words);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              English
            </td>
            <td>
              Translate
            </td>
          </tr>
        </thead>
        <tbody>
          {words.map(word => (
            <tr
              key={`${word.engWord}${word.translateWord}`}
            >
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
    </div>
  );
};
