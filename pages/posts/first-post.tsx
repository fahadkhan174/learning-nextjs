import { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../../components/Layout'

const FirstPost: NextPage = () => {

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
        </Layout>
    )
}

export default FirstPost
