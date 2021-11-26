import { Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button:{
    color:"white",
    backgroundColor:"black"
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        startIcon={<Person />}
        className={classes}
      >
        Material UI
      </Button>
    </div>
  );
};

export default App;
