import React, { useState } from 'react';
import { Button, Checkbox, Input, Progress } from 'antd';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleTaskCompletion = (index) => {
    if (tasks[index].completed) return;

    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    setCompletedCount(completedCount + 1);
  };

  const handleTaskAddition = () => {
    const newTask = {
      title: '',
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleTitleChange = (index, event) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = event.target.value;
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-6">To-Do List</h1>
        <Button
          type="primary"
          className="mb-4"
          onClick={handleTaskAddition}
        >
          Add Task
        </Button>
        <div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`flex items-center ${
                task.completed ? 'opacity-50 line-through' : ''
              }`}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => handleTaskCompletion(index)}
                disabled={task.completed}
              />
              <Input
                type="text"
                value={task.title}
                onChange={(event) => handleTitleChange(index, event)}
                className="flex-grow ml-2"
                bordered={false}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <div className="w-full">
            <Progress
              percent={(completedCount / tasks.length) * 100}
              strokeColor={{
                '0%': '#ff4d4f',
                '100%': '#52c41a',
              }}
            />
            <div className="text-gray-500 text-sm text-right mt-1">
              Progress: {completedCount} / {tasks.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
