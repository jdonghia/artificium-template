import Router from "src/router";
import { GlobalStyleProvider } from "src/store";

export default function App() {
  return (
    <GlobalStyleProvider>
      <Router />
    </GlobalStyleProvider>
  );
}
