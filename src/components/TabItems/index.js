import './index.css'

const TabItems = props => {
  const {isActive, tabItem, onActiveTab} = props
  const {tabId, displayText} = tabItem
  const activeTab = isActive ? 'tabStyle' : ''

  const onClickTab = () => {
    onActiveTab(tabId)
  }
  return (
    <li className="list-item" onClick={onClickTab}>
      <button type="button" className={`tab ${activeTab}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
