import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { router } from './router'
import App from './App.jsx'
import GlobalStyle from "../style/GlobalStyle.js"

import 'swiper/css';
import 'swiper/css/pagination';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<GlobalStyle />
	<QueryClientProvider client={queryClient}>
		{/* <BrowserRouter> */}
			<App>
				<RouterProvider router={router} />
			</App>
		{/* </BrowserRouter> */}
		<ReactQueryDevtools initialIsOpen={true} />
	</QueryClientProvider>
  </StrictMode>
)