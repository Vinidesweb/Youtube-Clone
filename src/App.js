import { MenuProvider, useMenu } from "./Context/menuContext";
import { UserStorage } from "./Context/userContext";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header";
import CategoryBar from "./components/categoryBar";
import Menu from "./components/menu";
import Home from "./pages/home";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CreateVideo from "./pages/createVideo";
import YourVideo from "./pages/yourVideo";
import Search from "./pages/search";

function MainLayout() {
  const { openMenu, isMobile } = useMenu();

  return (
    <>
      <Header />
      <div style={{ width: '100%', display: 'flex', marginTop: '55px' }}>
        <Menu />
        <div style={{ minWidth: 0, flex: 1, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', padding: isMobile ? '8px 12px' : (openMenu ? '8px 20px' : '8px 40px'), boxSizing: 'border-box', position: 'sticky', top: 55, backgroundColor: '#fff', zIndex: 997 }}>
            <CategoryBar />
          </div>
          <div style={{ width: '100%', padding: isMobile ? '12px' : (openMenu ? '16px 20px' : '16px 40px'), boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

function AuthLayout() {
  return <Outlet />;
}

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <UserStorage> 
          <div className="App">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/history" element={<History />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/your-video" element={<YourVideo />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Home />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/create-video" element={<CreateVideo />} />
              </Route>
            </Routes>
          </div>
        </UserStorage>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;