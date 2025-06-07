import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { TasksPage } from './pages/TasksPage';
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<TasksPage />} />
                </Routes>
            </Router>
        </>
    );
};

export { App };
