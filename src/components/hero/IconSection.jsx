import { Container, Box, Typography, Grid } from "@mui/material";
import {
  ElectricBoltOutlined,
  CreditScoreOutlined,
  WorkspacePremiumOutlined,
  AccessAlarmOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function IconSection() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 3 ,bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Grid
        container
        spacing={2} // المسافة بين العناصر
        justifyContent="center" // محاذاة العناصر في الوسط
      >
        {/* استخدام Grid لتقسيم العناصر */}
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            icon={<ElectricBoltOutlined fontSize="large" />}
            title={"Fast Delivery"}
            supTitle={"Start from $10"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            icon={<WorkspacePremiumOutlined fontSize="large" />}
            title={"Money Guarantee"}
            supTitle={"7 Days Back"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            icon={<AccessAlarmOutlined fontSize="large" />}
            title={"365 Days"}
            supTitle={"For free return"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            icon={<CreditScoreOutlined fontSize="large" />}
            title={"Payment"}
            supTitle={"Secure System"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, supTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",  // العرض 100% لضمان أن يأخذ كل عنصر المساحة المتاحة
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // محاذاة العناصر في الوسط
        flexGrow: 1,
        gap: 3, // المسافة بين العناصر داخل MyBox
        py: 1.6,
        border: `1px solid ${theme.palette.divider}`, // إضافة خط فاصل إذا رغبت في ذلك
        borderRadius: 2, // لجعل الزوايا مدورة
        backgroundColor: theme.palette.background.paper,
        mb: 2, // لون الخلفية
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {supTitle}
        </Typography>
      </Box>
    </Box>
  );
};
