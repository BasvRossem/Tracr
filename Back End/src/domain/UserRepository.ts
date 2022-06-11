import { Repo } from "@thisisagile/easy";
import { UserGateway } from "../data/Usergateway";
import { User } from "./User";

export class UserRepository extends Repo<User> {
  constructor(users: UserGateway = new UserGateway()) {
    super(User, users);
  }
}
