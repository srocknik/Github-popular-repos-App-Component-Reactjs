// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepoItem} = props

  const {avatarUrl, forksCount, issuesCount, name, startsCount} = eachRepoItem

  return (
    <li className="repo-list-item-container">
      <img src={avatarUrl} alt={name} className="repo-item-img" />
      <h1 className="repo-item-heading">{name}</h1>
      <div className="repo-item-details-container">
        <div className="repo-icon-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
            alt="stars"
            className="repo-items-icon"
          />
          <p className="repo-item-text">{startsCount}</p>
        </div>
        <div className="repo-icon-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
            alt="forks"
            className="repo-items-icon"
          />
          <p className="repo-item-text">{forksCount}</p>
        </div>
        <div className="repo-icon-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="repo-items-icon"
          />
          <p className="repo-item-text">{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
