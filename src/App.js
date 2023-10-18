import { gql, useQuery } from '@apollo/client';
import Layout from './components/layout/index.js'
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './components/blog/BlogPage.js';
import AuthorPage from './components/athours/AuthorPage.js';
const QUERY = gql`
query {
    authors{name}
}
`
function App() {
  const {loading , data} =useQuery(QUERY);
  console.log(data)
  return (
   <div>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/blogs/:sluge" element={<BlogPage/>} /> 
        <Route path="/authors/:sluge" element={<AuthorPage/>} />
      </Routes>
    </Layout>
   </div>
  );
}

export default App;
