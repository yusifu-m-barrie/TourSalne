import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=freetown,makeni,bo"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
        <img
          src="https://tourismsierraleone.com/wp-content/uploads/2021/08/Freetown2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Freetown</h1>
          <h2>{data[0]}properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Makeni_Wusum.JPG"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Makeni</h1>
          <h2>{data[1]}properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.visitsierraleone.org/wp-content/uploads/2021/08/doha-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bo</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default Featured;
