import { useQuery } from "@apollo/client";
import {GET_BLOGS_INFO} from "../../graphql/queries"
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

const Blogs = () => {
    const {loading , data} = useQuery(GET_BLOGS_INFO)
    console.log(data);
    return (
        loading?<p>loading</p>:
        <Grid container  spacing={2} >
            {data.posts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post}/>
                </Grid>
            ))
            }
        </Grid>
     );
}
 
export default Blogs;