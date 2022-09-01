import gql from 'graphql-tag';

export const GET_RESOURCE_VIEWS = gql`
  query views($id: String) {
    views(id: $id) @rest(type: "Response", path: "resource_view_list?{args}") {
      result @type(name: "View") {
        id
        title
        description
        resources: resource_id
        viewType: view_type
        series
        group
        type: graph_type
      }
    }
  }
`;

export const GET_DATASTORE_DATA = gql`
  query datastore($resource_id: String) {
    datastore(resource_id: $resource_id)
      @rest(type: "Response", path: "datastore_search?{args}") {
      result {
        count: total
        fields
        sample: records
      }
    }
  }
`;

export const GET_ORG_QUERY = gql`
  query org($id: String) {
    org(id: $id) @rest(type: "Response", path: "organization_show?{args}") {
      result {
        name
        title
        description
        image: image_url
        created
        total: package_count
        users
        followers: num_followers
      }
    }
  }
`;

export const GET_ORGS_TREE_QUERY = gql`
  query orgs {
    orgs @rest(type: "Response", path: "group_tree?type=organization&{args}") {
      result
    }
  }
`;

export const GET_ORG_FULL_INFO_QUERY = gql`
  query org($id: String) {
    org(id: $id, all_fields: True)
      @rest(type: "Response", path: "organization_show?{args}") {
      result
    }
  }
`;

export const GET_ORG_WITH_PACKAGES_QUERY = gql`
  query org($id: String) {
    org(id: $id, include_datasets: True)
      @rest(type: "Response", path: "organization_show?{args}") {
      result {
        name
        title
        packages {
          title
          name
        }
      }
    }
  }
`;

export const GET_ORGS_QUERY = gql`
  query orgs {
    orgs(all_fields: True)
      @rest(type: "Response", path: "organization_list?{args}") {
      result @type(title: "Organization") {
        title
        name
        total: package_count
        image: image_url
      }
    }
  }
`;

export const GET_ORGS_BY_DATASETS_COUNT_QUERY = gql`
  query orgs($limit: number) {
    orgs(
      limit: $limit
      include_datasets_count: True
      sort: "package_count desc"
      all_fields: True
    ) @rest(type: "Response", path: "organization_list?{args}") {
      result {
        id
        name
        title
        image_url
        image_display_url
        total: package_count
      }
    }
  }
`;

export const GET_ORGS_FULL_INFO_QUERY = gql`
  query orgs($organizations: String) {
    orgs(
      all_fields: True
      include_extras: True
      organizations: $organizations
    ) @rest(type: "Response", path: "organization_list?{args}") {
      result
    }
  }
`;

export const GET_ORGS_LIST_QUERY = gql`
  query orgs {
    orgs @rest(type: "Response", path: "organization_list") {
      result
    }
  }
`;

export const GET_DATASET_QUERY = gql`
  query dataset($id: String) {
    dataset(id: $id) @rest(type: "Response", path: "package_show?{args}") {
      result {
        name
        title
        size
        author
        nresources: num_resources
        description: notes
        private
        license_title
        created: metadata_created
        updated: metadata_modified
        start: start_period
        end: end_period
        resources {
          id
          name
          title
          description
          path: url
          format
          created
          updated: metadata_modified
          size
        }
        organization {
          name
          title
          image: image_url
        }
        groups
        tags
        total_downloads
      }
    }
  }
`;

export const SEARCH_QUERY = gql`
  query search(
    $q: String
    $sort: String
    $rows: Int
    $start: Int
    $fq: String
  ) {
    search(q: $q, sort: $sort, rows: $rows, start: $start, fq: $fq)
      @rest(type: "Search", path: "package_search?{args}") {
      result {
        count
        results {
          name
          title
          description: notes
          updated: metadata_modified
          resources
          startPeriod: start_period
          endPeriod: end_period
          organization {
            name
            title
            description
            image: image_url
          }
          groups
        }
      }
    }
  }
`;

export const GET_TOTAL_COUNT_QUERY = gql`
  query search($q: String, $sort: String) {
    search(q: $q, sort: $sort)
      @rest(type: "Search", path: "package_search?{args}") {
      result {
        count
      }
    }
  }
`;

