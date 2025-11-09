import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/home/Home.module.css";

const teams = [
  {
    title: "AMV Team",
    icon: "/assets/icons/amv.svg",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd",
  },
  {
    title: "WebD Team",
    icon: "/assets/icons/webdev.svg",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd",
  },
  {
    title: "DNA Team",
    icon: "/assets/icons/design.svg",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd",
  },
  {
    title: "MN Team",
    icon: "/assets/icons/newsletter.svg",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd",
  },
  {
    title: "Music Team",
    icon: "/assets/icons/music.svg",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd",
  },
];

const remainder = teams.length % 3;

const teamChunks = remainder
  ? [
      teams.slice(0, remainder),
      ...Array.from(
        { length: Math.floor((teams.length - remainder) / 3) },
        (_, i) => teams.slice(remainder + i * 3, remainder + i * 3 + 3)
      ),
    ]
  : Array.from({ length: arr.length / 3 }, (_, i) =>
      teams.slice(i * 3, i * 3 + 3)
    );

export default function AboutUsSection() {
  return (
    <div className={styles["header-content"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-content"]}>
          <p className={styles["about-title"]}>About Us</p>
          <p className={styles["about-subtitle"]}>
            OUR SOCIETY CONSISTS OF FIVE TEAMS.
          </p>
          <p className={styles["about-description"]}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat
            torquent netus est augue. Commodo risus vel adipiscing, est
            convallis nostra. Class fringilla etiam dis tellus suscipit
            adipiscing fusce curabitur. Proin pellentesque nascetur consectetur
            convallis, varius quisque. Fermentum ac libero et maximus primis
            litora massa orci. Fames auctor maecenas . <br />
            <br />
            Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet
            maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna
            nulla praesent volutpat hac. Morbi
          </p>
          <Button
            text={"Meet the teams"}
            color={"trans-white"}
            fullWidth={true}
          />
        </div>
        {teamChunks.map((teams, idx) => (
          <div className={styles["about-col1"]} key={idx}>
            {teams.map((team) => (
              <div key={team.title} className={styles["about-box1"]}>
                <Image
                  alt={team.title}
                  src={team.icon}
                  height={45}
                  width={45}
                />
                <p className={styles["about-team-name"]}>{team.title}</p>
                <p>{team.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
