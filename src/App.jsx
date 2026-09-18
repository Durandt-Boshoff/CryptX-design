import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="ml-40.5">
        <Header />
        
        {/* Dashboard content goes here */}
      </main>
    </div>
  );
}

export default App;