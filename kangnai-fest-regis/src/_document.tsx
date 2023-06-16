import { Global } from '@mantine/core'
import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital@0;1&family=Roboto+Condensed:wght@300;700&display=swap" rel="stylesheet" />
                    <Global
                        styles={(theme) => ({
                            'body': {
                                backgroundColor: theme.colors.gray[3],
                                color: theme.colors.gray[8],
                                fontFamily: '\'Roboto Condensed\', sans-serif',
                            },
                            '.primary-text': {
                                fontFamily: '\'Bebas Neue\', sans-serif',
                            },
                            '.secondary-text': {
                                fontFamily: '\'Lora\', serif',
                            },
                        })}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}