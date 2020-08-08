import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));
const TemaUnoView = React.lazy(() => import('./views/temarioViews/TemaUnoView'));
const TemaDosView = React.lazy(() => import('./views/temarioViews/TemaDosView'));

const Actividad2View = React.lazy(() => import('./views/temarioViews/Actividad2View'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },
  { path: '/temarioViews/TemaUnoView', name: 'Definiciones', component: TemaUnoView },
  { path: '/temarioViews/TemaDosView', name: 'Lineamientos generales de la Metodología P 1', component: TemaDosView },
  
  { path: '/temarioViews/Actividad2View', name: 'Actividad', component: Actividad2View },

];


export default routes;
