import { ArrowForwardOutlined } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import IconSection from "./IconSection";
const mySlider = [
  { text: "MEN", link: "./images/banner-15.jpg" },
  { text: "WOMEN", link: ".//images/banner-25.jpg" },
];
export default function Hero() {
  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexDirection: { xs: "column", md: "row" }, // عمودي على الشاشات الصغيرة، أفقي على الشاشات الكبيرة
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link}>
                <img
                  src={item.link}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto", // اجعل الصورة متجاوبة
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                    textAlign: "left",
                    zIndex: 9999,
                    width: { xs: "90%", sm: "80%", md: "50%" }, // عرض مناسب لجميع الشاشات
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#222" }}>
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant="h5" sx={{ color: "#333", mr: 1 }}>
                      SALE UP TO
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#D23F57", mr: 1 }}
                    >
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping On Orders Over $99.00
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "5px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.6%" }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: 31,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", fontSize: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s ease-in-out",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                SHOW NOW
                <ArrowForwardOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: 31,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px", mb: 1 }}
              >
                GAMING 4K
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                DESKTOPS &
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s ease-in-out",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                SHOW NOW
                <ArrowForwardOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}
