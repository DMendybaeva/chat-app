import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { routes } from './routes';

const App = () => (
  <Layout>
    <Navbar />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </Layout>
);

export default App;
