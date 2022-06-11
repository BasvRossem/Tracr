import { EasyUri, post, Req, Resource, route, uri, get, del, patch, asJson } from "@thisisagile/easy";
import { LogRepository } from "../domain/LogRepository";
import { Logs } from "../process/GetLogs";

class LogUri extends EasyUri {
  private static readonly logs = uri.segment('logs');

  static readonly Logs = new LogUri([LogUri.logs]);
}

@route(LogUri.Logs)
export class LogResource implements Resource {
  constructor(protected logRepo = new LogRepository(), protected logs = new Logs()) {}

  @post()
  add = async (req: Req): Promise<any> => {
    return this.logs.add(req.get("token"), req.body as any);
  };
  
  @patch()
  update = async (req: Req): Promise<any> => {
    return this.logRepo
      .update((req.body as any).id, asJson(req.body as any));
  };

  @get()
  getByDate = async (req: Req): Promise<any> => {
    return this.logs
      .byDate(req.get("token"), req.get("date"))
      .then(data => data.toJSON());
  };

  @del()
  removeById = async (req: Req): Promise<any> => {
    return this.logRepo.remove(req.get("id"));
  };
}