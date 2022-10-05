import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export const PreviousResults: React.FC = () => {
  const allResult = useAppSelector(state => state.words.results);
  const totalRes = allResult.reduce((acc, res) => acc + res, 0);
  const avarageTotalRes = Math.floor((totalRes / allResult.length) * 100) / 100;
  const avarageRes = (avarageTotalRes / 10) * 100 || 0;

  return (
    <>
      <h1>
        All your previous results:
      </h1>
      <ul>
        {allResult.map((res, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            {res}
          </li>
        ))}
      </ul>
      <h3>
        Avarage result of all words checking is:
      </h3>
      <h2>
        {`${avarageRes} %`}
      </h2>
      <div>
        <Link to="/">
          Return to Home Page
        </Link>
      </div>
    </>
  );
};
