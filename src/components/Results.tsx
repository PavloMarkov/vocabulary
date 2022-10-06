import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export const Results: React.FC = () => {
  const allResult = useAppSelector(state => state.words.results);
  const lastResult = allResult[allResult.length - 1];

  return (
    <div>
      <div className="subtitle is-3">
        {`Total ammount of correct answer is - ${lastResult} words`}
      </div>
      <h1 className="title is-1">
        The result is
        {` ${(lastResult / 10) * 100} %`}
      </h1>
      <div className="buttons">
        <div>
          <Link to="/" className="button is-link m-1">
            Return to Home Page
          </Link>
        </div>
        <div>
          <Link to="/history" className="button is-info m-1">
            Previous results
          </Link>
        </div>
      </div>
    </div>
  );
};
