import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LinearProgress } from "@material-ui/core";
import Button from "@mui/material/Button";

const MovieDetails = (props) => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <img src={props?.selectedMovie?.Poster} width={350} height={500} />
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
    </Box>
  );
};

export default MovieDetails;
