import { useState, useEffect } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem('daily-dash-tasks');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    });
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('daily-dash-tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim() || tasks.length >= 3) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">Daily Focus</h2>
                <span className="text-xs font-medium px-2 py-1 bg-white/10 rounded-full text-white/60">
                    {tasks.filter(t => t.completed).length}/{tasks.length} Done
                </span>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                {tasks.length === 0 && (
                    <div className="text-white/30 text-center py-10 italic">
                        What are your 3 main goals for today?
                    </div>
                )}

                {tasks.map(task => (
                    <div key={task.id} className="group flex items-center justify-between bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all border border-white/5 hover:border-white/20">
                        <div className="flex items-center gap-4 flex-1">
                            <button
                                onClick={() => toggleTask(task.id)}
                                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${task.completed
                                        ? 'bg-emerald-500 border-emerald-500 scale-110'
                                        : 'border-white/30 hover:border-white hover:bg-white/10'
                                    }`}
                            >
                                {task.completed && (
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                            <span className={`text-lg transition-all duration-300 ${task.completed ? 'opacity-40 line-through decoration-white/30' : 'text-white/90'}`}>
                                {task.text}
                            </span>
                        </div>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-white/20 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-rose-400/10 rounded-lg"
                            aria-label="Delete task"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {tasks.length < 3 ? (
                <form onSubmit={addTask} className="mt-auto">
                    <div className="relative">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a primary goal..."
                            className="w-full bg-black/20 border border-white/10 text-white rounded-xl py-4 pl-4 pr-12 focus:outline-none focus:bg-black/30 focus:border-blue-400/50 transition-all placeholder-white/30"
                        />
                        <button
                            type="submit"
                            disabled={!newTask.trim()}
                            className="absolute right-2 top-2 bottom-2 aspect-square bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors text-white"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-white/30 text-xs mt-2 text-center">
                        {3 - tasks.length} slots remaining
                    </p>
                </form>
            ) : (
                <div className="mt-auto p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-200 text-center text-sm">
                    Daily capacity reached. Focus on these three!
                </div>
            )}
        </div>
    );
}
