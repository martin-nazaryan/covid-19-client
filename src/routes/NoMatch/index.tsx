import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NoMatch: FC = () => (
  <main className="container">
    <h1>404 Not Found</h1>

    <Link to="/">Go To Home Page</Link>
  </main>
);

export default NoMatch;
