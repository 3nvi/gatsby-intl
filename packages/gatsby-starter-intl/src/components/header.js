import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { usePageContext } from "@3nvi/gatsby-theme-intl"

const Header = ({ siteTitle }) => {
  const { supportedLanguages, originalPath } = usePageContext()

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>
            <GatsbyLink
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </GatsbyLink>
          </h1>
          <div>
            {supportedLanguages.map(supportedLang => (
              <GatsbyLink
                aria-label={`Change language to ${supportedLang}`}
                key={supportedLang}
                to={`/${supportedLang}${originalPath}`}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  marginRight: "1em",
                }}
              >
                {supportedLang.toUpperCase()}
              </GatsbyLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
