import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#22c55e" }, // green accent (tweak per Figma)
    secondary: { main: "#a78bfa" },
    background: {
      default: "#0b0f14",
      paper: "#0f141b",
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
    },
  },
  typography: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
});

export default theme;
