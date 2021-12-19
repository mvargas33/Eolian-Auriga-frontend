const routes = [
  {
    path: '/',
    component: () => import('layouts/AurigaLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Auriga.vue') },
      { path: '/auriga', component: () => import('pages/Auriga.vue') }
    ]
  },
  {
    path: '/escolta',
    component: () => import('layouts/AurigaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AurigaEscolta.vue') }
    ]
  },
  {
    path: '/fenix',
    component: () => import('layouts/FenixLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Fenix.vue') }
    ]
  },
  {
    path: '/fenixbasic',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FenixBasic.vue') }
    ]
  },
  {
    path: '/aurigabasic',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AurigaBasic.vue') }
    ]
  },
  {
    path: '/map',
    component: () => import('layouts/AurigaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Map.vue') }
    ]
  },
  {
    path: '/graphs',
    component: () => import('layouts/AurigaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Graphs.vue') }
    ]
  },
  {
    path: '/baterias',
    component: () => import('layouts/AurigaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AurigaBaterias.vue') }
    ]
  },
  {
    path: '/pilot',
    component: () => import('layouts/Auriga-PilotLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Pilot.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('layouts/AurigaLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Error404.vue') }
    ]
  })
}

export default routes
