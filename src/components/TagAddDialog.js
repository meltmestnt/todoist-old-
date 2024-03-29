import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogColorPicker from "./DialogColorPicker";
import DialogSwitch from "./DialogSwitch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: "100%",
    margin: 5
  },
  text: {
    margin: 5
  }
}));
function TagAddDialog(props) {
  const { open, close, title, body, addProject } = props;
  const [color, toggleColor] = React.useState("");
  const [favorite, toggleFavorite] = React.useState(false);
  const [name, toggleChange] = React.useState("");
  const classes = useStyles();
  const handleColor = ev => {
    toggleColor(ev.target.value || null);
  };
  const handleFavorite = ev => {
    toggleFavorite(!favorite);
  };
  const handleSubmit = () => {
    if (color && name.length >= 3) {
      addProject({
        name,
        color,
        favorite
      });
    }
    close();
    clearInfo();
  };
  const clearInfo = () => {
    toggleColor("");
    toggleChange("");
    toggleFavorite(false);
  };
  return (
    <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={close}>
      <DialogTitle id="form-dialog-title">Создать {title}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.text}>
          Название {body}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          style={{ margin: 5 }}
          variant="outlined"
          fullWidth
          value={name}
          onChange={e => toggleChange(e.target.value)}
          label={`Введите название ${body}`}
        />
        <DialogColorPicker
          color={color}
          body={body}
          open={open}
          classes={classes}
          handleChange={handleColor}
        ></DialogColorPicker>
        <DialogSwitch
          checked={favorite}
          handleChange={handleFavorite}
        ></DialogSwitch>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Отменить
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TagAddDialog;
