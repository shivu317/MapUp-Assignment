// antd.js

import React from 'react';
import { Button, DatePicker, Input } from 'antd';
// import 'antd/dist/antd.css';

function AntdComponent() {
  return (
    <div>
      <h1>Ant Design Components</h1>
      <Button type="primary">Click Me</Button>
      <br />
      <DatePicker />
      <br />
      <Input placeholder="Enter something..." />
    </div>
  );
}

export default AntdComponent;
