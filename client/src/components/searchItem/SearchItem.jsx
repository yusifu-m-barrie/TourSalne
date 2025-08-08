// import { Link } from "react-router-dom";
// import "./searchItem.css";
//
// const SearchItem = ({ item }) => {
//   const photos = [
//     "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
//       "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
//       "https://www.visitsierraleone.org/wp-content/uploads/2017/11/DJI_0280.jpg"
//   ];
//   return (
//     <div className="searchItem">
//       <img src={item.photos[1]} alt="" className="siImg" />
//       <div className="siDesc">
//         <h1 className="siTitle">{item.name}</h1>
//         <span className="siDistance">{item.distance}m from center</span>
//         <span className="siTaxiOp">Free internet access</span>
//         <span className="siSubtitle">
//           Standard Apartment with Air conditioning
//         </span>
//         <span className="siFeatures">{item.desc}</span>
//         <span className="siCancelOp">Free cancellation </span>
//         <span className="siCancelOpSubtitle">
//           You can cancel later, so lock in this great price today!
//         </span>
//       </div>
//       <div className="siDetails">
//         {item.rating && <div className="siRating">
//           <span>Excellent</span>
//           <button>{item.rating}</button>
//         </div>}
//         <div className="siDetailTexts">
//           <span className="siPrice">Le{item.cheapestPrice}</span>
//           <span className="siTaxOp">Includes taxes and fees</span>
//           <Link to={`/hotels/${item._id}`}>
//           <button className="siCheckButton">See availability</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default SearchItem;


import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img
                src={item.photos && item.photos.length > 0 ? item.photos[0] : ""}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance} from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
            </div>
            <div className="siDetails">
                {item.rating && (
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                )}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
