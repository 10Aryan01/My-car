import React, { useEffect, useState } from "react";
import {
  IconCar,
  IconInfoCircleFilled,
  IconX,
  IconMapPinFilled,
  IconCalendarEvent,
} from "@tabler/icons-react";

import Creta from "../images/cars-big/Hyundai Creta.png";
import Fortuner from "../images/cars-big/Toyota Fortuner.png";
import Harrier from "../images/cars-big/Tata harrier.png";
import Fronx from "../images/cars-big/Fronx Maruti Suzuki.jpg";
import Mahin from "../images/cars-big/Mindra SUV 500.png";
import Ertica from "../images/cars-big/Ertica.png";

const carImages = {
  "Hyundai Creta": Creta,
  "Toyota Fortune": Fortuner,
  "Tata harrier": Harrier,
  "Maruti Suzuki Fronx": Fronx,
  "Mahindra XUV500": Mahin,
  "Suzuki Ertiga": Ertica,
};

const locations = ["Guwahati", "Jorhat", "Nogaon", "Sivsagar", "Dibrugarh"];

function BookCar() {
  const [modal, setModal] = useState(false);

  const [bookingData, setBookingData] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
    carImg: "",
  });

  const [modalInfo, setModalInfo] = useState({
    name: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const handleInputChange = (field, value) => {
    setBookingData({ ...bookingData, [field]: value });
  };

  const handleModalInputChange = (field, value) => {
    setModalInfo({ ...modalInfo, [field]: value });
  };

  const handleCarSelect = (e) => {
    const carType = e.target.value;
    setBookingData({ ...bookingData, carType, carImg: carImages[carType] });
  };

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (Object.values(bookingData).some((field) => field === "")) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select
                    value={bookingData.carType}
                    onChange={(e) => handleCarSelect(e)}
                  >
                    <option>Select your car type</option>
                    {Object.keys(carImages).map((carType) => (
                      <option key={carType} value={carType}>
                        {carType}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select
                    value={bookingData.pickUp}
                    onChange={(e) => handleInputChange("pickUp", e.target.value)}
                  >
                    <option>Select pick up location</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <select
                    value={bookingData.dropOff}
                    onChange={(e) => handleInputChange("dropOff", e.target.value)}
                  >
                    <option>Select drop off location</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={bookingData.pickTime}
                    onChange={(e) => handleInputChange("pickTime", e.target.value)}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={bookingData.dropTime}
                    onChange={(e) => handleInputChange("dropTime", e.target.value)}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <IconX onClick={openModal} style={{ cursor: "pointer" }} />
        </div>

        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry,
            you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              {["Pick-Up", "Drop-Off"].map((label) => (
                <span key={label}>
                  <IconMapPinFilled />
                  <div>
                    <h6>
                      {label} Date & Time
                    </h6>
                    <p>
                      {label === "Pick-Up"
                        ? bookingData.pickTime
                        : bookingData.dropTime}{" "}
                      / <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              ))}
            </div>

            {["Pick-Up", "Drop-Off"].map((label) => (
              <div key={label} className="booking-modal__car-info__dates">
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>
                      {label} Location
                    </h6>
                    <p>
                      {label === "Pick-Up"
                        ? bookingData.pickUp
                        : bookingData.dropOff}
                    </p>
                  </div>
                </span>
              </div>
            ))}
          </div>

          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {bookingData.carType}
            </h5>
            {bookingData.carImg && <img src={bookingData.carImg} alt="car_img" />}
          </div>
        </div>

        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              {[
                { label: "First Name", field: "name" },
                { label: "Last Name", field: "lastName" },
                { label: "Phone Number", field: "phone" },
                { label: "Age", field: "age" },
              ].map(({ label, field }) => (
                <span key={field}>
                  <label>
                    {label} <b>*</b>
                  </label>
                  <input
                    value={modalInfo[field]}
                    onChange={(e) => handleModalInputChange(field, e.target.value)}
                    type={field === "phone" ? "tel" : "text"}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  ></input>
                  <p className="error-modal">
                    This field is required.
                  </p>
                </span>
              ))}
            </div>

            <div className="info-form__1col">
              {[
                { label: "Email", field: "email" },
                { label: "Address", field: "address" },
              ].map(({ label, field }) => (
                <span key={field}>
                  <label>
                    {label} <b>*</b>
                  </label>
                  <input
                    value={modalInfo[field]}
                    onChange={(e) => handleModalInputChange(field, e.target.value)}
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  ></input>
                  <p className="error-modal">
                    This field is required.
                  </p>
                </span>
              ))}
            </div>

            <div className="info-form__2col">
              {[
                { label: "City", field: "city" },
                { label: "Pin Code", field: "zipcode" },
              ].map(({ label, field }) => (
                <span key={field}>
                  <label>
                    {label} <b>*</b>
                  </label>
                  <input
                    value={modalInfo[field]}
                    onChange={(e) => handleModalInputChange(field, e.target.value)}
                    type="text"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  ></input>
                  <p className="error-modal">
                    This field is required.
                  </p>
                </span>
              ))}
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
