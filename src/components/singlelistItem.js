import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customFontSize: {
    fontSize: "0.9375rem !important",
    fontFamily: "'Open Sans', sans-serif !important",
    fontWeight: "600 !important",
    lineHeight: "1.2 !important",
  },
}));

const SingleListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon
          sx={{ color: "#D4D7DD", minWidth: 0, paddingRight: "14px" }}
        >
          {props.icon}
        </ListItemIcon>
        <ListItemText
          sx={{
            color: "#D4D7DD",
          }}
          primary={props.name}
          classes={{ primary: classes.customFontSize }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SingleListItem;
