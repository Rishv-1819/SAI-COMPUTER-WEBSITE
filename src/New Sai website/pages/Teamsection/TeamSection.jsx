import React from "react";
import styles from "./TeamSection.module.css";

import team1 from "../../../assets/newsaiwebsiteimage/img_avatar.png";
import team2 from "../../../assets/newsaiwebsiteimage/img_avatar.png";
import team3 from "../../../assets/newsaiwebsiteimage/img_avatar.png";
import team4 from "../../../assets/newsaiwebsiteimage/img_avatar.png";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Vipin Sir",
    role: "Development Manager",
    image: team1,
    link: "/teamdevelopment",
  },
  {
    id: 2,
    name: "Mike Doe",
    role: "Data Analysts",
    image: team2,
    link: "/teamdataanalysts",
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Business Analysts",
    image: team3,
    link: "/teambusiness",
  },
  {
    id: 4,
    name: "Karen Doe",
    role: "HR Department",
    image: team4,
    link: "/teamhrdepartment",
  },
];

function TeamSection() {
  return (
    <section className={styles["teamSection"]}>
      <div className={styles["container"]}>
        <h2 className={styles["title"]}>MEET THE TEAM</h2>

        <div className={styles["underline"]}></div>


        <div className={styles["teamGrid"]}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles["card"]}>
              <img
                src={member.image}
                alt={member.name}
                className={styles["image"]}
              />

              <h3 className={styles["name"]}>{member["name"]}</h3>

              <p className={styles["role"]}>{member.role}</p>

              <a href={member.link} className={styles["readMore"]}>
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;