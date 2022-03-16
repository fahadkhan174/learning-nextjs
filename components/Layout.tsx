import { ReactNode, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { Box, styled } from '@mui/material'

import MuiLink from '../components/Link'

const StyledContainer = styled(Box)(({ theme }) => ({
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem',
}))

const StyledHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.error.main,
}))

const StyledBackToHome = styled(Box)(({ theme }) => ({
    margin: '3rem 0 0',
}))

interface LayoutProps {
    children: ReactNode
    home?: boolean
    initialCount?: number
}

const name = 'Mohd Fahad'
export const siteTitle = 'Learning NextJS'

const Layout = ({ children, home, initialCount }: LayoutProps) => {
    let [count, setCount] = useState(initialCount ? initialCount : 0)

    return (
        <StyledContainer>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
                <meta name='og:title' content={siteTitle} />
            </Head>
            <StyledHeader>
                {home ? (
                    <>
                        <Image
                            priority
                            src='/images/profile.jpg'
                            className='borderCircle'
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className='heading2Xl'>{name}</h1>
                        {count}
                        <button onClick={() => setCount(count + 1)}>
                            Increase
                        </button>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <a>
                                <Image
                                    priority
                                    src='/images/profile.jpg'
                                    className='borderCircle'
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className='headingLg'>
                            <Link href='/'>
                                <a className='colorInherit'>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </StyledHeader>
            <main>{children}</main>
            {!home && (
                <StyledBackToHome>
                    <MuiLink href='/'>← Back to home</MuiLink>
                </StyledBackToHome>
            )}
        </StyledContainer>
    )
}

export default Layout

export const getStaticProps: GetStaticProps = ({ params }) => {
    return {
        props: {
            initialCount: 0,
        },
    }
}
