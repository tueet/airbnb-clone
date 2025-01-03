import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
		<QueryClientProvider client={queryClient}>
			<div>
				<h2>맨땅이되.</h2>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</>
  )
}

export default App
