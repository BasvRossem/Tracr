import { Struct } from "@thisisagile/easy";

export class User extends Struct {
  id = this.state.id;
  token = this.state.token;
}
