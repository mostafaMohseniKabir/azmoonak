export default [
      {
        path: '/',
        name: 'home',
        component: () => import('./components/TheTestPage'),
      },
      {
        path: '/result',
        name: 'result',
        component: () => import('./components/TheResultList'),
      },
    ]