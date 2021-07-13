import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserPage.module.css";
import { ReactComponent as Followers } from "../img/usuario.svg";
import { ReactComponent as Repository } from "../img/repos.svg";

const UserPage = () => {
  const user = useSelector((state) => state.user);
  const repos = useSelector((state) => state.repos);
  console.log(repos);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>TrybeHub</h1>
      </header>
      <section className={styles.content}>
        <fieldset className={`${styles.userInfo} animeLeft`}>
          <legend className={styles.legend}>Usuário</legend>
          <img className={styles.avatar} src={user.avatar_url} alt="avatar" />
          <h2>{user.name}</h2>
          <h3>{user.login}</h3>
          <div className={styles.follow}>
            <Followers />
            <span style={{ color: "white" }}>- {user.followers} followers</span>
            <span style={{ color: "white" }}>- {user.following} following</span>
          </div>
          <h3>{user.location}</h3>
        </fieldset>
        <fieldset className={`${styles.repos} animeLeft`}>
          <legend className={styles.legend}>Repositórios</legend>
          <ul className={styles.repoContent}>
            {repos &&
              repos.map((repo) => (
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <li>
                    <Repository />
                    {repo.name}
                  </li>
                </a>
              ))}
          </ul>
        </fieldset>
      </section>
      <footer className={styles.footer}>
        Trybe©. Alguns direitos reservados.
      </footer>
    </main>
  );
};

export default UserPage;
