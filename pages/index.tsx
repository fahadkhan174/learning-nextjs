import Head from 'next/head'
import Link from 'next/link'
import { AppProps } from 'next/app'
import { GetStaticProps } from 'next'

import Date from '../components/Date'
import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/Layout'

interface Posts extends AppProps {
    allPostsData: [
        {
            id: string
            date: string
            title: string
        }
    ]
}

const Home = ({ allPostsData }: Posts) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className='headingMd'>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on <a>our Next.js tutorial</a>
                    .)
                </p>
            </section>
            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`headingMd padding1px`}>
                <h2 className='headingLg'>Blog</h2>
                <ul className='list'>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className='listItem' key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            {id}
                            <br />
                            <small className='lightText'>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}
