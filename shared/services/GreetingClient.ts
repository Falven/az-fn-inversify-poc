import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Nameable } from "../interfaces";
import { TYPES } from "../types";

@injectable()
export class GreetingClient implements Nameable {
  public name: string;

  constructor(@inject(TYPES.DEFAULT_NAME) name: string) {
    this.name = name;
  }

  greet(name: string): string {
    return `Hello, ${name}.`;
  }
}
