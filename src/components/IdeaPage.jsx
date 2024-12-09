import React from 'react';

function IdeaPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Idea Submission</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your idea"
          className="w-full p-2 border border-gray-300 rounded mt-4"
        />
        <button
          type="submit"
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Idea
        </button>
      </form>
    </div>
  );
}

export default IdeaPage;
