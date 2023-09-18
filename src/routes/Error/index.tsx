import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Error: FC = () => (
  <main className="container">
    <h1>Ooops!!! Something went wrong.</h1>

    <Link to="/">Go To Home Page</Link>
  </main>
);

export default Error;
