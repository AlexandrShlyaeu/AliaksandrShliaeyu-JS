import react from 'react';
import button from 'antd/lib/button';
import 'antd/lib/button/style/css';
interface AppProps {
  message: string,
};
export default function({ message }: AppProps ) {
  return (
    <div>
        <h1>Hello {message}</h1>
        <button type="primary">Test</button>
    </div>
  );
};