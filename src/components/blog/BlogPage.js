import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";

const BlogPage = () => {
  const { sluge } = useParams();
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { sluge },
  });
  console.log("BlogPage", data);
  // const {post:{title}} = data
  const navigate = useNavigate();

  if (loading) return<p>loa</p>;
  if (errors) return <h3>Error...</h3>;
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            {data.post.title}
          </Typography>
          <ArrowBackIcon onClick={()=> navigate(-1)}/>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img src={data.post.coverPhoto.url} alt={data.post.sluge} width="100%" style={{borderRadius:15}}/>
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar src={data.post.authour.avatar.url} sx={{width:80 , height:80 , marginLeft:2}}/> 
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>{data.post.authour.name}</Typography>
            <Typography component="p" variant="p" color="text.secondary">{data.post.authour.field}</Typography> 
          </Box>
        </Grid>
        <Grid item xs={12}> 
        <Typography component="p" variant="p" color="text.secondary"><div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(data.post.content.html),
          }}
        ></div></Typography> 
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={sluge}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
