import React from 'react'
import Routers from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
