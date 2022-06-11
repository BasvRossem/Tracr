import { Json, List, when } from "@thisisagile/easy";
import { Log } from "../domain/Log";
import { LogRepository } from "../domain/LogRepository";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class Logs {
    constructor(protected users = new UserRepository(), protected logs = new LogRepository()) {}

    add(token: string, json: Json): Promise<Log> {
        return this.getUserId(token)
        .then(user => {
            json.userId = user.id;
            return json;
        })
        .then(json => this.logs.add(json));
    }

    byDate(token: string, date: string): Promise<List<Log>> {
        return this.getUserId(token)
        .then(user => this.logs.getByUserAndDate(user.id, date));
    }

    getUserId(token: string): Promise<User> {
        return this.users.by("token", token)
        .then(users => users.first())
        .then(user => when(user).not.isDefined.reject("User not found"))
    }
}