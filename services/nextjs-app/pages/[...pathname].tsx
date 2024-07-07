import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import 테스트 from '../src/pages/Home/한글주소/테스트'

export default function PathnameMapper() {
  const { asPath } = useRouter()

  switch (asPath) {
    case encodeURI('/한글주소/테스트'):
      return <테스트 />
  }
  return <div>asPath:{asPath}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [encodeURI('/한글주소/테스트')], fallback: false }
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}
