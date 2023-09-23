import NavBar from "../Components/NavBar";
import grafikDesigner from "../Images/grafik-designer.png";
import emojiLady from "../Images/emoji-lady.png";
import emojiMan from "../Images/emoji-man.png";
import { useFormik } from "formik";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import Button from "../Components/Button";
import BlurCircle from "../Components/BlurCircle";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useFetch from "../hooks/useFetch";

function Registration() {
  const {post} = useFetch()
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({});
  
  // OPEN MODAL
  function openModal() {
    setModalState(true);
  }

  // CLOSE MODAL
  function closeModal() {
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
            email:"",
            phone_number:"",
            team_name: "",
            group_size:0,
            project_topic:"",
            category:0,
            privacy_poclicy_accepted:""
    },
    validationSchema: Yup.object({
        team_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      email: Yup.string()
        .email("invalid email address")
        .required("This field is required"),
        phone_number : Yup.string()
        .required("This field is required"),
        project_topic : Yup.string()
        .required("This field is required"),
       category : Yup.number()
        .required("This field is required"),
        group_size : Yup.number()
        .required("This field is required"),
        privacy_poclicy_accepted : Yup.string()
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      values.category = parseInt(values.category);
      values.group_size = parseInt(values.group_size);
     let responseBody =  post(`/hackathon/registration`,values)
    console.log(responseBody)
      openModal()
    },
  });


  return (
    <main className="reg-container text-base bg-primary-purple overflow-hidden">
      <NavBar />
      <Text
        text="Register"
        textStyle=" text-smallTwo md:hidden text-bright-purple text-sbmedium font-bold ml-16 mt-10"
      />
      <div className="flex flex-col justify-evenly md:flex-row py-28 ">
        <div className="md:w-5/12">
          <BlurCircle blurStyle="circle rounded-full w-4/5 md:w-1/4 h-80 bg-dark-purple absolute md:-left-1 -left-28 mt-72 md:mt-0" />
          <img
            src={grafikDesigner}
            alt="graphic designer"
            className="relative z-10"
          ></img>
        </div>
        <div className="bg-grey bg-opacity-5 md:bg-opacity-25 rounded-md w-full lg:w-6/12 flex flex-col text-white p-14">
          <div>
            <Text
              text="Register"
              textStyle="hidden md:block text-bright-purple text-sbmedium font-bold"
            />
            <div className="flex items-end">
              <SmallText
                smallText="Be part of this movement"
                smallTextStyle=" text-smallest md:text-smallTwo"
              />
              <div className="border border-dashed border-t-0 border-r-0 border-l-0 w-36 justify-center border-bright-purple  flex">
                <img src={emojiLady} alt="walking emoji"></img>
                <img src={emojiMan} alt="walking emoji"></img>
              </div>
            </div>

            <Text
              text="CREATE YOUR ACCOUNT"
              textStyle="text-medium md:text-sbmedium"
            />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center md:justify-between items-start text-white md:mt-20"
          >
            <div className="w-full justify-between flex flex-col md:flex-row md:mb-10">
              <div className="md:w-5/12 flex flex-col">
                <label htmlFor="Team's Name" className="text-smallTwo">
                  Team's Name
                </label>
                <input
                  className="bg-grey bg-opacity-25 p-4 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                  type="text"
                  placeholder="Enter the name of your group"
                  id="TeamName"
                  value={formik.values.team_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="team_name"
                ></input>
                {formik.touched.team_name && formik.errors.team_name ? (
                  <p className="text-red">{formik.errors.team_name}</p>
                ) : null}
              </div>
              <div className="md:w-5/12 flex flex-col">
                <label htmlFor="phone" className="text-smallTwo">
                  Phone
                </label>
                <input
                  className="bg-grey p-4  bg-opacity-25 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="phone_number"
                ></input>
                 {formik.touched.phone_number && formik.errors.phone_number ? (
                  <p className="text-red">{formik.errors.phone_number}</p>
                ) : null}
              </div>
            </div>

            <div className="w-full justify-between flex flex-col md:flex-row md:mb-10">
              <div className=" md:w-5/12 flex flex-col">
                <label htmlFor="email" className="text-smallTwo">
                  Email
                </label>
                <input
                  className="bg-grey  bg-opacity-25 p-4 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                  type="email"
                  placeholder="Enter your email address"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                ></input>
                 {formik.touched.email && formik.errors.email ? (
                  <p className="text-red">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className=" md:w-5/12 flex flex-col">
                <label htmlFor="topic" className="text-smallTwo">
                  Project Topic
                </label>
                <input
                  className="bg-grey  bg-opacity-25 p-4 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                  type="text"
                  id="topic"
                  placeholder="What is your project topic"
                  value={formik.values.project_topic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="project_topic"
                ></input>
                 {formik.touched.project_topic && formik.errors.project_topic ? (
                  <p className="text-red">{formik.errors.project_topic}</p>
                ) : null}
              </div>
            </div>

            <div className=" w-full justify-between flex flex-row md:mb-10">
              <div className="text-black flex flex-col md:w-5/12 w-7/12">
                <label htmlFor="category" className="text-white text-smallTwo">
                  Category
                </label>
                <select
                  value={parseInt(formik.values.category)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="category"
                  id="category"
                  className="bg-grey bg-opacity-25 p-4 rounded-md border border-white outline-none text-white text-smallTwo my-4 md:my-0"
                >
                  <option value={1} className="bg-grey">
                    1
                  </option>
                  <option value={2} className="bg-grey">
                    2
                  </option>
                  <option value={3} className="bg-grey">
                    3
                  </option>
                  <option value={4} className="bg-grey">
                    4
                  </option>
                  <option value={5} className="bg-grey">
                    5
                  </option>
                  <option value={6} className="bg-grey">
                    6
                  </option>
                  <option value={7} className="bg-grey">
                    7
                  </option>
                  <option value={8} className="bg-grey">
                    8
                  </option>
                  <option value={9} className="bg-grey">
                    9
                  </option>
                  <option value={10} className="bg-grey">
                    10
                  </option>
                  <option value={12} className="bg-grey">
                    11
                  </option>
                  <option value={13} className="bg-grey">
                    12
                  </option>
                </select>
                {formik.touched.category && formik.errors.category ? (
                  <p className="text-red">{formik.errors.category}</p>
                ) : null}
              </div>

              <div className="flex flex-col text-black md:w-5/12 w-4/12 ">
                <label htmlFor="size" className="text-white text-smallTwo">
                  Group Size
                </label>
                <select
                  value={formik.values.group_size}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="group_size"
                  id="size"
                  className="bg-grey bg-opacity-25 p-4 rounded-md border border-white outline-none text-white text-smallTwo my-4 md:my-0"
                >
                  <option value= ""className="bg-grey">
                    1
                  </option>
                  <option value = "5" className="bg-grey">
                    5
                  </option>
                  <option value= "10" className="bg-grey">
                    10
                  </option>
                  <option value= "20"className="bg-grey">
                    20
                  </option>
               
                </select>
                {formik.touched.group_size && formik.errors.group_size ? (
                  <p className="text-red">{formik.errors.group_size}</p>
                ) : null}
              </div>
            </div>

            <SmallText
              smallText="Please review your registration details before submitting"
              smallTextStyle="w-full text-center md:text-left text-purple text-smallest italic mt-6 md:mt-0"
            />
            <div className="flex w-full md:w-8/12 justify-between items-start md:items-center mt-6">
              <input
                value={formik.values.privacy_poclicy_accepted}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="privacy_poclicy_accepted"
                type="checkbox"
                className="checkbox text-dark-purple mt-2 md:mt-0"
              ></input>
              <label className="text-smallest ml-3 md:ml-0">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <Button
              btnType="submit"
              buttonText="Register Now"
              btnStyle="hidden md:block relative z-10 bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md mt-10"
            />
            <Button
              btnType="submit"
              buttonText="Submit"
              btnStyle="md:hidden relative z-10 bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md mt-10 w-6/12 mx-auto"
            />
          </form>
        </div>
        <BlurCircle blurStyle="hidden md:block circle rounded-full w-1/4 h-80 bg-dark-purple absolute ml-auto md:right-1 md:bottom-5" />
        {modalState && <Modal closeModal={closeModal} />}
      </div>
    </main>
  );
}

export default Registration;
