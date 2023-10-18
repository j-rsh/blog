import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardEl = ({ title, coverPhoto, authour, slug }) => {
  // console.log(authour.avatar.url)
  return (
    <Card
      sx={{
        boxShadow: "rgba(0 0 0 1) 0px 4px 12px",
        borderRadius: 4,
        marginTop: "10px",

      }}
      mt={6}
    >
      {authour && 
        <CardHeader
          avatar={<Avatar src={authour.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
            >
              {authour.name}
            </Typography>
          }
        />
      }
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography component="p" variant="p" color="text.primary" sx={{height:"20px"}}>
          {title}
        </Typography>
        <Divider variant="middle" sx={{marginTop:"15px"}}/>
      </CardContent>
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{textDecoration:"none" , width:"100%"}}>
        <Button variant="outlined" size="small" sx={{width:"100%", borderRadius:3}}>مطالعه مقاله</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEl;