import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"
import { NotFound } from "./pages/404"
import { Error } from "./pages/error"

import { Login } from "./pages/auth/login"
import { RedefinirSenha } from "./components/redefinir-senha"
// import { Cadastro } from "./pages/auth/cadastro"

import { Dashboard } from "./pages/app/dashboard"
import { TabelaDePreco } from "./pages/app/tabela-de-preco"
import { CadastroDeClientes } from "./pages/app/dashboard/novos-cadastros/cadastro-de-clientes"

import { Planos } from "./pages/app/sidebar/menu/planos"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: < Error />,
    children: [
      { 
        path: '/', 
        element: <Dashboard /> 
      },
      { 
        path: '/tabela-de-preco', 
        element: <TabelaDePreco /> 
      },
      { 
        path: '/planos', 
        element: <Planos /> 
      },
    ],
  },
  {
    path: '/cadastro-de-clientes',
    element: <CadastroDeClientes />,
  },
  {
    path: '/resetar-senha',
    element: <RedefinirSenha />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { 
        path: '/login', 
        element: <Login /> 
      },
      // { path: '/cadastro', element: <Cadastro /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  }
])
