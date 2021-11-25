import LoginBox from "./components/LoginBox";
import Home from "./components/Home";
import UrlRegist from "./components/UrlRegist";
import RegistBox from "./components/RegistBox";

export const routes = [
  {path: '/', component: Home},
  {path: '/UserLogin', component: LoginBox},
  {path: '/UserRegist', component: RegistBox},
  {path: '/UrlRegist', component: UrlRegist}
];
