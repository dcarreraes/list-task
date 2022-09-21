import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './views/Task';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Layout>
      <div>
        <Task />
        <ToastContainer />
      </div>
    </Layout>
  );
}

export default App;
