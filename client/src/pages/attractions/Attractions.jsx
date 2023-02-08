
import Featured1 from "../../components/featured1/Featured1";
// import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
// import Footer from "../../components/footer/Footer";
import AttractHeader from "../../components/attractHeader/AttractHeader";
// import MailList from "../../components/mailList/MailList";
import AttractNavbar from "../../components/attractNavbar/AttractNavbar";
import AttractPropertyList from "../../components/attractPropertyList/AttractPropertyList";
import "./attractions.css";

const Attractions = () => {
  return (
    <div>

    <AttractNavbar />
    <AttractHeader />
    <div className="homeContainer">
    <Featured1 />
    <h1 className="homeTitle">Browse by property type</h1>
    <AttractPropertyList />
    <h1 className="homeTitle">Top Trending Hotels</h1>
    </div>
    </div>
    // <div>
    //   <Navbar />
    //   <Header/>
    //   <div className="homeContainer">
    //     <Featured/>
    //     <h1 className="homeTitle">Browse by property type</h1>
    //     <PropertyList/>
    //     <h1 className="homeTitle">Top Trending Hotels</h1>
    //     <FeaturedProperties/>
    //     <MailList/>
    //     <Footer/>
    //   </div>
    // </div>
  );
};

export default Attractions;