import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrollTrigger, Zoom } from "@mui/material";
export default function Scroll() {
  return (
    <Zoom in={useScrollTrigger({ disableHysteresis: true, threshold: 100 })}>
      <Fab
        onClick={() => window.scrollTo(0, 0)}
        variant="extended"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
