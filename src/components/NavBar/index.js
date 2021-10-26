import { Containment, Menu } from "./NavBar.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavBar = () => {
  return (
    <Containment container maxWidth="xl" alignItems="center">
      <img
        src="images/download__1_-removebg-preview 1 (1).png"
        alt="ccis logo"
      />
      <h1>College of Information & Computing Sciences</h1>
      <Menu>
        <button>
          About Us <KeyboardArrowDownIcon fontSize="large" />
        </button>
        <button>
          Research and Innovation <KeyboardArrowDownIcon fontSize="large" />{" "}
        </button>
        <button>
          Programs Offered <KeyboardArrowDownIcon fontSize="large" />{" "}
        </button>
        <button>
          Others <KeyboardArrowDownIcon fontSize="large" />{" "}
        </button>
      </Menu>
    </Containment>
  );
};

export default NavBar;
