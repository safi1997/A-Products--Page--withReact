import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import "../src/Components/Home/Home.css";

function Products() {
  return (
    <>
      <div className="container-fluid">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="121314"
            title="SAMSUNG T7 Portable SSD 2TB - Up to 1050MB/s"
            price={21.95}
            rating={5}
            image="https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?b=1&s=612x612&w=0&k=20&c=BNpD_7XjQ6GSMdT70roMnUfoqhNc4iC-CVhPcP_6IoY="
          />
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={11.96}
            rating={3}
            image="https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?b=1&s=612x612&w=0&k=20&c=8YIRG2NgMZpk9sO4lUff3sBrn7_ks53u9OmxMgnqHzs="
          />
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={15.6}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="121314"
            title="SAMSUNG T7 Portable SSD 2TB - Up to 1050MB/s"
            price={21.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31GEY-L018L._AC_SR400,600_.jpg"
          />
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={11.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
          />
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={15.6}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
          />
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={15.6}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={15.6}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
          />
          <Product
            id="121314"
            title="The Lean Startup: How Contant Innovation"
            price={15.6}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
