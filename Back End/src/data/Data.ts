import { Database } from "@thisisagile/easy";
import { MongoProvider, Collection } from "@thisisagile/easy-mongo";

const options = {
  cluster: process.env.MONGO_CLUSTER,
  user: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
};

class TracrDatabase extends Database {
  static readonly Mongo = new TracrDatabase("Tracr", MongoProvider, options);
}

export class LogCollection extends Collection {
  get db(): Database {
    return TracrDatabase.Mongo;
  } 
  
  readonly date = this.map.field("date");
  readonly startTime = this.map.field("startTime");
  readonly stopTime = this.map.field("stopTime");
  readonly title = this.map.field("title");
  readonly notes = this.map.field("notes");
  readonly userId = this.map.field("userId");

  toString() {
    return "Logs";
  }
}

export class UserCollection extends Collection {
  get db(): Database {
    return TracrDatabase.Mongo;
  } 
  
  readonly token = this.map.field("token");

  toString() {
    return "Users";
  }
}
