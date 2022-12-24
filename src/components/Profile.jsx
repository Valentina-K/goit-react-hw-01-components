export const Profile = ({username, tag, location, avatar, stats}) => {
    return <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt={avatar}
      className="avatar"
    />
            <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">{stats.followers}</span>
      <span className="quantity">{stats.followers.quantity}</span>
    </li>
    <li>
      <span className="label">{stats.views}</span>
      <span className="quantity">{stats.views.quantity}</span>
    </li>
    <li>
      <span className="label">{stats.likes}</span>
      <span className="quantity">{stats.likes.quantity}</span>
    </li>
  </ul>
</div>
}