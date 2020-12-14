import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { Header } from "./shared/components/header/header";
import { Suspense } from "react";

function App() {
  return (
    <div className="l-App">
      <BrowserRouter>
        <Header />
        <div className="l-container l-main-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
