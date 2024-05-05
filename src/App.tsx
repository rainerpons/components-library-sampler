import { Form, Input, Pagination } from "antd";
import { ChangeEvent, useState } from 'react';
import './App.css';

const App = () => {
  const [textInput, setTextInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  }

  return (
    <>
      <h1>Components Library Sampler</h1>
      <div className="card">
        <Form>
          <Form.Item label="Basic usage">
            <Input placeholder="Search" value={textInput} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Search box">
            <Input.Search
              placeholder="Search"
              value={textInput}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Search box #2">
            <Input.Search
              placeholder="Search"
              value={textInput}
              onChange={handleChange}
              enterButton
            />
          </Form.Item>
          <Form.Item label="Search box #3">
            <Input.Search
              placeholder="Search"
              enterButton="Search"
              size="large"
              value={textInput}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
        <Pagination total={100} />
      </div>
    </>
  );
}

export default App;
