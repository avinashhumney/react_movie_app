import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";
import { LinearProgress } from "@material-ui/core";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import * as React from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const MovieCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Card
        sx={{
          display: { xs: "none", md: "block" },
          width: 178,
          height: 278,
          marginRight: "26px",
          marginBottom: "37px",
          background: "#394B61",
          borderRadius: "11px",
          padding: "10px 10px 1rem 10px",
          border:
            props?.movie == props?.selectedMovie ? "3px solid #00E0FF" : "none",
          boxShadow:
            props?.movie == props?.selectedMovie
              ? "0px 0px 20px 5px rgba(0, 0, 0, 0.35)"
              : "none",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={props?.movie?.Poster}
              height={208}
              width={177}
              style={{ borderRadius: "11px", objectFit: "cover" }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#D4D7DD",
              fontSize: "15px",
              fontWeight: 600,
              padding: "12px 0",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            {props?.movie?.Title}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0 }}>
          <PlayCircleOutlineIcon sx={{ color: "#d4d7dd" }} />
          <AddCircleOutlineIcon sx={{ color: "#d4d7dd" }} />
        </CardActions>
      </Card>

      {/*  For mobile view */}

      <Card
        sx={{
          maxWidth: 345,
          display: { xs: "block", md: "none" },
          marginBottom: "37px",
          background: "#394B61",
          borderRadius: "11px",
          padding: "10px 10px 1rem 10px",
          border:
            props?.movie == props?.selectedMovie ? "3px solid #00E0FF" : "none",
          boxShadow:
            props?.movie == props?.selectedMovie
              ? "0px 0px 20px 5px rgba(0, 0, 0, 0.35)"
              : "none",
        }}
        onClick={handleExpandClick}
      >
        <CardContent sx={{ p: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={props?.movie?.Poster}
              height={208}
              width={177}
              style={{ borderRadius: "11px", objectFit: "cover" }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#D4D7DD",
              fontSize: "15px",
              fontWeight: 600,
              padding: "12px 0",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            {props?.movie?.Title}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0 }}>
          <PlayCircleOutlineIcon sx={{ color: "#d4d7dd" }} />
          <AddCircleOutlineIcon sx={{ color: "#d4d7dd" }} />
        </CardActions>
      </Card>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box sx={{ paddingLeft: "36px", paddingRight: "42px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                color: "#D4D7DD",
                paddingBottom: "23px",
                paddingTop: "34px",
              }}
            >
              {props?.selectedMovie?.Title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "15px",
              }}
            >
              <LinearProgress
                variant="determinate"
                value={(props?.selectedMovie?.imdbRating / 10) * 100}
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  background: "#283647",
                  maxWidth: "110px",
                  height: "8px",
                  borderRadius: "5px",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  paddingLeft: "12px",
                  fontSize: "16px",
                  lineHeight: "31px",
                  color: "#FFFFFF",
                }}
              >
                {props?.selectedMovie?.imdbRating}/10
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "20px",
              }}
            >
              <Box sx={{ paddingRight: "18px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  Year:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  Running Time:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  Directed by:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  Language:
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  {props?.selectedMovie?.Year}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  {props?.selectedMovie?.Runtime}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  {props?.selectedMovie?.Director}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#D4D7DD",
                  }}
                >
                  {props?.selectedMovie?.Language}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "18px",
                color: "#FFFFFF",
              }}
            >
              {props?.selectedMovie?.Plot}
            </Typography>
            <Box sx={{ display: "flex", paddingTop: "20px" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  boxShadow: "none",
                  background: "#00E0FF",
                  borderRadius: "5px",
                  color: "#000",
                  fontSize: "1rem",
                  fontWeight: 700,
                  minWidth: "154px",
                  marginRight: "1rem",
                }}
                variant="contained"
              >
                Play Movie
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  boxShadow: "none",
                  background: "transparent",
                  borderRadius: "5px",
                  color: "#00E0FF",
                  fontSize: "1rem",
                  fontWeight: 700,
                  minWidth: "154px",
                  border: "1px solid #00e0ff",
                }}
              >
                Watch Trailer
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
      {/* </Card> */}
    </>
  );
};

export default MovieCard;
