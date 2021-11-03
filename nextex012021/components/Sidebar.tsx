import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/350" alt="user avatar" />
      <h3>
        <span>Champ</span> Dev
      </h3>
      <p>Web Developer</p>
      <p>
        <GiTie className="w-6 h-6" /> Download Resume
      </p>
      {/* social icon */}
      {/* address */}
      <div>
        <div>
          <span>Thai</span>
        </div>
        <p>email@email.com</p>
        <p>1234567890</p>
      </div>
      {/* Email Button */}
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
