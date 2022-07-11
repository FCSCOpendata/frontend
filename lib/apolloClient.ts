import { useMemo } from 'react';
import getConfig from 'next/config';
import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  NormalizedCache,
  NormalizedCacheObject,
} from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

let apolloClient:
  | ApolloClient<NormalizedCache>
  | ApolloClient<NormalizedCacheObject>;

const ghostBaseUri = new URL(
  '/ghost/api/content/',
  getConfig().publicRuntimeConfig.CMS
).href;

const restLink = new RestLink({
  uri: getConfig().publicRuntimeConfig.DMS + '/api/3/action/',
  endpoints: {
    ghost: ghostBaseUri,
  },
  customFetch: (uri, options) => {
    const uriWithKey = new URL(uri.toString());
    if (uriWithKey.href.includes(ghostBaseUri)) {
      uriWithKey.searchParams.append(
        'key',
        getConfig().publicRuntimeConfig.CMS_KEY
      );
    }
    return fetch(uriWithKey, options);
  },
  typePatcher: {
    Search: (data: any): any => {
      if (data.result != null) {
        data.result.__typename = 'SearchResponse';

        if (data.result.results != null) {
          data.result.results = data.result.results.map((item) => {
            if (item.organization != null) {
              item.organization.__typename = 'Organization';
            }
            return { __typename: 'Package', ...item };
          });
        }
      }
      return data;
    },
    Response: (data: any): any => {
      if (data.result != null) {
        data.result.__typename = 'Package';
        if (data.result.organization != null) {
          data.result.organization.__typename = 'Organization';
        }

        if (data.result.resources != null) {
          data.result.resources = data.result.resources.map((item) => {
            return { __typename: 'Resource', ...item };
          });
        }
      }
      return data;
    },
  },
});

function createApolloClient() {
  return new ApolloClient({
    link: restLink,
    cache: new InMemoryCache({ addTypename: false }), // Work on this later by adding a typePatcher
  });
}

export function initializeApollo(
  initialState = null
): ApolloClient<NormalizedCache> | ApolloClient<NormalizedCacheObject> {
  const _apolloClient:
    | ApolloClient<NormalizedCache>
    | ApolloClient<NormalizedCacheObject> =
    apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(
  initialState = null
): ApolloClient<NormalizedCache> | ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
