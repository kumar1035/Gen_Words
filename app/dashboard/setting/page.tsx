import { UserProfile, useUser, SignOutButton } from '@clerk/nextjs';
import React, { useState } from 'react';

function Setting() {
  const { user } = useUser();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to apply theme if you have a theme provider
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Clerk user profile component */}
        <UserProfile />
      </div>

      {/* Dark mode toggle */}
      <div className="mt-6 flex items-center space-x-3">
        <label htmlFor="darkModeToggle" className="cursor-pointer select-none">Dark Mode</label>
        <input
          id="darkModeToggle"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="cursor-pointer"
        />
      </div>

      {/* Sign out button */}
      <div className="mt-6">
        <SignOutButton>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>

      {/* Other sections (example placeholders) */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Need help? <a href="/support" className="underline">Contact Support</a></p>
        <p className="mt-2">Want to delete your account? <a href="/delete-account" className="underline text-red-600">Delete Account</a></p>
      </div>
    </div>
  );
}

export default Setting;
