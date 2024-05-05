import { Pagination, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <h1>Components Library Sampler</h1>
      <div className="card">
        <TextField label="Search" value={inputText} onChange={handleChange} />
        <Pagination count={10} />
      </div>
    </>
  );
}

export default App;
