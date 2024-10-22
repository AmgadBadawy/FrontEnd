import { useContext, useState, useEffect } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

const options = ["AR", "EN"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || theme.palette.mode;
    if (savedMode !== theme.palette.mode) {
      colorMode.toggleColorMode();
    }
  }, [colorMode, theme.palette.mode]);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMode = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        width: "100%", // اجعل الهيدر بعرض الشاشة بالكامل
        position: "relative", // لضبط الموضع في حالة وجود عناصر إضافية
        overflow: "hidden", // تجنب أي تجاوزات من العناصر
      }}
    >
      <Container > {/* استخدام disableGutters لإزالة الهوامش الجانبية */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <IconButton onClick={toggleMode} color="inherit">
            {theme.palette.mode === "light" ? (
              <LightModeOutlinedIcon sx={{ fontSize: "16px", color: "#fff" }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ fontSize: "16px" }} />
            )}
          </IconButton>

          <List component="nav" aria-label="Device settings" sx={{ p: 0, m: 0 }}>
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                ":hover": {
                  cursor: "pointer",
                  bgcolor: "#2B3445",
                },
                px: 1,
              }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "10px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon sx={{ fontSize: "16px", color: "#fff" }} />
          <FacebookIcon sx={{ fontSize: "16px", mx: 1, color: "#fff" }} />
          <InstagramIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
}
