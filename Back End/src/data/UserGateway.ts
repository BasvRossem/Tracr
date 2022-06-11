import { MongoGateway } from "@thisisagile/easy-mongo";
import { UserCollection } from "./Data";


export class UserGateway extends MongoGateway {
  constructor(coll: UserCollection = new UserCollection()) {
    super(coll);
  }
}
