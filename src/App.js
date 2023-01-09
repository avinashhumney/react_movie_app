import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import ListIcon from "@mui/icons-material/List";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SingleListItem from "./components/singlelistItem";
import "./App.css";
import {
  moviesRowOne,
  moviesRowTwo,
  moviesRowThree,
  moviesRowFour,
} from "./movies/movies";
import Zoom from "@mui/material/Zoom";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MovieCard from "./components/movieCard";
import MovieDetails from "./components/movieDetails";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

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

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [checked, setChecked] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [checkedFour, setCheckedFour] = React.useState(false);
  const [arrayRow, setArrayRow] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  const containerRef = React.useRef(null);
  const containerRefTwo = React.useRef(null);
  const containerRefThree = React.useRef(null);
  const containerRefFour = React.useRef(null);

  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const handleChange = (array, movie) => {
    setSelectedMovie(movie);
    setArrayRow(array);
    array == 1
      ? setChecked(true)
      : array == 2
      ? setCheckedTwo(true)
      : array == 3
      ? setCheckedThree(true)
      : setCheckedFour(true);
  };

  const drawer = (
    <Box sx={{ background: "#1F2A3C", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <img
          src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          alt="BigCo Inc. logo"
          height={100}
          width={100}
          className="logo"
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: 600,
            color: "#D4D7DD",
            lineHeight: "27px",
            paddingBottom: "20px",
            paddingTop: "11px",
            fontFamily: "'Open Sans' , sans-serif",
          }}
        >
          Eric Hoffman
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#394B61" }} />
      <List sx={{ paddingLeft: "32px" }}>
        <SingleListItem name="Discover" icon={<SearchIcon />} />
        <SingleListItem name="Playlist" icon={<PlaylistPlayIcon />} />
        <SingleListItem name="Movie" icon={<LiveTvIcon />} />
        <SingleListItem name="TV Shows" icon={<TvIcon />} />
        <SingleListItem name="My List" icon={<ListIcon />} />
      </List>
      <Divider sx={{ bgcolor: "#394B61" }} />
      <List sx={{ paddingLeft: "32px" }}>
        <SingleListItem name="Watch Later" icon={<UpdateIcon />} />
        <SingleListItem name="Recomended" icon={<FavoriteBorderIcon />} />
      </List>
      <Divider sx={{ bgcolor: "#394B61" }} />
      <List sx={{ paddingLeft: "32px" }}>
        <SingleListItem name="Settings" icon={<SettingsIcon />} />
        <SingleListItem name="Logout" icon={<LogoutIcon />} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#273244",
          boxShadow: "none",
          border: "none",
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "#273244",
          minHeight: "100vh",
          paddingLeft: "40px",
          paddingTop: "56px",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", paddingBottom: "50px" }}
        >
          <FormControl
            sx={{
              width: { sm: "567px" },
              background: "#1A2536",
              borderRadius: "8px",
              color: "#fff !important",
              border: "2px solid white !important",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: "1rem",
            }}
          >
            <SearchIcon sx={{ color: "#fff" }} />
            <OutlinedInput
              placeholder="Title, Movies, Keyword"
              sx={{
                color: "#fff",
                ":focus": "border:none !important",
                width: "100%",
                border: "none !important",
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setArrayRow(0);
                setSelectedMovie(null);
              }}
            />
          </FormControl>
        </Box>

        {/* Array1 starts here */}
        <Box>
          {arrayRow == 1 ? (
            <Zoom
              direction="up"
              in={checked}
              container={containerRef.current}
              style={{ transitionDelay: checked ? "200ms" : "0ms" }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 1,
                  bgcolor: "#394B61",
                  overflow: "hidden",
                  marginBottom: "20px",
                  borderRadius: "11px",
                  marginRight: "35px",
                  display: { sm: !checked ? "none" : "" },
                  maxWidth: "1100px",
                }}
                ref={containerRef}
              >
                <MovieDetails
                  selectedMovie={selectedMovie}
                  containerRef={containerRef}
                  checked={checked}
                />
              </Box>
            </Zoom>
          ) : null}

          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {moviesRowOne
              .filter((movie) =>
                movie.Title.match(new RegExp(searchValue, "i"))
              )
              .map((movie) => (
                <>
                  <Box
                    sx={{ display: "flex", flexDirection: "column" }}
                    onClick={() => handleChange(1, movie)}
                  >
                    <MovieCard movie={movie} selectedMovie={selectedMovie} />
                  </Box>
                </>
              ))}
          </Box>
        </Box>

        {/* Array2 starts here */}
        <Box>
          {arrayRow == 2 ? (
            <Zoom
              direction="up"
              in={checkedTwo}
              container={containerRefTwo.current}
              style={{ transitionDelay: checkedTwo ? "200ms" : "0ms" }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 1,
                  bgcolor: "#394B61",
                  overflow: "hidden",
                  marginBottom: "20px",
                  borderRadius: "11px",
                  marginRight: "35px",
                  display: { sm: !checkedTwo ? "none" : "" },
                  maxWidth: "1100px",
                }}
                ref={containerRefTwo}
              >
                <MovieDetails selectedMovie={selectedMovie} />
              </Box>
            </Zoom>
          ) : null}

          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {moviesRowTwo
              .filter((movie) =>
                movie.Title.match(new RegExp(searchValue, "i"))
              )
              .map((movie) => (
                <>
                  <Box
                    sx={{ display: "flex", flexDirection: "column" }}
                    onClick={() => handleChange(2, movie)}
                  >
                    <MovieCard movie={movie} selectedMovie={selectedMovie} />
                  </Box>
                </>
              ))}
          </Box>
        </Box>

        {/* Array3 starts here */}
        <Box>
          {arrayRow == 3 ? (
            <Zoom
              direction="up"
              in={checkedThree}
              container={containerRefThree.current}
              style={{ transitionDelay: checkedThree ? "200ms" : "0ms" }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 1,
                  bgcolor: "#394B61",
                  overflow: "hidden",
                  marginBottom: "20px",
                  borderRadius: "11px",
                  marginRight: "35px",
                  display: { sm: !checkedThree ? "none" : "" },
                  maxWidth: "1100px",
                }}
                ref={containerRefThree}
              >
                <MovieDetails selectedMovie={selectedMovie} />
              </Box>
            </Zoom>
          ) : null}

          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {moviesRowThree
              .filter((movie) =>
                movie.Title.match(new RegExp(searchValue, "i"))
              )
              .map((movie) => (
                <>
                  <Box
                    sx={{ display: "flex", flexDirection: "column" }}
                    onClick={() => handleChange(3, movie)}
                  >
                    <MovieCard movie={movie} selectedMovie={selectedMovie} />
                  </Box>
                </>
              ))}
          </Box>
        </Box>

        {/* Array4 starts here */}
        <Box>
          {arrayRow == 4 ? (
            <Zoom
              direction="up"
              in={checkedFour}
              container={containerRefFour.current}
              style={{ transitionDelay: checkedFour ? "200ms" : "0ms" }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 1,
                  bgcolor: "#394B61",
                  overflow: "hidden",
                  marginBottom: "20px",
                  borderRadius: "11px",
                  marginRight: "35px",
                  display: { sm: !checkedFour ? "none" : "" },
                  maxWidth: "1100px",
                }}
                ref={containerRefFour}
              >
                <MovieDetails selectedMovie={selectedMovie} />
              </Box>
            </Zoom>
          ) : null}

          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {moviesRowFour
              .filter((movie) =>
                movie.Title.match(new RegExp(searchValue, "i"))
              )
              .map((movie) => (
                <>
                  <Box
                    sx={{ display: "flex", flexDirection: "column" }}
                    onClick={() => handleChange(4, movie)}
                  >
                    <MovieCard movie={movie} selectedMovie={selectedMovie} />
                  </Box>
                </>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
