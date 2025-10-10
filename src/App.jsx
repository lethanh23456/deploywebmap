import './App.css';
import AllRoute from './components/AllRoute';
import { useState, useEffect } from 'react';

function App() {
  const [isTooSmall, setIsTooSmall] = useState(window.innerWidth < 780);

  useEffect(() => {
    const handleResize = () => {
      setIsTooSmall(window.innerWidth < 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isTooSmall) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>
        Giao diện đang được cập nhật. Vui lòng sử dụng máy tính (≥780px) để truy cập trang web.
      </div>
    );
  }

  return <AllRoute />;
}

export default App;