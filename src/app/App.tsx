import { Layout } from 'antd';

import { routes } from './routes/routes';
import { AppFooter, AppHeader, AppSide } from '@widgets/index';

import './App.scss';

export default function App() {

  return (
    <Layout >
      <AppSide />
      <Layout>
        <AppHeader />
        {routes}
        <AppFooter />
      </Layout>
    </Layout>
  )
}
