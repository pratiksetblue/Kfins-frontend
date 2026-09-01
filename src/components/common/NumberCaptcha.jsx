"use client";

import React, { useEffect, useRef, useState } from "react";

const NumberCaptcha = ({
  value,
  onChange,
  onValidChange,
  error,
  length = 6,
}) => {
  const canvasRef = useRef(null);
  const [captchaCode, setCaptchaCode] = useState("");

  const generateCaptcha = () => {
    const code = Array.from({ length }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    setCaptchaCode(code);
    onChange("");
    onValidChange?.(false);

    setTimeout(() => {
      drawCaptcha(code);
    }, 0);
  };

  const drawCaptcha = (code) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = 130;
    canvas.height = 40;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Noise dots
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();

      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 1.5,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = "rgba(180, 140, 70, 0.4)";
      ctx.fill();
    }

    // Noise lines
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();

      ctx.moveTo(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );

      ctx.lineTo(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );

      ctx.strokeStyle = "rgba(180, 140, 70, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // CAPTCHA numbers
    code.split("").forEach((char, index) => {
      ctx.save();

      const x = 8 + index * 20;
      const y = 27 + Math.random() * 5;

      ctx.translate(x, y);

      ctx.rotate((Math.random() - 0.5) * 0.35);

      ctx.font = "20px Arial";
      ctx.fillStyle = "#c59b52";

      ctx.fillText(char, 0, 0);

      ctx.restore();
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (captchaCode) {
      drawCaptcha(captchaCode);
    }
  }, [captchaCode]);

  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, length);

    onChange(input);

    onValidChange?.(input === captchaCode);
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className="captcha-wrapper">
      <div className="captcha-box">

        <input
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={length}
          placeholder="Enter Number"
          value={value}
          onChange={handleChange}
          onPaste={handlePaste}
        />

        <canvas
          ref={canvasRef}
          className="captcha-image"
        />

        <button
          type="button"
          className="captcha-refresh"
          onClick={generateCaptcha}
          aria-label="Refresh CAPTCHA"
        >
          ↻
        </button>

      </div>

      {error && (
        <span className="text-danger captcha-error">
          {error}
        </span>
      )}
    </div>
  );
};

export default NumberCaptcha;