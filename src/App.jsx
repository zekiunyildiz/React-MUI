import { Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";



const App = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        startIcon={<Person />}
        style={{ backgroundColor: "purple", color: "white" }}
      >
        Material UI
      </Button>
    </div>
  );
};

export default App;
