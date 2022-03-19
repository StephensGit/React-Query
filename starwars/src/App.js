import React, {useState} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

// Components
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import Users from './components/Users';

// Styles
import './index.css'

 // Create a client
 const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('planets');

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className='content'>
          { page === 'planets' && <Planets /> }
          { page === 'people' && <People /> }
          { page === 'users' && <Users /> }
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;