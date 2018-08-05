import React from 'react'

const TwitterSection = props => {
  const tweets = props.tweets

  return (
    <div className="twitter" style={{padding: '25px'}}>
      <h2>
        Recent Twitter Usage <i className="twitter icon" />
      </h2>
      <br />
      {tweets.length ? (
        <div className="ui three column grid">
          {tweets.map(tweet => {
            return (
              <div key={tweet.time} className="column">
                <div className="ui fluid card" style={{height: '240px'}}>
                  <div className="content">
                    <div className="header">
                      <i className="twitter square icon innerTweet" />
                      {tweet.name}
                    </div>
                  </div>
                  <div className="innerTweet middle aligned content">
                    {tweet.text}
                  </div>
                  <div className="extra content">
                    <span>Followers: {tweet.followers.toLocaleString()}</span>
                    <span className="right floated">{tweet.location}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div style={{fontSize: '1.4em', fontStyle: 'bold'}}>
          No recent tweets.
        </div>
      )}
    </div>
  )
}

export default TwitterSection
