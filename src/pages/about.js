import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there I'm Duckes!</p>
        </Layout>
    )
}
export const Head = () => (
    <>
        <title>About me</title>
        <meta name="description" content="Your description"/>
    </>
)

export default AboutPage;