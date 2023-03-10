import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { routes } from './routes';

const App = () => (
  <Layout>
    <Navbar />
    <ToastContainer />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </Layout>
);

export default App;
