"use client";

import React, { useState } from "react";
import axios from "axios";
import NumberCaptcha from "../../common/NumberCaptcha";

export default function ContactPageSectionDivSection() {
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
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
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

    if (!isValid) return;

    try {
      setIsSubmitting(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/kfinsInquiry/createContact`,
        payload
      );

      if (response.data?.isSuccess) {
        setSuccessMessage(
          response.data?.message ||
            "Your form has been submitted successfully."
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
            "Unable to submit the form. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setSubmitError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-component section-contactpagediv">
      <div className="contact-page-section">
        <div className="maps-section">
          <iframe
            allowFullScreen
            height="450"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3648711181786!2d72.8339314!3d21.137873000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05132721d2563%3A0xdaf23daf62205a73!2sK-FINS%20PUMPS%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1784893116197!5m2!1sen!2sin"
            style={{ border: 0 }}
            width="100%"
            title="KFINS Location"
          />
        </div>

        <div className="container position-relative">
          <div className="contact-form-wrapper bg-secondary">
            <div className="section-heading text-center">
              <h2>
                Keep your business
                <br />
                flowing with us
              </h2>

              <p className="mb-0">
                Get in touch for personalized assistance.
              </p>
            </div>

            <div className="divider-sm"></div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      placeholder="Name*"
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

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Email*"
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

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="phone"
                      placeholder="Phone*"
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

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="country"
                      placeholder="Country*"
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

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Write your message"
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

                <div className="col-12">
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
                  <div className="col-12">
                    <div
                      className="contact-success-message"
                      role="alert"
                    >
                      <i className="ti ti-circle-check"></i>
                      <span>{successMessage}</span>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="col-12">
                    <div
                      className="contact-error-message"
                      role="alert"
                    >
                      <i className="ti ti-alert-circle"></i>
                      <span>{submitError}</span>
                    </div>
                  </div>
                )}

                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 mt-3"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message{" "}
                        <i className="icon-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
}