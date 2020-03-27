import React from "react"
import { useTranslation, Link } from "@3nvi/gatsby-theme-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t("home.greeting")}</h1>
      <p>{t("home.details")}</p>
      <p>{t("home.prompt")}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">{t("common.goToSecondPage")}</Link>
    </Layout>
  )
}

export default IndexPage
