import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*<Route index element={<Home />} />*/}
        {/*<Route path="about" element={<About />} />*/}
        {/*<Route path="contact" element={<Contact />} />*/}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Route>
    </Routes>
  );
}
