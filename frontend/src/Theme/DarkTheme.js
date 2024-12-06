// import hàm createTheme
const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
  // thiết lập chế độ màu là dark
  palette: {
    mode: "dark",
    primary: {
      //màu chính giao diện
      main: "#21A691",
    },
    secondary: {
      //màu phụ
      main: "#87DF2C",
    },
    black: {
      main: "#27403E",
    },
    background: {
      main: "#060D10",
      default: "#060D10",
      paper: "#27403E",
    },
    textColor: {
      // màu văn bản
      main: "#B4B4B2",
    },
  },
});
