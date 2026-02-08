import express from "express";
import { highestRating, lowestRating, popular, unpopular } from "../controller/analyticsController.js";
import { authorize } from "../middleware/authorization.js";

const analytics = express.Router();

analytics.use(authorize);

analytics.get('/high-rate', highestRating);
analytics.get('/lowest-rate', lowestRating);
analytics.get('/popular', popular);
analytics.get('/unpopular', unpopular);

export default analytics;