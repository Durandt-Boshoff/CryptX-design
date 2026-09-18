import Sidebar from "./components/layout/sidebar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="ml-[162px]">
        {/* Dashboard content goes here */}
      </main>
    </div>
  );
}

export default App;