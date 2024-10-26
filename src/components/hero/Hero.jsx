import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const mySlider = [
  { text: "MEN", link: "/images/banner-15.jpg" },
  { text: "WOMEN", link: "/images/banner-25.jpg" },
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
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ position: "relative" }} // يجب وضعه في `Swiper` لاحتواء `position: absolute` بشكل صحيح
        >
          {mySlider.map((item) => (
            <SwiperSlide key={item.link} style={{ position: "relative" }}>
              <img
                src={item.link}
                alt={item.text}
                style={{
                  width: "100%",
                  height: "auto",
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
                  width: { xs: "90%", sm: "80%", md: "50%" },
                }}
              >
                <Typography variant="h6" sx={{ color: "#222" }}>
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography variant="h5" sx={{ color: "#222", fontWeight: 400, my: 1 }}>
                  {item.text}
                </Typography>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography variant="h5" sx={{ color: "#333", mr: 1 }}>
                    SALE UP TO
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#D23F57", mr: 1 }}>
                    30% OFF
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#000", fontWeight: 300, my: 1 }} variant="body1">
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
                    "&:hover": { bgcolor: "#151515", boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)" },
                  }}
                >
                  SHOP NOW
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
