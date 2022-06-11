import { Struct, Json, notEmpty } from "@thisisagile/easy";
import { v1 } from "uuid";


export class Log extends Struct {
  id = this.state.id ?? v1();
  @notEmpty() userId = this.state.userId;
  documentId = this.state.documentId;
  date = this.state.date;
  startTime = this.state.startTime;
  stopTime = this.state.stopTime;
  title = this.state.title;
  notes = this.state.notes;

  update = (other: Json): Log => {
    this.id = other.id ?? this.id;
    this.id = other.userId ?? this.userId;
    this.documentId = other.documentId ?? this.documentId;
    this.date = other.date ?? this.date;
    this.startTime = other.startTime ?? this.startTime;
    this.stopTime = other.stopTime ?? this.stopTime;
    this.title = other.title ?? this.title;
    this.notes = other.notes ?? this.notes;
    return this;
  };
}
