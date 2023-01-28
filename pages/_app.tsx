import { AppProps } from 'next/dist/shared/lib/router/router'
import '@/styles/globals.css'

const App = ({ Component, props }: AppProps) => {
  return (
    <Component {...props} />
  )
}

export default App