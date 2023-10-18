import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";

const BlogPage = () => {
  const { sluge } = useParams();
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { sluge },
  });
  console.log("BlogPage" , data);
  return <div>Blog page</div>;
};

export default BlogPage;
