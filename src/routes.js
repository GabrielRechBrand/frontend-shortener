import LoginBox from "./components/LoginBox";
import Home from "./components/Home";
import UrlRegist from "./components/UrlRegist";
import RegistBox from "./components/RegistBox";
import EditUrl from "./components/EditUrl";

export const routes = [
  {path: '/', component: Home},
  {path: '/UserLogin', component: LoginBox},
  {path: '/UserRegist', component: RegistBox},
  {path: '/UrlRegist', component: UrlRegist},
  {
    path: '/UrlEdit',
    component: EditUrl,
    children:  [
      {path:'/UrlEdit/:id?', component: EditUrl}
    ]}
];
