const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="pcard">
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <a href={html_url} className="pbtn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