export const GET_STATS_QUERY = gql`
  query stats {
    datasets @rest(type: "Search", path: "package_search?rows=0") {
      result {
        count
      }
    }
    orgs @rest(type: "Search", path: "organization_list") {
      result
    }
    groups @rest(type: "Search", path: "group_list") {
      result
    }
  }
`;

export const GET_POSTS_QUERY = gql`
  query posts($limit: Int, $page: Int) {
    posts(limit: $limit, page: $page)
      @rest(
        type: "Posts"
        path: "posts/?limit={args.limit}&page={args.page}"
        endpoint: "ghost"
      ) {
      posts {
        title
        slug
        image: feature_image
        created: created_at
        updated: updated_at
        published: published_at
        excerpt
        readingTime: reading_time
      }
      meta
    }
  }
`;

export const GET_NEXT_POSTS_QUERY = gql`
  query posts($limit: Int, $after: String, $slug: String) {
    posts(limit: $limit, after: $after, slug: $slug)
      @rest(
        type: "Posts"
        path: "posts/?limit={args.limit}&order=published_at%20desc&filter=published_at%3A<={args.after}%2Bslug%3A-{args.slug}"
        endpoint: "ghost"
      ) {
      posts {
        title
        slug
        image: feature_image
        created: created_at
        updated: updated_at
        published: published_at
        excerpt
        readingTime: reading_time
      }
      meta
    }
  }
`;

export const GET_PAGE_QUERY = gql`
  query page($slug: String) {
    page(slug: $slug)
      @rest(type: "Page", path: "pages/slug/{args.slug}", endpoint: "ghost") {
      pages {
        title
        slug
        image: feature_image
        html
        created: created_at
        updated: updated_at
        published: published_at
        readingTime: reading_time
      }
    }
  }
`;

export const GET_POST_QUERY = gql`
  query post($slug: String) {
    post(slug: $slug)
      @rest(type: "Post", path: "posts/slug/{args.slug}", endpoint: "ghost") {
      posts {
        title
        slug
        image: feature_image
        html
        created: created_at
        updated: updated_at
        published: published_at
        readingTime: reading_time
      }
    }
  }
`;

export const GET_CMS_SETTINGS = gql`
  query settings {
    settings @rest(type: "Settings", path: "settings", endpoint: "ghost") {
      settings
    }
  }
`;

export const GET_POPULAR_DATASETS_QUERY = gql`
  query popular {
    popular @rest(type: "Search", path: "package_search?rows=3") {
      result {
        results {
          name
          title
          metadata_modified
          organization
        }
      }
    }
  }
`;

export const GET_COLLECTIONS_QUERY = gql`
  query collections {
    collections(all_fields: True)
      @rest(type: "Response", path: "group_list?{args}") {
      result
    }
  }
`;

export const GET_TOPICS_TREE_QUERY = gql`
  query topics {
    topics @rest(type: "Response", path: "group_tree?type=group&{args}") {
      result
    }
  }
`;

export const GET_TOPICS_QUERY = gql`
  query topics($groups: array) {
    topics(
      all_fields: True
      limit: 1000
      include_groups: True
      include_extras: True
      groups: $groups
    ) @rest(type: "Response", path: "group_list?type=group&{args}") {
      result
    }
  }
`;

export const GET_TOPICS_BY_DATASETS_COUNT_QUERY = gql`
  query topics($limit: number) {
    topics(
      limit: $limit
      include_datasets_count: True
      sort: "package_count desc"
      all_fields: True
    ) @rest(type: "Response", path: "group_list?{args}") {
      result {
        id
        name
        title
        image_url
        image_display_url
      }
    }
  }
`;

export const GET_TOPIC_QUERY = gql`
  query topic($id: String) {
    topic(id: $id, include_dataset_count: True, include_groups: True)
      @rest(type: "Response", path: "group_show?type=group&{args}") {
      result
    }
  }
`;

export const GET_KEYWORDS_QUERY = gql`
  query keywords {
    keywords
      @rest(
        type: "Response"
        path: "package_search?facet.field=[%22tags%22]&facet.limit=6&rows=0"
      ) {
      result {
        search_facets {
          tags {
            items
          }
        }
      }
    }
  }
`;

export const GET_RESOURCE_FORMATS_QUERY = gql`
  query formats {
    formats
      @rest(
        type: "Response"
        path: "package_search?facet.field=[%22res_format%22]&rows=0"
      ) {
      result {
        facets {
          res_format
        }
      }
    }
  }
`;
