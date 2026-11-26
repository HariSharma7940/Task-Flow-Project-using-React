import React from 'react'

const Setting = ({ theme }) => {
  return (
    <div className={theme === "light" ? "p-7 bg-white text-black" : "p-7 bg-gray-900 text-white"}>
      
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className={theme === "light" ? "text-black/40" : "text-white/60"}>
        Manage your subjects and data
      </p>

      {/* SUBJECT MANAGEMENT CARD */}
      <div
        className={`pl-7 pt-2 rounded-2xl mt-5 w-250 h-80 shadow-[0_0_20px_rgba(0,0,0,0.15)] ${
          theme === "light" ? "bg-pink-100" : "bg-gray-800"
        }`}
      >
        <form className="mt-6 space-y-4">
          <h1 className={theme === "light" ? "text-black/50" : "text-white/60"}>Subject Management</h1>
          <p className={theme === "light" ? "text-black/50" : "text-white/60"}>
            Add or remove study subjects
          </p>

          <div className="flex">
            <div>
              <label className="font-bold" htmlFor="subject">
                Add New Subject
              </label>
              <br />

              {/* INPUT */}
              <input
                type="text"
                id="subject"
                placeholder="Enter subject name"
                className={`w-200 p-1 border rounded mt-1 ${
                  theme === "light"
                    ? "bg-pink-100 border-black text-black"
                    : "bg-gray-700 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* ADD BUTTON */}
            <button
              className={`ml-4 mt-5 pr-6 py-1 rounded-2xl ${
                theme === "light" ? "bg-black text-white" : "bg-gray-600 text-white"
              }`}
            >
              <i className="ri-add-fill mr-6 ml-3"></i>Add
            </button>
          </div>

          <h1 className="font-bold">Current Subjects</h1>

          <div className="flex gap-5">
            {["MERN Study", "Cybersecurity Study", "Python Study", "English Practice"].map(
              (sub, index) => (
                <button
                  key={index}
                  className={`rounded-xl h-10 px-3 py-2 font-semibold ${
                    theme === "light"
                      ? "bg-pink-100 text-black border border-black"
                      : "bg-gray-700 text-white border border-gray-500"
                  }`}
                >
                  {sub}
                </button>
              )
            )}
          </div>

          <p className={theme === "light" ? "-mt-2 text-black/60" : "-mt-2 text-white/60"}>
            Default subjects cannot be deleted
          </p>
        </form>
      </div>

      {/* DATA MANAGEMENT CARD */}
      <div className="mt-3 h-56 w-250 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-4">
        <h1 className="text-xl font-bold">Data Management</h1>
        <p className={theme === "light" ? "text-black/50" : "text-white/60"}>
          Clear all your study data
        </p>

        <div
          className={`mt-5 h-31 w-230 rounded-2xl p-4 ${
            theme === "light" ? "bg-pink-100" : "bg-gray-800"
          }`}
        >
          <h1 className="text-xl">
            <i className="ri-alert-line"></i> Clear All Data
          </h1>

          <p className={theme === "light" ? "ml-6 text-black/50" : "ml-6 text-white/60"}>
            This will delete all your study sessions and reset subjects to defaults.  
            This action cannot be undone.
          </p>

          {/* CLEAR ALL DATA BUTTON */}
          <button
            className={`rounded-xl h-10 px-3 py-2 ml-6 mt-1 font-semibold ${
              theme === "light" ? "bg-red-500 text-white" : "bg-red-600 text-white"
            }`}
          >
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default Setting
