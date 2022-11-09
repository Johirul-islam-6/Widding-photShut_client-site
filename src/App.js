
import { RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from './routers/routingLink';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer } from 'react-toastify';



function App() {

  <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />

  return <RouterProvider router={router}></RouterProvider>

}

export default App;
