import Router from "src/router";
import { GlobalStyleProvider, LoadScreenProvider } from "src/store";

export default function App() {
  return (
    <GlobalStyleProvider>
      <LoadScreenProvider>
        <Router />
      </LoadScreenProvider>
    </GlobalStyleProvider>
  );
}
