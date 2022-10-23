import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { postManagementRoutes } from 'routes/routes';

const PostManagementPage: React.FC = () => {
  return (
    <div className='post-management-page'>
      <Routes>
        {postManagementRoutes.map((item, index) => {
          const Page = item.element;
          return <Route key={index} path={item.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
};

export default PostManagementPage;