import React, { useState, useEffect, useCallback } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(null);

  const handleAddTodo = useCallback(() => {
    if (!newTodo.trim()) {
      setError("Please enter a valid task");
      return;
    }
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos((prev) => [...prev, todo]);
    setNewTodo("");
    setError(null);
  }, [newTodo]);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleToggleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    },
    [handleAddTodo]
  );

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Task Manager
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Add a new task..."
            aria-label="New task input"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddTodo}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Add task"
          >
            <FaPlus /> Add
          </motion.button>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded"
              role="alert"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className={`flex items-center justify-between p-4 rounded-lg border-2 ${todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-purple-200"} transition-colors hover:shadow-md`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleToggleComplete(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${todo.completed ? "bg-green-500 border-green-500" : "border-gray-300"}`}
                    aria-label={`Mark task as ${todo.completed ? "incomplete" : "complete"}`}
                  >
                    {todo.completed && <FaCheck className="text-white text-sm" />}
                  </button>
                  <span
                    className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                  >
                    {todo.text}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Delete task"
                >
                  <FaTrash />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {todos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No tasks yet. Add some tasks to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;