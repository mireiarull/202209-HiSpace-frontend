import { rest } from "msw";
import mockGetResponse from "./mockGetResponse";
import { mockOneRobot } from "./mockRobots";

const robotsApiUrl = process.env.REACT_APP_API_ROBOTS;

const handlers = [
  rest.get(`${robotsApiUrl}/robots`, async (request, response, context) => {
    return response(context.status(200), context.json(mockGetResponse));
  }),
  rest.get(`${robotsApiUrl}/robots/2`, async (request, response, context) => {
    return response(context.status(200), context.json(mockGetResponse));
  }),

  rest.post(
    `${robotsApiUrl}/robots/create`,
    async (request, response, context) => {
      return response(context.status(200), context.json(mockOneRobot));
    }
  ),

  rest.delete(
    `${robotsApiUrl}/robots/delete`,
    async (request, response, context) => {
      return response(context.status(200), context.json(mockOneRobot));
    }
  ),
];

export default handlers;
