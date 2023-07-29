import '../styles/global.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
config.autoAddCss = false; 
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	console.log(router.pathname); 
	return <Component {...pageProps} />
}