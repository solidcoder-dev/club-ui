import ClubWelcome from "./components/ClubWelcome.jsx";

function App() {
  const tenant = (import.meta.env.VITE_TENANT || "default").toLowerCase();

  return (
    <main className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <ClubWelcome tenant={tenant} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
