import LoginBox from "./components/LoginBox";
import Home from "./components/Home";
import UrlRegist from "./components/UrlRegist";

export const routes = [
  {path: '/', component: Home},
  {path: '/login', component: LoginBox},
  {path: '/regist', component: UrlRegist}
];
