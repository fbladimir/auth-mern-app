import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
/* Import All Components */ 
import UserName from './components/Username'; 
import Password from './components/Password'; 
import Register from './components/Register'; 
import Profile from './components/Profile'; 
import Recovery from './components/Recovery'; 
import Reset from './components/Reset'; 
import PageNotFound from './components/PageNotFound'; 
import Username from './components/Username';


/* Root Routes */ 

const router = createBrowserRouter([ 
    { 
        path: '/', 
        element : <Username> </Username>
    }, 
    { 
        path: '/Register', 
        element : <Register> </Register>
    },
    { 
        path: '/Password', 
        element : <Password> </Password>
    },
    { 
        path: '/Profile', 
        element : <Profile> </Profile>
    },
    { 
        path: '/Recovery', 
        element : <Recovery> </Recovery>
    },
    { 
        path: '/Reset', 
        element : <Reset> </Reset>
    },
    { 
        path: '/*', 
        element : <PageNotFound> </PageNotFound>
    },
])

export default function App() {
  return (
    <main>

        <RouterProvider router={router}> </RouterProvider>


   </main>
  )
}
