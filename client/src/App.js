import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Attractions from "./pages/attractions/Attractions";

// const isMobileDevice = useMediaQuery({
//   query: "(min-device-width: 480px)",
// });

// const isTabletDevice = useMediaQuery({
//   query: "(min-device-width: 768px)",
// });

// const isLaptop = useMediaQuery({
//   query: "(min-device-width: 1024px)",
// });

// const isDesktop = useMediaQuery({
//   query: "(min-device-width: 1200px)",
// });

// const isBigScreen = useMediaQuery({})

function App() {
  return (
//     {isMobileDevice && <Mobile />}
//   {isTabletDevice && <>
//   <TabletMobile />
//   {isDesktop && <Desktop />}
//   {isLaptop && <Laptop />}
//   {isBigScreen && <BigScreen />}
// </>}; 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/attractions" element={<Attractions/>}/>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
