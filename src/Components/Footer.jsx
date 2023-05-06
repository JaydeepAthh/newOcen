import Accordion from "./Accordion";
import { FaDiscord, FaFacebook, FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <h1 style={{ marginBottom: "5vh" }}>FAQ</h1>
      <Accordion />
      <div style={{ position: "absolute", bottom: "5vh", width: "100%" }}>
        <div
          className="footerInner"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "860px",
          }}
        >
          <div>
            <h1>PARTNER</h1>
            <h2 style={{ fontWeight: "900" }}>FROSTY NARWHALS</h2>
            {/* <p style={{ fontSize: "10px" }}>
              Original design by, http://tubikstudio.com
            </p> */}
          </div>
          <div style={{ display: "flex", gap: "22px", fontSize: "30px" }}>
            <FaDiscord />
            <FaFacebook />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
    </div>
  );
}
