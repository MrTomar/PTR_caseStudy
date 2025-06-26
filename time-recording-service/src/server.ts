import "reflect-metadata";
import express from "express";
const mongoose = require('mongoose');
import { ODataServer, odata } from "odata-v4-server";
import { TimeEntryController } from "./controllers/timeEntryController";

@odata.controller(TimeEntryController, true)
export class TimeRecordingService extends ODataServer {}

const app = express();
const port = 3002;

// MongoDB connection
const mongoUri = "mongodb://localhost:27017/timerecording"; // update if different
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Mount the OData service
    app.use("/odata", TimeRecordingService.create());

    app.listen(port, () => {
      console.log(`🚀 Time Recording Service listening at http://localhost:${port}/odata/`);
    });
  })
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error('Error connecting to DB:', err.message);
    } else {
      console.error('Unknown error:', err);
    }
  });
