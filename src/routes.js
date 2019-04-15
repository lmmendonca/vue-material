import Vendas from './components/vendas/Vendas';
import Home from './components/home/Home';

export const routes = [
  {path: '/', component: Home, titulo: 'Home', icon:'attach_money'},
  {path: '/vendas', component: Vendas, titulo: 'Vendas', icon:'attach_money'},
];
