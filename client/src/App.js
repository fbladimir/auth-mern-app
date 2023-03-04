import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

/* Root Routes */ 

const router = createBrowserRouter([ 
    { 
        path: '/', 
        element : <div> Root Route </div>
    }, 
    { 
        path: '/register', 
        element : <div> Register Route </div>
    },
])

export default function App() {
  return (
    <main>

        <RouterProvider router={router}> </RouterProvider>
        

   </main>
  )
}
