import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';

function App()
{
	const [ ciResponse, setCIResponse ] = useState();
	useEffect(() =>
	{
		const getCIResponse = async () =>
		{
			const testCIResponse = await fetch('/ci-api-route')
				.then(response => response.json())
				.catch(console.error);
			setCIResponse(testCIResponse);
		}

		getCIResponse();
	}, [ ]);

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
				<br/>
				<div>
					Test CI Controller response:
				</div>
				<pre>
					{JSON.stringify(ciResponse)}
				</pre>
      </header>
    </div>
  );
}

export default App;
