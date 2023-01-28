import Head from "next/head"
import { FC } from "react"
import { MetaProps } from "./meta.props"

export const MetaComponent: FC<MetaProps> = ({ title, description, meta, noIndex = false }) => {
  return (
    <Head>
      <title itemProp="headline">{title}</title>
      {!noIndex ? (
        <>
          <meta name="description" content={description} />
          <meta name="charset" content="utf-8" />
          <link rel="icon" href="/icon-512x512.png" />
          <link rel="android-chrome-icon" sizes="512x512" href="/android-chrome-512x512.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          {meta?.length && meta.map(m => (
            <meta name={m.name} content={m.content} key={m.name} />
          ))}
        </>
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
  )
}
