import {
  Box,
  Container,
  Rating,
  Stack,
  Typography,
  useTheme,
  Grid,
  Dialog,
  IconButton,
  DialogContent,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import { useGetproductByNameQuery } from "../../Redux/product";

export default function Main() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setMyData(newValue);
    }
  };

  const allProductsAPI = "products?populate=*";
  const menProductsAPI = "products?filters[category][$eq]=Men&populate=*";
  const womenProductsAPI = "products?filters[category][$eq]=Women&populate=*";

  const theme = useTheme();
  const [myData, setMyData] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "primary.main",
              mb: 1,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            Selected Products
          </Typography>
          <Typography
            variant="body1"
            fontWeight={300}
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            }}
          >
            All Our New Arrivals In an Exclusive Selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            borderRadius: "20px !important",
            ".Mui-selected": {
              border: "1px solid rgb(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial  !important",
              fontSize: { xs: "0.8rem", md: "1rem" },
            },
          }}
        >
          <ToggleButton
            sx={{
              border: "1px solid ",
              borderColor: theme.palette.text.primary + " !important",
              borderRadius: "8px !important",
              color: theme.palette.text.primary,
            }}
            value={allProductsAPI}
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{
              mx: "15px !important",
              border: "1px solid  ",
              borderColor: theme.palette.text.primary + " !important",
              borderRadius: "8px !important",
              color: theme.palette.text.primary,
            }}
            value={menProductsAPI}
            aria-label="centered"
          >
            MEN Category
          </ToggleButton>
          <ToggleButton
            sx={{
              border: "1px solid ",
              borderColor: theme.palette.text.primary + " !important",
              borderRadius: "8px !important",
              color: theme.palette.text.primary,
            }}
            value={womenProductsAPI}
            aria-label="right aligned"
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack sx={{ mt: { xs: 4, md: 6 } }}>
        <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
          {data?.data?.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: { xs: "flex" }, justifyContent: "center" }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.02)",
                  },
                  "&:hover .MuiButton-root": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.attributes.productTitle || "Product"}
                  height="200"
                  image={
                    item.attributes.productImg?.data[0]?.attributes?.formats
                      ?.small?.url || "src/images/default.jpg"
                  }
                  sx={{
                    objectFit: "contain", // يحافظ على نسبة الصورة بدون اقتصاص
                    width: "100%", // يناسب العرض الكامل للكارت
                    height: "200px", // ارتفاع مضبوط حسب ما يناسب الكارت
                  }}
                />

                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {item.attributes.productTitle || "No title"}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      ${item.attributes.productPrice || "N/A"}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontWeight: 300, mb: 2 }}
                  >
                    {item.attributes.productDescription[0]?.children[0]?.text ||
                      "No description available"}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Rating
                      name={`product-rating-${item.id}`}
                      defaultValue={item.attributes.productRating || 4.5}
                      precision={0.1}
                      size="small"
                    />
                    <Button
                      onClick={() => handleClickOpen(item)}
                      color="primary"
                      size="small"
                      sx={{
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "primary.contrastText",
                          transform: "scale(1.05)",
                          transition: "transform 0.3s",
                        },
                      }}
                    >
                      <AddShoppingCartIcon sx={{ mr: 1 }} />
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {selectedProduct && (
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          onBackdropClick={handleClose}
          aria-describedby="product-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: "800px !important" },
              borderRadius: "16px",
              overflow: "hidden",
              bgcolor: theme.palette.background.paper,
            },
          }}
        >
          <IconButton
            sx={{
              "&:hover": {
                color: "red",
                rotate: "180deg",
                transition: "all 0.3s",
              },
              position: "absolute",
              top: 2,
              right: 3,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: 3,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src={
                  selectedProduct.attributes.productImg?.data[0]?.attributes
                    ?.formats?.medium?.url || "src/images/default.jpg"
                }
                alt={selectedProduct.attributes.productTitle || "Product image"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px", // تعديل الحواف لتبدو أكثر سلاسة
                  boxShadow: theme.shadows[1], // إضافة ظل لجعل الصورة أكثر بروزًا
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 2,
                paddingLeft: { xs: 0, md: 3 },
                marginTop: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {selectedProduct.attributes.productTitle}
              </Typography>
              <Typography
                variant="h5"
                letterSpacing={1.5}
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                ${selectedProduct.attributes.productPrice}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {
                  selectedProduct.attributes.productDescription[0]?.children[0]
                    ?.text
                }
              </Typography>
              {/* الصور الفرعية توضع هنا */}
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                {selectedProduct.attributes.productImg?.data?.map(
                  (img, index) => (
                    <img
                      key={index}
                      src={
                        img?.attributes?.formats?.thumbnail?.url ||
                        "src/images/default.jpg"
                      }
                      alt={`Product image ${index + 1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                        boxShadow: theme.shadows[1],
                        objectFit: "cover",
                        cursor: "pointer",
                        transition: "transform 0.3s",
                      }}
                      onClick={() => {
                        // Logic to change the main image when clicking a thumbnail (optional)
                        console.log(`Thumbnail ${index + 1} clicked`);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  )
                )}
              </Stack>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                <AddShoppingCartIcon sx={{ mr: 1 }} />
                Add to Cart
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
}
