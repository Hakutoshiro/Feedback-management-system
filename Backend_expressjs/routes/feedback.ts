import { handleAddFeedback, handleGetFeedbacks } from "../controllers/feedbackControllers";
const rateLimit = require('express-rate-limit');
const express = require('express');
const feedbackRouter = express.Router();

const feedbackLimiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1, // Limit each IP to 1 request per windowMs
  message: 'You can only submit feedback once every 10 seconds. Please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

feedbackRouter.post('/addFeedback',feedbackLimiter,handleAddFeedback)
feedbackRouter.get('/getFeedbacks',handleGetFeedbacks)

export {feedbackRouter}