import { ODataController, Edm, odata } from "odata-v4-server";
import { TimeEntry, TimeEntryModel } from "../models/TimeEntry";

@odata.type(TimeEntry)
export class TimeEntryController extends ODataController {

  @odata.GET
  public async get(@odata.key key: string): Promise<TimeEntry> {
    const entry = await TimeEntryModel.findOne({ id: key }).lean();
    if (!entry) throw new Error(`TimeEntry with id ${key} not found`);
    return entry as TimeEntry;
  }

  @odata.GET
  public async getAll(): Promise<TimeEntry[]> {
    return await TimeEntryModel.find().lean() as TimeEntry[];
  }

  @odata.POST
  public async post(@odata.body body: TimeEntry): Promise<TimeEntry> {
    const created = await TimeEntryModel.create(body);
    return created.toObject() as TimeEntry;
  }

  @odata.PATCH
  public async patch(@odata.key key: string, @odata.body delta: Partial<TimeEntry>): Promise<TimeEntry> {
    const updated = await TimeEntryModel.findOneAndUpdate({ id: key }, delta, { new: true });
    if (!updated) throw new Error(`TimeEntry with id ${key} not found`);
    return updated.toObject() as TimeEntry;
  }

  @odata.DELETE
  public async delete(@odata.key key: string): Promise<void> {
    const result = await TimeEntryModel.findOneAndDelete({ id: key });
    if (!result) throw new Error(`TimeEntry with id ${key} not found`);
  }
}
