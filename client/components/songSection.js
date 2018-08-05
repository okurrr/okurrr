import React from 'react'

const SongSection = props => {
  const songs = props.songs

  return (
    <div className="albums" style={{padding: '25px'}}>
      <h2>
        Albums <i className="music icon" />
      </h2>
      <br />
      {songs.length ? (
        <div className="ui five column grid">
          {songs.map(song => {
            return (
              <div className="column" key={song.result.full_title}>
                <div className="ui fluid card" style={{height: '310px'}}>
                  <a className=" image" href={song.result.url} target="_blank">
                    <img src={song.result.header_image_url} />
                  </a>
                  <div className=" description content innerTweet">
                    {song.result.full_title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div style={{fontSize: '1.4em', fontStyle: 'bold'}}>
          No albums reference this word.
        </div>
      )}
    </div>
  )
}

export default SongSection
