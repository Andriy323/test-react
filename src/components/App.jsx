import { Routes, Route } from 'react-router-dom';
import Menu from 'menu/Menu';
import HomePage from './pages/home-page/HomePage';
import ContactPage from './pages/contact-page/ContactPage';
import PostPage from './pages/post-page/PostPage';
import NotPage from './pages/not-page/NotPage';
export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </div>
  );
};
