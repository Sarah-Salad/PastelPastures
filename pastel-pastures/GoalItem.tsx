import React from 'react';
import './GoalItem.css'
interface GoalItemProps {
    goal: {
        text: string;
        completed: boolean;
    }
}

export const GoalItem: React.FC<GoalItemProps> = ({goal}) => {
    return(
    <li>
        <label className={goal.completed ? "completed": undefined}>
            <input type = "checkbox" checked = {goal.completed}/>
            {goal.text}
        </label>
    </li>

    ) 
}