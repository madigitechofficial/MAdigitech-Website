import "./waywethink.css";
import WayWeThinkDesktop from "./WayWeThinkDesktop";
import WayWeThinkMobile from "./WayWeThinkMobile";

export default function WayWeThink() {
  return (
    <section id="wtw-section">
      <div className="wtw-intro">
        <p>Our Philosophy</p>
        <h2>
          The Way
          <br />
          We <span>Think.</span>
        </h2>
      </div>

      <WayWeThinkMobile />
      <WayWeThinkDesktop />
    </section>
  );
}