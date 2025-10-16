import { MantineProvider } from "@mantine/core";
import { Provider, useSelector } from "react-redux";
import store from "@/app/store";
import { selectThemeMode } from "../store/theme/theme.selector";

const MantineThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <MantineProvider
      theme={{ activeClassName: "" }}
      forceColorScheme={themeMode}
    >
      {children}
    </MantineProvider>
  );
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <MantineThemeProvider>
        {children}
      </MantineThemeProvider>
    </Provider>
  );
};

export default AppProvider;
