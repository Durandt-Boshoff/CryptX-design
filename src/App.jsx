import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="ml-0 lg:ml-40.5">
        <Header />
        <MainContent />
      </main>
    </div>
  );
}

export default App;