import { Edm } from "odata-v4-server";
const mongoose = require('mongoose');

export class TimeEntry {
  @Edm.Key
  @Edm.String
  public id!: string;

  @Edm.String
  public employeeId!: string;

  @Edm.String
  public projectId!: string;

  @Edm.Date
  public date!: Date;

  @Edm.Decimal
  public hoursWorked!: number;

  @Edm.String
  public description!: string;
}

// Mongoose schema and model
const TimeEntrySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  employeeId: String,
  projectId: String,
  date: Date,
  hoursWorked: Number,
  description: String,
});

export const TimeEntryModel = mongoose.models.TimeEntry || mongoose.model("TimeEntry", TimeEntrySchema);

