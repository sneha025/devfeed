import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Typography
            variant="body2"
            component="div"
            sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
          >
            @sneha
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
