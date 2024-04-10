import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LiveSession from "./pages/LiveSession.jsx";
import PastSessions from "./pages/PastSessions.jsx";
import Insights from "./pages/Insights.jsx";
import Meditation from "./pages/Meditation.jsx";
import NeurofeedbackGames from "./pages/NeurofeedbackGames.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/live-session" element={<LiveSession />} />
        <Route path="/past-sessions" element={<PastSessions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/neurofeedback-games" element={<NeurofeedbackGames />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
