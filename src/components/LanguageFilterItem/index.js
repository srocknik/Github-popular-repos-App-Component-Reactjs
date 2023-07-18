// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, onChangeFilter, selectId} = props
  const {id, language} = eachLanguage

  const onClickFilterItem = () => {
    onChangeFilter(id)
  }

  const customizeBtn = selectId === id ? 'customize-btn' : 'normal-btn'

  return (
    <li className="filter-list-item-container">
      <button
        type="button"
        className={customizeBtn}
        onClick={onClickFilterItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
