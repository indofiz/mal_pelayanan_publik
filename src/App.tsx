import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootPage from './Root'
// PAGE
import { ProfilePage } from './pages/profilpage'
import { SurveyPage } from './pages/surveypage'
import { Homepage } from './pages/homepage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: 'profil', element: <ProfilePage /> },
            { path: 'survey', element: <SurveyPage /> },
        ],
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
