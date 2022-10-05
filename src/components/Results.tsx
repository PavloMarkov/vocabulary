import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export const Results: React.FC = () => {
  const allResult = useAppSelector(state => state.words.results);
  const lastResult = allResult[allResult.length - 1];

  return (
    <>
      <div>
        {`Total ammount of correct answer is - ${lastResult}`}
      </div>
      <h1>
        {`${(lastResult / 10) * 100} %`}
      </h1>
      <Link to="/">
        Return to Home Page
      </Link>
    </>
  );
};
