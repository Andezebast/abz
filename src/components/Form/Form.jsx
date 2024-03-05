import React, { useState, useEffect } from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";

const Form = ({ setSuccessUser, fetchData }) => {
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState([]);
  const [fileValue, setFileValue] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`);
        setPositions(response.data.positions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const fetchToken = async () => {
      try {
        const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`);
        setToken(response.data.token);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchToken();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const positionID = positions.find((item) => data.position === item.name).id;
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position_id", positionID);
    formData.append("photo", data.file[0]);
    try {
      await axios.post("https://frontend-test-assignment-api.abz.agency/api/v1/users", formData, {
        headers: { token },
      });
      fetchData();
      setSuccessUser(true);
      setTimeout(() => {
        setSuccessUser(false);
      }, 5000);
    } catch (error) {
      console.error("Произошла ошибка при отправке POST-запроса:Ошибка запроса:", error);
    }
  };
  return (
    <div className="form">
      <div className="form-container container">
        <div className="form-title">
          <p className="title">Working with POST request</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input name">
            <input
              className={`description ${errors.name ? "error" : ""}`}
              type="text"
              id="name"
              placeholder="Your name"
              {...register("name", {
                minLength: 2,
                maxLength: 60,
                required: "Please, enter your first name",
              })}
            />
            {errors.name && <p className="form-error description-mini">{errors.name.message}</p>}
          </div>
          <div className="form-input email">
            <input
              className={`description ${errors.email ? "error" : ""}`}
              type="text"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Please, enter your first name",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "uncorrected email",
                },
              })}
            />
            {errors.email && <p className="form-error description-mini">{errors.email.message}</p>}
          </div>
          <div className="form-input phone">
            <InputMask
              {...register("phone", {
                required: "Please, enter your phone number",
              })}
              className={`description ${errors.phone ? "error" : ""}`}
              id="phone"
              placeholder="Phone"
              mask="+380999999999"
            />
            {errors.phone ? (
              <p className="form-error description-mini">{errors.phone.message}</p>
            ) : (
              <p className="form-description description-mini">+380 (XX) XXX - XX - XX</p>
            )}
          </div>
          <div className="form-radio">
            <div className="form-radio-title">
              <p className="description">Select your position</p>
            </div>
            <div className="form-radio-positions">
              {positions &&
                positions.map((radio, index) => (
                  <label key={index} htmlFor={radio.name}>
                    <input
                      {...register("position", {
                        required: "Please, choose position",
                      })}
                      type="radio"
                      value={radio.name}
                      id={radio.name}
                    />
                    <p className="description">{radio.name}</p>
                  </label>
                ))}
              {errors.position && <p className="form-error description-mini">{errors.position.message}</p>}
            </div>
          </div>
          <div className="form-file">
            <label htmlFor="file">
              <div className="form-file-upload">
                <p className="description">Upload</p>
              </div>
              <div className="form-file-value">
                <p className="description">{fileValue?.split("\\").pop() || "Upload your photo"}</p>
              </div>
              <input
                type="file"
                id="file"
                placeholder="Upload your photo"
                {...register("file", {
                  required: "Please, choose file",
                  onChange: (e) => {
                    setFileValue(e.target.value);
                  },
                })}
              />
            </label>
            {errors.file && <p className="form-error description-mini">{errors.file.message}</p>}
          </div>
          <div className="form-button">
            <button className="button">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
