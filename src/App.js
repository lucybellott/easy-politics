import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // Check for any unterminated string literals or syntax issues around here

  return (
    <div className="App">
      <h1>Politics for dummies</h1>
      <h2>Types of politicians</h2>
      <ul>
        <li>Councilor</li>
        <li>Commissioner</li>
        <li>Mayor</li>
        <li>Governor</li>
        <li>Representative/Congressman</li>
        <li>Senator</li>
        <li>President</li>
        
      </ul>
    </div>
  );
}

// export default App;

// import TextSection from './components/TextSection';

// function App() {
//   const [textData, setTextData] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/texts/example.txt');
//         const content = await response.text();
//         setTextData(content);
//       } catch (error) {
//         console.error('Error fetching text content:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to My React App</h1>
//       <TextSection textData={textData} />
//     </div>
//   );
// }

// export default App;
