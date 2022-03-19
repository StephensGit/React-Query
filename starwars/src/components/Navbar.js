import React from 'react'

function Navbar({ setPage }) {
  return (
    <nav>
        <button onClick={() => setPage('planets')}>Planets</button>
        <button onClick={() => setPage('people')}>People</button>
        <button onClick={() => setPage('users')}>Users</button>
    </nav>
  )
}

export default Navbar