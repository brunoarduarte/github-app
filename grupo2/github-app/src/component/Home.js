import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, fetchUserRepos, fetchUsers } from '../actions';
import styles from './Home.module.css'
import '../App.css';
import Picture from '../img/tentacles.gif';
import { Link } from 'react-router-dom';

const Home = () => {

  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChange ({target}) {
    dispatch(fetchUsers(target.value));
  }

  function handleClick({target}) {
    dispatch(fetchUserData(target.value));
    dispatch(fetchUserRepos(target.value));
  }

  return (
    <section className={ styles.container }>
      <div className={ styles.imgContent }>
        <img className={ styles.octocat } src={ Picture } alt="octocat"/>
      </div>
      <div>
        <h1 className={ styles.title }>TrybeHub</h1>
      </div>
      <form className={ styles.form }>
        <input className="animeInput" type="text" onChange={ handleChange }/>
      </form>
      <div className={ styles.usersContent }>
        <ul className={ styles.users }>
          {data && data.map((user) =>
            <li key={user.id} className={ `${styles.card} animeLeft` }>
              <h2>{user.login}</h2>
              <img className={ styles.image } src={ user.avatar_url } alt="" />
              <Link to="user">
                <button type="button" value={user.login} onClick={ handleClick }>Detalhes</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <footer className={ styles.footer }>
        Trybe©. Alguns direitos reservados.
      </footer>
    </section>
  )
}

export default Home;
