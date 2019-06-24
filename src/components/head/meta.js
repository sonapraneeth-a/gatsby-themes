import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import {useSiteMetadata} from "../../hooks/useSiteMetadata";

HeadMeta.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

HeadMeta.defaultProps = {
  author: "Sona Praneeth Akula",
  title: "",
  description: "",
  keywords: ["Gatsby", ""],
};

/**
 * This component handles meta related information present in the <head></head>
 *
 * @param  {object} props - Meta information like title, description to be
 *                          passed as props
 * @return {JSX} Containing the meta tags for <head> element
 */
function HeadMeta(props) {
  const {title, author} = useSiteMetadata();
  const metaInfo = {
    title: props.title === (undefined || null || "") ? title : props.title,
    author: author === (undefined || null || "") ? props.author : author,
    description: props.description,
    keywords: props.keywords,
  };
  return (
    <>
      <Helmet
        title={metaInfo.title}
        meta={[
          {name: "author", content: metaInfo.author},
          {name: "description", content: metaInfo.description},
          {name: "keywords", content: metaInfo.keywords},
          {name: "generator", content: "Gatsby site generator"},
          {name: "application-name", content: "Gatsby webpage"},
        ]}
      />
    </>
  );
}

export default HeadMeta;
