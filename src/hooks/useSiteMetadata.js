import {useStaticQuery, graphql} from "gatsby";

export const useSiteMetadata = () => {
  {/* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */}
  const {site} = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            siteUrl
            description
          }
        }
      }
    `
  );
  console.log(`Site: ${JSON.stringify(site, null, 2)}`);
  return site.siteMetadata;
};
