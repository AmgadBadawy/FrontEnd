import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
// eslint-disable-next-line react/prop-types
export default function Links({ title }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 10,
        "&:hover .show-when-hover": {
          display: "block",
        },
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List sx={{ pt: 0, pb: 0, alignItems: "center" }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <List sx={{ pt: 0, pb: 0, alignItems: "center" }}>
              <ListItem
                sx={{
                  ":hover .sub-link": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Products"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  className="sub-link"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,
                          }}
                        >
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": {
                                fontSize: "15px",
                                fontWeight: 300,
                              },
                            }}
                            primary="Add Product"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,
                          }}
                        >
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": {
                                fontSize: "15px",
                                fontWeight: 300,
                              },
                            }}
                            primary="Edit Product"
                          />
                        </ListItemButton>
                      </ListItem>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
            </List>
            <List sx={{ pt: 0, pb: 0, alignItems: "center" }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Order"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <List sx={{ pt: 0, pb: 0, alignItems: "center" }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
