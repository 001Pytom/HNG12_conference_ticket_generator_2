import { useForm } from "react-hook-form";
import formImage from "../data/images/form/formImg.png";
import Image from "../ui/Image";
import SelectBtn from "../components/SelectBtn";
import Line from "../ui/Line";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ui/ErrorMessage";
import { useEffect, useState } from "react";
import { uploadImageToCloudinary } from "../utils/Cloudinary";
import { useUserForm } from "../utils/UserFormContext";

function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    errors,
    imageUrl,
    setImageUrl,
    imageError,
    setImageError,
    ticket,
    setTicket,
  } = useUserForm();

  const onSubmit = (data) => {
    if (!imageUrl) {
      setImageError("Profile image is required.");
    } else {
      localStorage.setItem("conferenceForm", JSON.stringify(data));
      setTicket(data);
      setImageError("");
      navigate("/ticket");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadImageToCloudinary(file);
        setImageUrl(imageUrl);
        setValue("prImage", imageUrl);
        console.log("Uploaded Image URL:", imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 font-roboto"
    >
      <div className="w-full roundex-3xl mt-3 pb-4 px-2 md:pt-6 md:pb-12 md:px-8 border bg-bgcTikectsBox border-custom flex flex-col gap-12  ">
        <p>Upload Profile Photo</p>
        <div className="w-full h-[200px] bg-bgcTicketImage flex justify-center items-center">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}

            // {...register("prImage", { required: "Image Upload Is required" })}
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer px-4 py-2 text-white rounded-lg"
          >
            {imageUrl ? (
              // <div className="w-full max-w-[240px] border border-primary p-6 rounded-[32px]">
              <Image
                src={imageUrl}
                alt="formImage"
                className="w-[240px] max-h-[240px] h-full border-4 border-white  rounded-[32px] transition-all duration-1000 hover:opacity-60"
              />
            ) : (
              // </div>
              <Image src={formImage} alt="formImage" />
            )}
          </label>
        </div>
      </div>
      <ErrorMessage message={imageError} />
      <Line />

      <div className="flex flex-col gap-2">
        <label>Enter your name</label>
        <input
          className="w-full p-3 border border-custom rounded-lg outline-none bg-transparent"
          {...register("name", { required: "Full name is required" })}
        />
        {<ErrorMessage message={errors.name?.message} />}
      </div>

      <div className="flex flex-col gap-2">
        <label>Enter your email *</label>
        <input
          className="w-full p-3 border border-custom rounded-lg outline-none bg-transparent"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address, Enter a Valid Email Address",
            },
          })}
        />
        {<ErrorMessage message={errors.email?.message} />}
      </div>

      <div className="flex flex-col gap-2">
        <label>About The Project</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          className="w-full p-3 border border-custom rounded-lg outline-none bg-transparent"
          {...register("message", { required: "Tell us about your project" })}
          placeholder="Textarea"
        ></textarea>
        {<ErrorMessage message={errors.message?.message} />}
      </div>

      <div className="w-full border border-custom px-12 rounded-3xl flex gap-8  ">
        <SelectBtn
          text="Back"
          className="bg-tertiary  text-primary"
          onClick={() => navigate(-1)}
        />
        <SelectBtn
          text="Get My Free Ticket"
          className="text-white bg-primary"
          // onClick={() => navigate("/ticket")}
          type="submit"
        />
      </div>
    </form>
  );
}

export default Form;
