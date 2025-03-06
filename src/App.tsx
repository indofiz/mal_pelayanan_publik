import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'
import { Suspense, lazy } from 'react'
import LoadingPage from './loading'

// LAZY
const RootPage = lazy(() => import('./Root'))
const ProfilePage = lazy(() => import('./pages/profilpage'))
const SurveyPage = lazy(() => import('./pages/surveypage'))
const Homepage = lazy(() => import('./pages/homepage'))
const AntrianPage = lazy(() => import('./pages/antrianpage'))
const InstansiPage = lazy(() => import('./pages/instansipage'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: (
            <section className="absolute inset-0 grid place-content-center">
                <div
                    style={{
                        maxWidth: 800,
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src="/image/state/error.png" width={300} alt="" />
                    <h3
                        style={{
                            fontSize: 24,
                            fontWeight: 'bolder',
                            marginTop: '24px',
                        }}
                    >
                        404 NOT FOUND
                    </h3>
                    <p
                        style={{
                            opacity: 0.8,
                            margin: '0 auto',
                            maxWidth: 400,
                        }}
                    >
                        Halaman tidak ditemukan, silahkan coba kembali atau ke{' '}
                        <a href="/">BERANDA</a>
                    </p>
                </div>
            </section>
        ),
        children: [
            { path: '/', element: <Homepage /> },
            { path: 'profil', element: <ProfilePage /> },
            { path: 'survey', element: <SurveyPage /> },
            {
                path: 'survey/:survey',
                element: <SurveyPage />,
            },
            {
                path: 'antrian',
                element: <AntrianPage />,
            },
            {
                path: 'instansi',
                element: <InstansiPage />,
            },
            {
                path: 'antrian/:layanan',
                element: <AntrianPage />,
            },
        ],
    },
])

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingPage />}>
                <Toaster position="top-center" richColors />
                <RouterProvider router={router} />
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
