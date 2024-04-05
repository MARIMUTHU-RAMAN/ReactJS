import React, { useCallback, useEffect, useRef, useState } from "react";

import "./Captcha.css";
import { Button, TextField } from "@mui/material";

const Captcha = ({ captchaStatus }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userText, setUserText] = useState("");
  const canvasRef = useRef(null);

  const generateCaptchaText = useCallback(() => {
    let captcha = "";
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90);
      captcha += generateRandomChar(97, 122);
      captcha += generateRandomChar(48, 57);
    }
    return captcha
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  },[]);

  const initializeCaptcha = useCallback((ctx) => {
    setUserText("");
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    drawCaptchaOnCanvas(ctx, newCaptcha);
  },[generateCaptchaText])


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    initializeCaptcha(ctx);
  }, [initializeCaptcha]);

  const generateRandomChar = (min, max) =>
    String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

  const drawCaptchaOnCanvas = (ctx, captcha) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColors = ["green", "red", "black", "brown"];
    const letterSpace = 175 / captcha.length;
    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 25;
      ctx.font = "32px Lucida Calligraphy";
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(70, 70);
      ctx.lineTo(200, 50);
      ctx.strokeStyle = "red";
      ctx.stroke();

      ctx.fillStyle = textColors[Math.floor(Math.random() * 4)];

      ctx.fillText(
        captcha[i],
        xInitialSpace + i * letterSpace,

        // Randomize Y position slightly
        Math.floor(Math.random() * 16 + 25),
        100
      );
    }
  };

  useEffect(() => {
    captchaStatus(captchaText, userText);
  }, [captchaStatus, captchaText, userText]);

  const handleUserInputChange = (e) => {
    setUserText(e.target.value);
  };

  //captcha automatically enter
  useEffect(() => {
    setUserText(captchaText);
  }, [captchaText]);
  //
  
  return (
    <div className="captcha">
      <div className="Canvas-header">
        <canvas ref={canvasRef} width="250" height="40"></canvas>
        <Button
          id="reload-button"
          color="success"
          className="reload-button"
          variant="contained"
          onClick={(evnt) => {
            // evnt.preventDefault()
            initializeCaptcha(canvasRef.current.getContext("2d"));
          }}
        >
          Reload
        </Button>
      </div>
      <TextField
        type="text"
        id="user-input"
        placeholder="Enter the text in the image"
        value={captchaText}
        fullWidth
        margin="dense"
        onChange={handleUserInputChange}
      ></TextField>
    </div>
  );
};

export default Captcha;
