import './index.css'

const ImageItem = props => {
  const {itemDetails, onImageSelect} = props
  const {thumbnailUrl, id} = itemDetails
  const onClickImage = () => {
    onImageSelect(id)
  }
  return (
    <li className="list-item" onClick={onClickImage}>
      <button type="button" className="tab">
        <img src={thumbnailUrl} alt="thumbnail" className="image-thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
