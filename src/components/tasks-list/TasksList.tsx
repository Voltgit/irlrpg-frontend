import { TaskItem } from '../task-item/TaskItem.tsx';
import type { Task } from '../../types/task-types.ts';

import './TasksList.css';

interface TasksListProps {
    tasks: Task[];
}

const TasksList = ({ tasks }: TasksListProps) => {
    return (
        <div className="tasks-list">
            {tasks.map(task => (
                <TaskItem task={task} key={task.id} />
            ))}
        </div>
    );
};

export { TasksList };
