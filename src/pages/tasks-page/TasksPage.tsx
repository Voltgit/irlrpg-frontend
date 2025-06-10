import { TasksList } from '../../components/tasks-list/TasksList.tsx';
import { useQuery } from '@tanstack/react-query';

import './TasksPage.css';

const TasksPage = () => {
    const { isSuccess, data: tasks } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');

            return await response.json();
        },
    });

    return (
        <div className="tasks-page">
            Tasks Page
            {isSuccess ? <TasksList tasks={tasks}/> : 'Loading...'}
        </div>
    );
};

export { TasksPage };
