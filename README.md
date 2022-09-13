<h1 align="center">

🌀 UAE Open Data

</h1>

## Live instances

- Development: https://frontend.fcsc.develop.datopian.com/
- Production: https://opendata.fcsc.gov.ae (mirror: https://frontend.fcsc.production.datopian.com)

## Getting Started

### Setup

Install a recent version of Node. We recommend using Node v14.

```bash
npm i # install dependencies
npm run dev # starts dev mode
```

Open [http://localhost:3000](http://localhost:3000) to see the home page 🎉

You can start editing the page by modifying `/pages/index.tsx`. The page auto-updates as you edit the file.

To connect your frontend to the backend (DMS and CMS), you will need to setup the following environment variables:

```bash
export DMS=http://ckan-domain.com
export CMS=http://ghost-cms-domain.com # Note that we're using Ghost CMS for this frontend
export CMS_KEY=your-content-key # You can get it from Ghost CMS settings
```

## Guide

### Styling 🎨

We use Tailwind as a CSS framework. Take a look at `/styles/index.css` to see what we're importing from Tailwind bundle. You can also configure Tailwind using `tailwind.config.js` file.

Have a look at Next.js support of CSS and ways of writing CSS:

https://nextjs.org/docs/basic-features/built-in-css-support

### Backend

So far the app is running with mocked data behind. You can connect CMS and DMS backends easily via environment variables:

```console
$ export DMS=http://ckan:5000
$ export CMS=http://ghost-cms.domain
```

> Note that we don't yet have implementations for the following CKAN features:
>
> - Activities
> - Auth
> - Groups
> - Facets

### Routes

These are the default routes set up in the "starter" app.

- Home `/`
- Search `/search`
- Organizations `/organization`
- Organization `/@org`
- Dataset `organization/@org/dataset`
- Resource `organization/@org/dataset/r/resource`
- Topics (aka group in CKAN or categories here) `/topic`
- Static pages, eg, `/p/about` etc. from CMS or can do it without external CMS, e.g., in Next.js

### New Routes

In this project, there are also some new routes:
- News `/news`
- News post `/news/:slug`

### Data fetching

We use Apollo client which allows us to query data with GraphQL. We have setup CKAN API for the demo (it uses demo.ckan.org as DMS):

http://portal.datopian1.now.sh/

Note that we don't have Apollo Server but we connect CKAN API using [`apollo-link-rest`](https://www.apollographql.com/docs/link/links/rest/) module. You can see how it works in [lib/apolloClient.ts](https://github.com/datopian/portal/blob/master/lib/apolloClient.ts) and then have a look at [pages/\_app.tsx](https://github.com/datopian/portal/blob/master/pages/_app.tsx).

For development/debugging purposes, we suggest installing the Chrome extension - https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm.

#### i18n configuration

Portal.js is configured by default to support multiple subpaths for language translation. In this specific project `English` and `Arabic` are supported. When switching to `Arabic`, this portal also changes all the content flow from `LTR` to `RTL`. But for subsequent users, this following steps can be used to configure i18n for other languages;

1.  Update `i18n.json`, to add more languages to the i18n locales

```js
{
  "locales": ["en", "ar", "pt-br"], // Add the new language code here
  "defaultLocale": "en",  // Set the default language
  "pages": {
    "*": ["common"]
  }
}
```

2. Create a folder for the language in `locales` using the language code as the name. E.g. `locales/pt-br`.

3. In the language folder, different namespace files (json) can be created for each translation. For the `index.js` use-case, I named it `common.json`

```json
// locales/en/common.json
{
   "title" : "Portal js in English",
}

// locales/ar/common.json
{
   "title" : "Portal js in Arabic",
}
```

4. To use on pages using Server-side Props.

```js
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';

const Home: React.FC = ()=> {
  const { t } = useTranslation('common');
  return (
    <div>{t(`title`)}</div> // we use title based on the common.json data
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
      ........  ........
  return {
    props : {
      _ns:  await loadNamespaces(['common'], locale),
    }
  };
};

```

5. Go to the browser and view the changes using language subpath like this `http://localhost:3000` and `http://localhost:3000/ar`. **Note** The subpath also activates Chrome language translator

#### Pre-fetch data in the server-side

When visiting a dataset page, you may want to fetch the dataset metadata in the server-side. To do so, you can use `getServerSideProps` function from NextJS:

```javascript
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import gql from 'graphql-tag';

const QUERY = gql`
  query dataset($id: String) {
    dataset(id: $id) @rest(type: "Response", path: "package_show?{args}") {
      result
    }
  }
`;

...

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: QUERY,
    variables: {
      id: 'my-dataset'
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
```

This would fetch the data from DMS and save it in the Apollo cache so that we can query it again from the components.

#### Access data from a component

Consider situation when rendering a component for org info on the dataset page. We already have pre-fetched dataset metadata that includes `organization` property with attributes such as `name`, `title` etc. We can now query only organization part for our `Org` component:

```javascript
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_ORG_QUERY = gql`
  query dataset($id: String) {
    dataset(id: $id) @rest(type: "Response", path: "package_show?{args}") {
      result {
        organization {
          name
          title
          image_url
        }
      }
    }
  }
`;

export default function Org({ variables }) {
  const { loading, error, data } = useQuery(
    GET_ORG_QUERY,
    {
      variables: { id: 'my-dataset' }
    }
  );

  ...

  const { organization } = data.dataset.result;

  return (
    <>
      {organization ? (
        <>
          <img
            src={
              organization.image_url
            }
            className="h-5 w-5 mr-2 inline-block"
          />
          <Link href={`/@${organization.name}`}>
            <a className="font-semibold text-primary underline">
              {organization.title || organization.name}
            </a>
          </Link>
        </>
      ) : (
        ''
      )}
    </>
  );
}
```

#### Add a new data source

TODO

### CMS

This project uses [GhostCMS](https://ghost.org/) as a Content Management System. That's where pages and posts are managed, as well as other settings, such as the navbar and footer links.

#### Tags

Tags are a way of categorizing items. Whenever in GhostCMS you create an item, such as posts and pages, you are gonna see that there's always a field to associate tags to that item ([click here to read more about tags in GhostCMS](https://ghost.org/help/organising-content/)). Tags in this context also serve as an identifier for special functions. The following tags are needed for some special features in this application:

- `#arabic`
  - This tag _must_ be applied to _posts_ (or news) that are written in Arabic and are meant to be listed only when the language is set to 'ar'. If a post doesn't have this tag, it's assumed that the post is written in English and that it should be displayed when the language is set to 'en'.
  - It's recommended to also use this tag for pages that are written in Arabic.
- `#hero-section`
  - This tag should be applied to a page and is used to customize the images that are displayed on the hero section on the home page. If no page with this tag is found, the default images are displayed. To change the images, simple put from 1 to 4 images on the page in the desired order.

To create a tag, simply:

1. Navigate to the GhostCMS instance
2. On the left menu, click on `Tags`
3. At the top right corner of the page, click on `New tag`
4. Insert the exact name of the tag, as mentioned above (the _Slug_ field is going to update automatically, leave it as it's)
5. Click on the `Save` button

#### Posts

Posts are being used to provide articles under the `news` page for the front end appication. Posts have bilingual support as mentioned above, the related recommendation is that when creating posts in Arabic to preppend `/ar-` to the post's URL, in order to make it more consistent application wide. So, for example, if there was a post about health status, the URL for the English version could be `/health-status` and if this post was to be translated, the URL for the Arabic equivalent post would be `/ar-health-status`.

#### Pages

Pages serve as a way to provide easily editable static content to the users. When creating a page, pay attention to the URL you are setting up, as you can make a navbar or footer link redirect to this page.

##### Bilingual support

As this portal has bilingual support (Arabic and English), whenever you create a page in English you should also create it's equivalent in Arabic. To do this, follow the following instructions:

1. Navigate to GhostCMS
2. Create the desired page or navigate to the page you want to provide Arabic support
3. Take note os the URL for this page (e.g. `/terms-of-use`)
4. Create a new page that's going to serve as the Arabic equivalent of the page
5. For this new page, make sure the URL is the same as the English one, but with an `ar-` preppended (e.g. `/ar-terms-of-use`)
6. Now you can freely write the content for the Arabic equivalent
7. (Recommended) Apply the `#arabic` tag to the Arabic equivalent page

#### Navbar and Footer

Navbar and footer links can be managed from GhostCMS by navigating to `GhostCMS / Settings / Navigation`. In this page there are the `PRIMARY NAVIGATION` and the `SECONDARY NAVIGATION`, which control the navbar and the footer links, respectively. Here you can freely create, delete, edit and sort the navbar/footer items.
When adding a new item, it can point to a CMS page or to a front end page. The front end pages are:

- `/search`
- `/topic`
- `/organization`
- `/news`

Note that these are pages that are not handled by GhostCMS and it's URLs should aways link to the front end address (e.g. if you want to point to `search`, the nav item URL could be: `https://frontend.fcsc.production.datopian.com/search`).

For pages that are handled by GhostCMS, e.g.:

- Open Data 101
- Terms of Use
- About

The URL should always have the GhostCMS instance URL prepprended (e.g. if you want to point to `Open Data 101`, the nav item URL could be `https://cms.fcsc.develop.datopian.com/open-data-101`). Please note that there must be an actual page created in the CMS that uses this URL, otherwise the link is going to present a `404 - Page not found` error.

##### Bilingual support

The translation of nav items is also supported. To create an Arabic equivalent for an item you can simply copy the URL from the English version, create a new item with the desired title and add the English version URL just modifying the last segment of it to have a `ar-` prepprended. Note that the URL for both languages must be an exact match except for the `ar-`. Here's an example:

1. Let's say we want to have a nav link that leads to the topics page.
2. First, we create a new entry in the list with the title `TOPICS` linking to `https://frontend.fcsc.production.datopian.com/topic`.
3. Next, we create a new entry in the list with the title `المواضيع` linking to `https://frontend.fcsc.production.datopian.com/topic`.

That's it. Now, when the page is rendered in Arabic, the `TOPICS` is gonna show up translated.  
_*NOTE*_: the English version works as a master list, so if there's isn't an English version of a link, it's not gonna show up, and if a link doesn't have an Arabic version, it's gonna be always shown in English.

This example in GhostCMS would look like:

**PRIMARY NAVIGATION**
|Title | URL|
| -----| ---|
|TOPICS | https://frontend.fcsc.production.datopian.com/topic|
|المواضيع | https://frontend.fcsc.production.datopian.com/ar-topic|

All the above works exactly the same for footer links.

### Tests

We use Jest for running tests:

```bash
npm run test # or npm run test

# turn on watching
npm run test --watch
```

We use Cypress tests as well

```
npm run e2e
```

### Architecture

- Language: Javascript.
- Framework: NextJS - https://nextjs.org/.
- Data layer API: GraphQL using Apollo. So controllers access data using GraphQL “gatsby like”.

### Key Pages

See https://tech.datopian.com/frontend/.
