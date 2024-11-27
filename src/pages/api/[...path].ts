import type { APIContext } from "astro";
import { moduleAentityAOperation, moduleAentityAGetAll } from "../../modules/module-A/entityA/entityA-controller";
// think of this file as a Router for the BFF layer

export type APIRoutes = {
  [key: string]: (apiContext: APIContext) => Promise<Response>;
};

export const POST = async (apiContext: APIContext): Promise<Response> => {
  const apiRoutes: APIRoutes = {
    "module-a/entity-a/operation": moduleAentityAOperation,
  };

  return handleMethod(apiRoutes, apiContext.params.path || "", apiContext);
};

export const PUT = async (apiContext: APIContext): Promise<Response> => {
  const apiRoutes: APIRoutes = {};
  return handleMethod(apiRoutes, apiContext.params.path || "", apiContext);
};

export const GET = async (apiContext: APIContext): Promise<Response> => {
  const apiRoutes: APIRoutes = {
    "module-a/entity-a/getall": moduleAentityAGetAll,
  };
  return handleMethod(apiRoutes, apiContext.params.path || "", apiContext);
};

const handleMethod = async (apiRoutes: APIRoutes, path: string, apiContext: APIContext): Promise<Response> => {
  const handler = apiRoutes[path];
  return handler ? handler(apiContext) : notFound();
};

const notFound = async (): Promise<Response> => new Response("NotFound", { status: 404 });
