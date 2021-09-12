import { Row, Col } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
import "./sidebar.css"
const Sidebar = () => {
  
 return (
  <Row>
      <Col>
      <nav className="root-nav">
        <div className="sidebar">
          <div className="logo">
          
              <title>Spotify</title>
              
          </div>
          <ul>
            <li className="test">
            <Link  to="/">
              <a href="home.html" className="position active">
                <svg width="24" height="28" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
                  <path d="M12 0L0 7.25581V24H8.93752V14.1563H15.0625V24H24V7.25581L12 0Z" fill="currentColor">
                  </path>
                </svg>
                Home
              </a>
              </Link>
            </li>
            <li className="test">
              <a hre="#" className="position">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon">
                  <path
                    d="M23.7728 22.6943L17.5762 16.5969C19.1989 14.834 20.1959 12.5024 20.1959 9.93683C20.1951 4.44852 15.6745 0 10.0976 0C4.52065 0 0 4.44852 0 9.93683C0 15.4251 4.52065 19.8737 10.0976 19.8737C12.5072 19.8737 14.7172 19.0402 16.4532 17.6546L22.6738 23.7761C22.9769 24.0746 23.469 24.0746 23.7721 23.7761C24.0759 23.4775 24.0759 22.9929 23.7728 22.6943ZM10.0976 18.3448C5.37889 18.3448 1.55365 14.5804 1.55365 9.93683C1.55365 5.29321 5.37889 1.52884 10.0976 1.52884C14.8163 1.52884 18.6415 5.29321 18.6415 9.93683C18.6415 14.5804 14.8163 18.3448 10.0976 18.3448Z"
                    fill="currentColor"></path>
                </svg>
                Search
              </a>
            </li>
            <li className="test">
              <a hre="#" className="position">
                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
                  <path
                    d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                    fill="currentColor"></path>
                </svg>
                Search
              </a>
            </li>
          </ul>
          <ul>
            <li className="test">
              <a href="#" className="position">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
                  <path
                    d="M19.7143 0.5L4.28569 0.5C0 0.5 0 0.5 0 4.78569V20.2143C0 24.5 0 24.5 4.28569 24.5H19.7143C24 24.5 24 24.5 24 20.2143V4.78569C24 0.5 24 0.5 19.7143 0.5ZM16.2857 13.3571H12.8571V16.7857C12.8571 17.2591 12.4734 17.6429 12 17.6429C11.5266 17.6429 11.1428 17.2591 11.1428 16.7857V13.3571H7.71428C7.24088 13.3571 6.85712 12.9734 6.85712 12.5C6.85712 12.0266 7.24088 11.6428 7.71428 11.6428H11.1429V8.21428C11.1429 7.74088 11.5266 7.35712 12 7.35712C12.4734 7.35712 12.8571 7.74088 12.8571 8.21428V11.6429H16.2857C16.7591 11.6429 17.1429 12.0266 17.1429 12.5C17.1429 12.9734 16.7591 13.3571 16.2857 13.3571Z"
                    fill="currentColor"></path>
                </svg>
                Create Playlist
              </a>
            </li>
            <li className="test">
              <a href="#" className="position">
                <img src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                   className="svg-icon"/>
                Liked Songs
              </a>
            </li>
          </ul>
          
          <div>
            <ul className="third-ul">
              <li className="li-position">Funky Heavy Bluesy</li>
              <li className="li-position">Your Top Songs 2020</li>
              <li className="li-position">In Love With You - Erykah B...</li>
              <li className="li-position">This is Rod Stewart</li>
              <li className="li-position">FRANCHISE ft. Young Thug ...</li>
              <li className="li-position">Your Top Songs 2019</li>
              <li className="li-position">Palleggio</li>
              <li className="li-position">This Is Joe Bonamassa</li>
              <li className="li-position">Jun19</li>
              <li className="li-position">Jack 30th Party 2</li>
              <li className="li-position">Jack 30th Party 1</li>
              <li className="li-position">This Is Opeth</li>
              <li className="li-position">Metal Ballads</li>
              <li className="li-position">New Playlist</li>
              <li className="li-position">Your Top Songs 2018</li>
              <li className="li-position">Jazz Classics Blue Note Editi...</li>
                <li className="li-position"><a href="artist.html">Artist</a></li>
                  <li className="li-position"><a href="album.html">Album</a></li>
                <li className="li-position"><a href="login.html">sign out</a></li>
            </ul>
            <ul>
              <li className="test">
                <a href="#" className="position">
                  <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 fIDrcz"
                    className="svg-icon">
                    <path d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 
                                          22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 
                                          4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z" fill="currentColor">
                    </path>
                  </svg>
                  Install App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </Col>
  </Row>
 )
}
export default withRouter(Sidebar)