import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { TasksPage } from './pages/tasks-page/TasksPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/navigation/Navigation.tsx';

import './App.css';

const queryClient = new QueryClient();

const App = () => {
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <div className="layout">
                    <main className="page-container">
                        <Router>
                            <Routes>
                                <Route path="/" element={<TasksPage />} />
                            </Routes>
                        </Router>
                    </main>
                    <Navigation />
                </div>
            </QueryClientProvider>
        </div>
    );
};

export { App };
