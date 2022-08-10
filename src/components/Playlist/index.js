import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const Playlist = props => {
  const {songDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="music-playlist">
      <div className="image-and-song-name-container">
        <img src={imageUrl} alt="track" className="music-image" />
        <div className="song-name-genre-container">
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-container">
        <p className="song-duration">{duration}</p>
        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={onClickDelete}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default Playlist
