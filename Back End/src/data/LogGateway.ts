import { Field, Json, List } from "@thisisagile/easy";
import { MongoGateway } from "@thisisagile/easy-mongo";
import { LogCollection } from "./Data";

export class LogGateway extends MongoGateway {
  constructor(protected coll: LogCollection = new LogCollection()) {
    super(coll);
  }
  
  getByUserAndDate(userId: string, date: string): Promise<List<Json>> {
    return this.find(this.coll.userId.is(userId).and(this.coll.date.is(date)));
  }
}