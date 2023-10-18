import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import React from "react";
import { Link } from "react-router-dom";

const Athours = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  console.log("data", data);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
      mt={2}
    >
      {data.authors.map((author , index) => (
        <React.Fragment key={author.id}>
        <Grid item xs={12} padding={2} key={author.id}>
          <Link
            to={`/authors/${author.sluge}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {console.log("slug" , author.sluge)}
            <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          </Link>
        </Grid>
        {console.log("hi" , data.authors.length - 1)}
        {index != data.authors.length - 1 &&
          <Grid item xs={12}> 
              <Divider variant="middle"></Divider>
          </Grid>

        }
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Athours;
