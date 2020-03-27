import React from "react"
import { useTranslation, Link } from "@3nvi/gatsby-theme-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{t("home.greeting")}</h1>
      <p>{t("home.details")}</p>
      <Link to="/">{t("common.goToHomePage")}</Link>
    </Layout>
  )
}

export default SecondPage
