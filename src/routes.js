import TheTest from './components/TheTest'

export default [
      {
        path: '/',
        name: 'test',
        component: TheTest,
      },
      {
        path: '/result',
        name: 'result',
        component: () => import('./components/TheResultList'),
      },
    ]