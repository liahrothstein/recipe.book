import { Routes, Route } from 'react-router-dom';

import { MainPage, RecipePage } from '@pages/index';

export const routes: JSX.Element = (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/recipe/:id' element={<RecipePage />} />
  </Routes>
);