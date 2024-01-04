import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { CAR_DATA } from "../components/CarData";
import { Link } from "react-router-dom";
import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {CAR_DATA.map((carDetails, index) => (
              <div key={index} className="models-div__box">
                <div className="models-div__box__img">
                  <div className="only_image">
                  <img src={carDetails[0].img} alt="car_img" />
                  </div>
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{carDetails[0].name}</p>
                        <span>
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>{`Rs ${carDetails[0].price}`}</h4>
                        <p>per hour</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <div style={{
                        display: "flex",
                        fontSize: "1.3vh",
                        gap: "1vw"
                      }}>
                        <IconCar width={35} height={35} />  {carDetails[0].model}
                      </div>
                      <div style={{
                        display: "flex",
                        fontSize: "1.3vh",
                        justifyContent: "right",
                        alignItems: "center",
                        gap: "1.5vw"
                      }}>
                        {`${carDetails[0].doors}  `}  <IconCar width={30} height={30} />
                      </div>
                      <div style={{
                        display: "flex",
                        fontSize: "1.7vh",
                        justifyContent: "left",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "2.4vw"


                      }}>
                        <IconCar />  {carDetails[0].transmission}
                      </div>
                      <div style={{
                        display: "flex",
                        fontSize: "1.7vh",
                        justifyContent: "right",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "1vw"

                      }}>
                        {`${carDetails[0].fuel} `}<IconCar />
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+91) 6001012501</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
