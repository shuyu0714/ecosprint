
import { defineEventHandler, readBody, getQuery, sendError } from 'h3'
import { ofetch } from 'ofetch'
import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const proxyUrl = config.public.apiBase
  const path = event.path.replace(/^\/api\//, "")
  const target = joinURL(proxyUrl, path)

  const method = event.method
  const query = getQuery(event)

  try {
    let body
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      body = await readBody(event)
    }

    const headers = {
      ...event.headers,
      host: new URL(proxyUrl).host,
    };

    delete headers['cookie']
    delete headers['authorization']

    const response = await ofetch(target, {
      method,
      body,
      params: query,
      headers
    })

    if (response.headers) {
      delete response.headers["set-cookie"];
    }

    return response
  } catch (error: any) {
    console.error('Proxy request error:', error)
    return sendError(event, createError({
      statusCode: error.status || 500,
      statusMessage: error.statusText,
      message: error.message,
    }))
  }
})