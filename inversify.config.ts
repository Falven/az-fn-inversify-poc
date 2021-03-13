import { Container } from "inversify";
import { GreetingClient } from "./shared/services";
import { askQuestion } from "./shared/functions";
import { DEFAULT_NAME } from "./shared/constants";
import { TYPES } from "./shared/types";

const container = new Container();
// InversifyJS needs to use the type as identifiers at runtime.
// We use symbols as identifiers but you can also use classes and or string literals.
container.bind(TYPES.Nameable).to(GreetingClient).inTransientScope();
container.bind(TYPES.askQuestion).toFunction(askQuestion);
container.bind(TYPES.DEFAULT_NAME).toConstantValue(DEFAULT_NAME);

export { container };
