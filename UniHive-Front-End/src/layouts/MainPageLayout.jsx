import { TbZoomMoney } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineInsertChart } from "react-icons/md";
import { Outlet } from "react-router-dom";
import ClippedDrawer from "../components/ClippedDrawer";
import ResponsiveAppBar from "../components/NavBar";
import Post from "../components/Post";
import ChatBox from "../components/ChatBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.jsx";
import { useSelector } from "react-redux";
//import PostShare from '../components/PostShare';

export default function MainPageLayout() {
  const { loading, userInfo, userToken, error, success } = useSelector(
    (state) => state.auth
  );
  console.log(userInfo);
  console.log(userToken);
  return (
    <div>
      <ResponsiveAppBar />
      <ClippedDrawer />

      <Post />

      <ChatBox />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
