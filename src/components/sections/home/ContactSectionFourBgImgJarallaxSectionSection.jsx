"use client";

import React, { useState } from "react";
import NumberCaptcha from "../../common/NumberCaptcha";
import axios from "axios";

export default function ContactSectionFourBgImgJarallaxSectionSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setSuccessMessage("");
    setSubmitError("");
  };
  const handlePaste = (e) => {
    e.preventDefault();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (formData.phone.length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Please enter your country";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!captchaValue) {
      newErrors.captcha = "Please enter the CAPTCHA";
    } else if (!captchaValid) {
      newErrors.captcha = "Invalid CAPTCHA";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setSuccessMessage("");
    setSubmitError("");
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/kfinsInquiry/createContact`,
        payload,
      );
      if (response.data?.isSuccess) {
        setSuccessMessage(
          response.data?.message ||
            "Your form has been submitted successfully.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });

        setCaptchaValue("");
        setCaptchaValid(false);
        setErrors({});
      } else {
        setSubmitError(
          response.data?.message ||
            "Unable to submit the form. Please try again.",
        );
      }
    } catch (error) {

      setSubmitError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-component section-contactfourbgimgjarallax">
      <section
        className="contact-section-four bg-img jarallax"
        style={{
          backgroundImage: "url('/assets/img/from_bg.jpg')",
        }}
      >
        <div className="container pt-5 pb-5">
          <div className="contact-items">
            <form
              className="contact-form-box"
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="section-heading text-center mb-4">
                <span className="sub-title text-white fadeInUp">
                  Get in Touch
                </span>

                <h2 className="text-white fadeInUp" data-delay="0.2">
                  Let’s Build the Right
                  <br />
                  Solution for You
                </h2>
              </div>

              <div className="row g-3 align-items-start justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="form-clt">
                    <input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onPaste={handlePaste}
                      autoComplete="off"
                      disabled={isSubmitting}
                    />

                    {errors.name && (
                      <span className="text-danger form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-clt">
                    <input
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onPaste={handlePaste}
                      autoComplete="off"
                      disabled={isSubmitting}
                    />

                    {errors.email && (
                      <span className="text-danger form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-clt">
                    <input
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      type="text"
                      inputMode="numeric"
                      maxLength={15}
                      value={formData.phone}
                      onChange={handleChange}
                      onPaste={handlePaste}
                      autoComplete="off"
                      disabled={isSubmitting}
                    />

                    {errors.phone && (
                      <span className="text-danger form-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-clt">
                    <input
                      id="country"
                      name="country"
                      placeholder="Country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      onPaste={handlePaste}
                      autoComplete="off"
                      disabled={isSubmitting}
                    />

                    {errors.country && (
                      <span className="text-danger form-error">
                        {errors.country}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      onPaste={handlePaste}
                      autoComplete="off"
                      disabled={isSubmitting}
                    />

                    {errors.message && (
                      <span className="text-danger form-error">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <NumberCaptcha
                    length={6}
                    value={captchaValue}
                    onChange={(value) => {
                      setCaptchaValue(value);

                      setErrors((prev) => ({
                        ...prev,
                        captcha: "",
                      }));

                      setSuccessMessage("");
                      setSubmitError("");
                    }}
                    onValidChange={setCaptchaValid}
                    error={errors.captcha}
                  />
                </div>
                {successMessage && (
                  <div className="col-lg-12">
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      {successMessage}
                    </div>
                  </div>
                )}
                {submitError && (
                  <div className="col-lg-12">
                    <div
                      className="alert alert-danger text-center"
                      role="alert"
                    >
                      {submitError}
                    </div>
                  </div>
                )}
                <div className="col-lg-12">
                  <div className="btn-button text-center">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <i className="ti ti-arrow-down-right" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
