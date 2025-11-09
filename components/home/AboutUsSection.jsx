import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/home/Home.module.css";

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
        <div className={styles["about-col1"]}>
          <div className={styles["about-box1"]}>
            <Image src="/assets/icons/amv.svg" height={45} width={45} />
            <p className={styles["about-team-name"]}>AMV Team</p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
              primis nisi imperd
            </p>
          </div>
          <div className={styles["about-box1"]}>
            <Image src="/assets/icons/amv.svg" height={45} width={45} />
            <p className={styles["about-team-name"]}>AMV Team</p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
              primis nisi imperd
            </p>
          </div>
        </div>
        <div className={styles["about-col1"]}>
          <div className={styles["about-box1"]}>
            <Image src="/assets/icons/amv.svg" height={45} width={45} />
            <p className={styles["about-team-name"]}>AMV Team</p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
              primis nisi imperd
            </p>
          </div>
          <div className={styles["about-box1"]}>
            <Image src="/assets/icons/amv.svg" height={45} width={45} />
            <p className={styles["about-team-name"]}>AMV Team</p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
              primis nisi imperd
            </p>
          </div>
          <div className={styles["about-box1"]}>
            <Image src="/assets/icons/amv.svg" height={45} width={45} />
            <p className={styles["about-team-name"]}>AMV Team</p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
              primis nisi imperd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
