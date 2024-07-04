import { RouterProvider } from 'react-router-dom';
import routes from './routing/routes';
import { Toaster } from 'sonner';

function App() {

  return (
    <div>
      <Toaster richColors />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;
