import { StorefrontApiModule, registerExtensions } from 'src/lib/module'
import { StorefrontApiContext, GraphqlConfiguration, ElasticSearchMappings } from 'src/lib/module/types'
import { Router } from 'express'
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'

import path from 'path'
import version from './api/version'
import { loadSchema } from 'src/lib/elastic'

export const CustomModule: StorefrontApiModule = new StorefrontApiModule({
  key: 'custom-module',

  initGraphql: ({ config, db, app }: StorefrontApiContext): GraphqlConfiguration => {
    return {
      resolvers,
      schema,
      hasGraphqlSupport: true
    }
  },

  initApi: ({ config, db, app }: StorefrontApiContext): void => {
    let api = Router();

    // mount the order resource
    api.use('/sayHello', (req, res) => {
      res.end('Hello ' + req.query.name + '!')
    });
    // api router
    app.use('/custom', api);
  }
})
