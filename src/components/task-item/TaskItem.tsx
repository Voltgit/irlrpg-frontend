import type { Task } from '../../types/task-types.ts';

import './TaskItem.css';



interface TaskItemProps {
    task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
    const { title, completed } = task;

    return (
        <div className="task-item">
            <span>{title}</span> <span>[{completed ? '✅' : '❌'}]</span>
        </div>
    );
};

export { TaskItem };
