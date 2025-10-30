import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <Box>
      <Navbar />
      <main className="container">
        <img src="/Group 7483.png" alt="QTify Hero" className="hero-img" />
      </main>
    </Box>
  );
}
