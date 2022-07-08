import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";

export default function App() {
  return (
    // <UserProvider>
    //   <Router />
    // </UserProvider>
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
