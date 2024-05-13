export async function getProducts(graphql) {
  const response = await graphql(`
    query {
      products(first: 250) {
        edges {
          node {
            id
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      }
    }
  `);

  return response.json();
}
