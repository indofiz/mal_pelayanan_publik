import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import RootPage from './Root'
// PAGE
import { ProfilePage } from './pages/profilpage'
import { SurveyPage } from './pages/surveypage'
import { Homepage } from './pages/homepage'
import { AntrianPage } from './pages/antrianpage'
import { Toaster } from 'sonner'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: 'profil', element: <ProfilePage /> },
            { path: 'survey', element: <SurveyPage /> },
            { path: 'antrian', element: <AntrianPage /> },
        ],
    },
])

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App
