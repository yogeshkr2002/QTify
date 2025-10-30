import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./navbar.css";

export default function Navbar() {
  const [query, setQuery] = useState("");

  return (
    <AppBar position="sticky" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        {/* Left: Logo */}
        <Box className="navbar-logo">
          <img src="/logo.png" alt="QTify Logo" className="navbar-logo-img" />
        </Box>

        {/* Center: Search */}
        <Box
          className="navbar-search"
          role="search"
          aria-label="Search songs and albums"
        >
          <SearchIcon className="navbar-search-icon" />
          <InputBase
            placeholder="Search a album of your choice"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="navbar-search-input"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton className="navbar-search-btn" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Right: Actions */}
        <Box className="navbar-actions">
          <Button
            variant="contained"
            disableElevation
            startIcon={<FavoriteBorderIcon />}
            className="feedback-btn"
          >
            Give Feedback
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
