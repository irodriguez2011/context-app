import React, { useContext } from "react";
import context from "./Context";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Card, CardContent, Grid, Box } from "@mui/material";

const Container: React.FC = () => {
  const { data, apiError, isLoading } = useContext(context)!;

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Posts:
        </Typography>
        {apiError ? (
          <Typography variant="h5" color="error">
            Error Loading Data
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {data.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      {post.title}
                    </Typography>
                    <Typography color="textSecondary">{post.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default Container;
