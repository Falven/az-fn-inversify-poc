import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { Nameable } from "../shared/interfaces/";
import { container } from "../inversify.config";
import { TYPES } from "../shared/types";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  const askQuestion = container.get<Function>(TYPES.askQuestion);
  context.log(askQuestion());

  const DEFAULT_NAME = container.get<string>(TYPES.DEFAULT_NAME);
  const name = req.query.name || (req.body && req.body.name) || DEFAULT_NAME;

  const person = container.get<Nameable>(TYPES.Nameable);
  const responseMessage = `${person.greet(name)}`;
  context.log(responseMessage);

  context.res = {
    body: responseMessage,
  };
  context.log("HTTP trigger function executed successfully.");
};

export default httpTrigger;
