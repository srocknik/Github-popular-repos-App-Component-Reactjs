import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {isLoading: true, repoList: [], selectId: languageFiltersData[0].id}

  componentDidMount() {
    this.getApiResponse()
  }

  getApiResponse = async () => {
    const {selectId} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${selectId}`

    const response = await fetch(apiUrl)
    const fetchData = await response.json()
    const updatedData = fetchData.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      startsCount: each.stars_count,
    }))

    this.setState({repoList: updatedData, isLoading: false})
  }

  onChangeFilter = id => {
    this.setState({selectId: id, isLoading: true}, this.getApiResponse)
  }

  renderHeader = () => {
    const {selectId} = this.state

    return (
      <div className="heading-filter-list-container">
        <h1 className="popular-heading">Popular</h1>
        <div>
          <ul className="filter-list-container">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                eachLanguage={each}
                key={each.id}
                onChangeFilter={this.onChangeFilter}
                selectId={selectId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, repoList} = this.state
    console.log(repoList)

    return (
      <div className="popular-repo-bg-container">
        {this.renderHeader()}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={50} width={50} />
          </div>
        ) : (
          <ul className="repo-list-container">
            {repoList.map(each => (
              <RepositoryItem eachRepoItem={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
