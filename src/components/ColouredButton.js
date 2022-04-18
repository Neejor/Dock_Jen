import { Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const ColouredButton = ({ text }) => {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      borderRadius: "40px",
      padding: "10px 20px",
      "&:hover": {
        backgroundColor: red[700],
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({}));
  const classes = useStyles();

  return (
    <ColorButton variant="contained" color="primary" className={classes.margin}>
      {text}
    </ColorButton>
  );
};

export default ColouredButton;
