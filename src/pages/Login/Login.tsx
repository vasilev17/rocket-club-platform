import { useState } from "react";
import planet from "../../assets/planet.svg";
import "./Login.css";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="sceneCover">
        <div className="chipsSection">
          <div className="chipLeft"></div>
          <div className="chipText">Waitlist</div>
          <div className="chipRight"></div>
        </div>
        <h1 className="title">
          Rocket
          <br /> Club
        </h1>
        <p className="description">
          Welcome to the platform of rocket club TU Sofia. This platform aims to support
          and facilitate the communication and activities of all club participants.
        </p>
        <img
          style={{
            position: "absolute",
            inset: "auto 0% -136px",
            width: "100%",
            height: "44vh",
          }}
          src={planet}
          alt="Floating-Planet"
        />
      </div>
    </>
  );
}

export default Login;
