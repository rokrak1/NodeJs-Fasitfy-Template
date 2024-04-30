import { FastifyReply, FastifyRequest } from "fastify";
import { controller, get, schema } from "../decorators";
import { capitalizeString } from "../services/sample.service";

interface GetSubitlesQuerystring {
  hello: string;
}

/**
 *  Template controller with a sample route and sample schema
 */

@controller("/someEndpoint")
class ScrapeController {
  @get<{ Querystring: GetSubitlesQuerystring }>("/getSubtitles")
  @schema({
    querystring: {
      hello: { type: "string" },
    },
  })
  async scrape(
    req: FastifyRequest<{ Querystring: GetSubitlesQuerystring }>,
    reply: FastifyReply
  ) {
    const { hello } = req.query;
    const capitalizedHello = capitalizeString(hello);
    reply.send({ hello });
  }
}
