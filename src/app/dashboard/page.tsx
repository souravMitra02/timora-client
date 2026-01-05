import React from 'react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-yellow-50 px-6 py-8">
      
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Timora" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-slate-900">Timora</h1>
        </div>

        <button className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500">
          + Add Task
        </button>
      </header>

      {/* Welcome */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Welcome back 👋
        </h2>
        <p className="text-slate-500">
          Let’s manage your tasks smartly today
        </p>
      </section>

      {/* Stats */}
      <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {["Today", "Pending", "Completed"].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item}</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">0</h3>
          </div>
        ))}
      </section>

      {/* Tasks */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Today’s Tasks
        </h3>

        <div className="space-y-3">
          <div className="rounded-xl bg-white p-4 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="font-medium text-slate-900">
                Study React Hooks
              </h4>
              <p className="text-sm text-slate-500">
                7:00 PM
              </p>
            </div>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
              Pending
            </span>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm flex items-center justify-between opacity-60">
            <div>
              <h4 className="font-medium line-through text-slate-900">
                Morning Exercise
              </h4>
              <p className="text-sm text-slate-500">
                6:00 AM
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Done
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}
