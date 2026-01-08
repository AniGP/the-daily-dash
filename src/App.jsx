import WeatherWidget from './components/WeatherWidget';
import QuoteWidget from './components/QuoteWidget';
import TaskList from './components/TaskList';

function App() {
  const currentHour = new Date().getHours();
  // Simple greeting logic
  let greeting = "Hello.";
  if (currentHour < 12) greeting = "Good Morning.";
  else if (currentHour < 18) greeting = "Good Afternoon.";
  else greeting = "Good Evening.";

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-2rem)]">
      <main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

        {/* Left Column: Greeting, Weather, Quote */}
        <div className="flex flex-col gap-6">
          <header className="py-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent drop-shadow-sm">
              {greeting}
            </h1>
            <p className="text-blue-200/60 text-xl font-light">What will you retrieve from today?</p>
          </header>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:bg-white/10 transition-colors duration-500">
            <WeatherWidget />
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-purple-500/40 transition-colors duration-700"></div>
            <QuoteWidget />
          </div>
        </div>

        {/* Right Column: Tasks */}
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col h-full min-h-[500px]">
          <TaskList />
        </div>

      </main>

      <footer className="mt-12 text-white/20 text-sm">
        Daily Dash • Made with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
