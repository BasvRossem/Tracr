import { List, Repo } from "@thisisagile/easy";
import { LogGateway } from "../data/LogGateway";
import { Log } from "./Log";

export class LogRepository extends Repo<Log> {
  constructor(protected logs: LogGateway = new LogGateway()) {
    super(Log, logs);
  }

  getByUserAndDate(userId: string, date: string): Promise<List<Log>> {
    return this.logs
      .getByUserAndDate(userId, date)
      .then((json) => json.map((j: any) => new this.ctor(j)));
  }
}
