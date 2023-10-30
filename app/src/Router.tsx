import styled from 'styled-components'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import { paths } from './const/paths'
import { Counter, Login, Register } from './pages'
import { Header, Footer } from './components'

const Main = styled.main`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const routes = createBrowserRouter([
  {
    path: paths.root,
    element: <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>,
    children: [
      {
        path: paths.root,
        element: <Counter />,
      },
      {
        path: paths.login,
        element: <Login />,
      },
      {
        path: paths.register,
        element: <Register />,
      }
    ],
  }
])

export function Router(){
  return (
    <RouterProvider router={routes} />
  )
}
