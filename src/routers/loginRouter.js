import express from "express";
import {
  insertUser,
  loginAdminUser,
  updateOneAdminUser,
} from "../../User/userModel.js";
import { sendMail } from "../../email-Helper/mailHelper.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    req.body.emailValidationCode = "uygdfg784t748rgjhfcb";
    const user = await insertUser(req.body);
    if (user?._id) {
      res.json({
        status: "success",
        message: "We have sent you email to verify your account",
      });
      const url = `http://localhost/admin/verify-email?c=${user.emailValidationCode}&e=${user.email}`;
      sendMail({
        email: user.email,
        url,
      });
      return;
    }
    res.json({
      status: "success",
      message: "Could not Create new user",
    });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/verify-user", async (req, res) => {
  try {
    const { emailValidationCode, email } = req.body;

    const user = await updateOneAdminUser(
      {
        email,
        emailValidationCode,
      },
      { status: "active", emailValidationCode: "" }
    );
    user?._id
      ? res.json({
          status: "success",
          message: "Your Account has been verified, you may log in now",
        })
      : res.json({
          status: "error",
          message: "Your Account could not verified, Invalid or expired link",
        });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await loginAdminUser({ email });

    if (user) {
      if (user.password === password) {
        return res.json({
          status: "success",
          message: "Successfully logged in",
        });
      } else {
        return res.json({
          status: "error",
          message: "Invalid login credentials",
        });
      }
    } else {
      return res.json({
        status: "error",
        message: "Your account has not been verified yet",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export default router;
