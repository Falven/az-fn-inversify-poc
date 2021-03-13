import "reflect-metadata";
import { injectable } from "inversify";
import { Nameable } from "../interfaces";

@injectable()
export class FarewellClient implements Nameable {
  greet(name: string): string {
    return `Goodbye, ${name}.`;
  }
}
