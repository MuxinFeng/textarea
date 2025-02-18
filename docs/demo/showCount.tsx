/* eslint-disable no-console */
import Textarea from 'rc-textarea';
import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('hello\nworld');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <Textarea autoSize showCount />
      <p>controlled</p>
      <Textarea value={value} onChange={onChange} showCount maxLength={100} />
    </div>
  );
}
