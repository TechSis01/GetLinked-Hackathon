import NavBar from "../Components/NavBar";
import { useFormik } from "formik";
import * as Yup from "yup";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import Button from "../Components/Button";
import BlurCircle from "../Components/BlurCircle";
import {RiTwitterXFill} from "react-icons/ri"
import {FaFacebookF} from "react-icons/fa"
import {GrLinkedinOption} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function Contact() {
  const {post} = useFetch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      phone_number:"",
      first_name: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      email: Yup.string()
        .email("invalid email address")
        .required("This field is required"),
       message : Yup.string()
        .required("This field is required"),
       phone_number : Yup.string()
       .min(11, "Must be 11 characters")
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      let responseBody = post("/hackathon/contact-form",values)
      navigate("/")
    },
  });


  return (
    <main className="text-base bg-primary-purple relative overflow-hidden ">
      <NavBar />
      <div className="flex flex-col justify-evenly lg:flex-row py-28 md:px-36">
        <div className="md:w-5/12 mt-14 hidden md:block">
          <BlurCircle blurStyle="circle rounded-full w-4/5 md:w-1/4 h-80 bg-dark-purple absolute md:-left-1 -left-28 mt-72 md:mt-0" />
          <div className="relative z-10 text-white">
            <Text
              text="Get in touch"
              textStyle="text-bright-purple font-bold text-sbmedium "
            />
            <SmallText smallText="Contact Information " smallTextStyle="mt-14 w-1/4"/>
            <SmallText smallText="27,Alara Street Yaba 100012 Lagos State" smallTextStyle="mt-14 w-1/4" />
            <SmallText smallText="Call Us : 07067981819" smallTextStyle="mt-14"/>
            <SmallText smallText="we are open from Monday-Friday 08:00am - 05:00pm" smallTextStyle="mt-14 w-3/5"/>
            <SmallText smallText="Share on" smallTextStyle="text-bright-purple mt-14" />
            <div className="flex items-center mt-10 justify-between w-1/4">
                <a href=""><BsInstagram className="text-white"/></a>
                <a href=""><RiTwitterXFill className="text-white"/></a>
                <a href=""><FaFacebookF className="text-white"/></a>
                <a href=""><GrLinkedinOption className="text-white"/></a>
            </div>
          </div>
        </div>
        <div className="bg-grey bg-opacity-5 md:bg-opacity-25 rounded-md w-full lg:w-6/12 flex flex-col text-white p-14">
          <div className="text-medium md:text-sbmedium">
            <Text
              text="Questions or need assistance"
              textStyle="text-bright-purple text-medium font-bold "
            />
            <Text
              text="Let us know about it!"
              textStyle=" text-bright-purple text-medium font-bold"
            />
          </div>
          <form  onSubmit={formik.handleSubmit} className="flex flex-col justify-center md:justify-between items-start text-white">
            <Text text="Email us below to any question related to our event"textStyle="md:hidden my-10"/>
            <div className="w-full md:w-11/12 flex flex-col">
              <input
                className="bg-grey bg-opacity-25 p-4 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                type="text"
                placeholder="First Name"
                id="TeamName"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
                {formik.touched.first_name && formik.errors.first_name ? (
                  <p className="text-red">{formik.errors.first_name}</p>
                ) : null}
            </div>

            <div className="w-full md:w-11/12 flex flex-col">
              <input
                className="bg-grey bg-opacity-25 p-4 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                type="text"
                placeholder="Phone Number"
                id="TeamName"
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
                {formik.touched.phone_number && formik.errors.phone_number ? (
                  <p className="text-red">{formik.errors.phone_number}</p>
                ) : null}
            </div>

            <div className="w-full md:w-11/12 flex flex-col mt-16 ">
              <input
                className="bg-grey p-4  bg-opacity-25 rounded-md border border-white outline-none text-smallTwo my-4 md:my-0"
                type="text"
                id="phone"
                placeholder="Mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red">{formik.errors.email}</p>
                ) : null}
            </div>

            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Message"
              cols="48"
              rows="7"
              className="bg-grey p-4 mt-16 bg-opacity-25 rounded-md border outline-none w-full md:w-auto"
            ></textarea>
              {formik.touched.message && formik.errors.message ? (
                  <p className="text-red">{formik.errors.message}</p>
                ) : null}
          <Button
             btnType="submit"
            buttonText="Submit"
            btnStyle="relative z-10 bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md mt-10 w-6/12 mx-auto"
          />
          </form>
        </div>
        <div className="md:hidden w-10/12 mx-auto text-center">
        <SmallText smallText="Share on" smallTextStyle=" text-bright-purple mt-14" />
            <div className="flex items-center mt-10 justify-between w-1/4 text-center mx-auto">
                <a href=""><BsInstagram className="text-white"/></a>
                <a href=""><RiTwitterXFill className="text-white"/></a>
                <a href=""><FaFacebookF className="text-white"/></a>
                <a href=""><GrLinkedinOption className="text-white"/></a>
            </div>
          </div>
        <BlurCircle blurStyle="hidden md:block circle rounded-full w-1/4 h-80 bg-dark-purple absolute ml-auto md:right-1 md:bottom-5" />
      </div>
    </main>
  );
}

export default Contact;
