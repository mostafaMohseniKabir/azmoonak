import TheLoading from './components/TheLoading'

export default [
      {
        path: '/',
        name: 'test',
        component: TheLoading,
      },
      {
        path: '/result',
        name: 'result',
        component: () => import('./components/TheResultList'),
      },
    ]