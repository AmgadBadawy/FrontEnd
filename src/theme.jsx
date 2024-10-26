import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// دالة لإنشاء إعدادات التصميم بناءً على الوضع (light/dark)
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // ألوان الوضع النهاري
          myColor: {
            main: "#F6F9FC",
          },
          bg: {
            main: "#F6F6F6",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
          footer: {
            main: "#fff",
          },
        }
      : {
          // ألوان الوضع الليلي
          myColor: {
            main: "#2B2b32",
          },
          bg: {
            main: "#1D2021",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          footer: {
            main: "#000",
          },
        }),
  },
});

// سياق لتخزين وتغيير وضع الألوان (light/dark)
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// هوك لتخزين وإدارة الوضع (light/dark)
export const useMode = () => {
  const [mode, setMode] = useState("light");

  // استرجاع الوضع المحفوظ من localStorage عند تحميل الصفحة
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // إنشاء دالة لتغيير الوضع وتخزينه في localStorage
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode); // حفظ الوضع الجديد
          return newMode;
        });
      },
    }),
    []
  );

  // إنشاء الثيم بناءً على الوضع
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};
