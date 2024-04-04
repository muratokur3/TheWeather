import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
