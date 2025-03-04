import { Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route,Routes,BrowserRouter ,Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import ForgetPassword from "./pages/forms/ForgetPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import Footer from "./components/footer/Footer";
import CreatePost from "./pages/post/CreatePost";
import PostDetails from "./pages/post/PostDetails";
import { useSelector } from "react-redux";
import Category from "./pages/category/Category";
import ListePost from "./pages/profile/ListePost";
import Profile from "./pages/profile/Profile"
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoriesTable from "./pages/admin/CategoriesTable";
import UsersTable from "./pages/admin/UsersTable";
import PostsTable from "./pages/admin/PostsTable";
import CommentsTable from "./pages/admin/CommentsTable";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import UpdatePost from "./pages/post/UpdatePost";
import ViewProfile from "./pages/profile/ViewProfile";
function App() {
  const {user}=useSelector(state=>state.auth)
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route  path="/profile/:id/liste-post" element={<ListePost/>}/>
        <Route path="posts/detais/:id" element={<PostDetails/>}/>
        <Route path="/register" element={ !user ?<Register/> : <Navigate to="/"/>}/>
        <Route path="/users/:userId/verify/:token"  element={!user ?<VerifyEmail/> : <Navigate to="/"/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/reset-password/:userId/:token" element={<ResetPassword/>}/>
        <Route path="/login" element={ !user ?<Login/> : <Navigate to="/"/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/view-profile/:id" element={<ViewProfile/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/posts/update-post" element={<UpdatePost/>}/>
        <Route path="/posts/categories/:category" element={<Category/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin/categories-table" element={<CategoriesTable/>}/>
        <Route path="/admin/users-table" element={<UsersTable/>}/>
        <Route path="/admin/post-table" element={<PostsTable/>}/>
        <Route path="/admin/comment-table" element={<CommentsTable/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
