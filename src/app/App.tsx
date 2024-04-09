import { Route, Routes } from 'react-router-dom';

import { MainPage, RecipePage } from '@pages/index';

import './App.scss';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/recipe' element={<RecipePage />} />
    </Routes>
  )
}
