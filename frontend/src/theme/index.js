import { createMuiTheme } from "@material-ui/core/styles";
import Themes from "./Themes";

export default theme => createMuiTheme(Themes[theme]);
