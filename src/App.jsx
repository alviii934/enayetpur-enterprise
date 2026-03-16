import './App.css';

function App() {
  return (
    <>
      <div className="shadow-sm  flex items-center justify-between py-3 px-2">
        {/* Logo / Title */}
        <div className="text-xl font-semibold">CS — Ticket System</div>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer ">FAQ</div>
          <div className="cursor-pointer ">Changelog</div>
          <div className="cursor-pointer ">Blog</div>
          <div className="cursor-pointer ">Download</div>
          <div className="cursor-pointer ">Contact</div>

          <button className="h-10  bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + New Ticket
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
