// @ts-nocheck
import { ExpandMore, Search as SearchIcon, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  IconButton,
  InputBase,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// Styled search container
const SearchContainer = styled("div")(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  minWidth: "100%",
  maxWidth: "600px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    minWidth: "300px",
    width: "auto",
  },
}));

// Styled search icon wrapper
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

// Styled input base
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Styled badge for shopping cart icon
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen size is small

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

  const options = ["All Categories", "Cars", "Clothes", "Electronics"];

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        flexDirection: "row",
      }}
    >
      <Stack
        direction={isSmallScreen ? "column" : "row"} // Change direction based on screen size
        alignItems="center"
        spacing={0.5}
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          justifyContent: { xs: "center", sm: "flex-start" },
          mb: { xs: 1, sm: 0 },
        }}
      >
        <ShoppingCartOutlined sx={{ fontSize: 30 }} />
        <Typography
          variant="body2"
          sx={{
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          E-commerce
        </Typography>
      </Stack>

      <SearchContainer
        sx={{
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
          maxWidth: "600px",
          minWidth: { xs: "200px", sm: "300px" },
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="categories"
            sx={{
              bgcolor: theme.palette.myColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: 0,
            }}
          >
            <ListItem
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="selected category"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  width: "93px",
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
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
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </SearchContainer>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ display: "flex" }}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={1} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="user">
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
