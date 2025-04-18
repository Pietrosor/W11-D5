import { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MusicCard from "./MusicCard"
import NewReleases from "./Novità"
import RadioEpisodes from "./RadioEpisodes"
import ExploreSection from "./ExploreProps"

interface Track {
  id: number
  title: string
  artist: {
    name: string
  }
  album: {
    cover: string
  }
}

function MainContent() {
  const newReleases = [
    { id: 1, title: "Rauw Alejandro", image: "/2a.png" },
    { id: 2, title: "Micheal Bublè, Carly Pearce", image: "/2c.png" },
    { id: 3, title: "Stephan Moccio", image: "/2d.png" },
    { id: 4, title: "Julia Michaels", image: "/2e.png" },
  ]

  const radioEpisodes = [
    {
      id: 1,
      title: "Chill Mix",
      description: "Rilassati con i tuoi vibe",
      image: "/1a.png",
    },
    {
      id: 2,
      title: "Musica Uno",
      description: "Balla con i tuoi artisti preferiti",
      image: "/1b.png",
    },
  ]

  const [tracks, setTracks] = useState<Track[]>([])
  const [searchQuery, setSearchQuery] = useState("The Weeknd")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
        )
        if (!response.ok) {
          throw new Error("Errore durante il recupero dei dati")
        }
        const data = await response.json()
        setTracks(data.data)
      } catch (err: any) {
        setError(err.message || "Si è verificato un errore")
      } finally {
        setLoading(false)
      }
    }

    fetchTracks()
  }, [searchQuery])

  const visibleTracks = isDesktop ? tracks.slice(0, 10) : tracks.slice(0, 6)

  const exploreItems = [
    {
      id: 1,
      title: "Podcast",
      link: "#podcast",
    },
    {
      id: 2,
      title: "Eventi",
      link: "#eventi",
    },
    {
      id: 3,
      title: "Playlist Speciali",
      link: "#playlist",
    },
    {
      id: 4,
      title: "Classifiche",
      link: "#playlist",
    },
    {
      id: 5,
      title: "I più ascoltati",
      link: "#playlist",
    },
    {
      id: 6,
      title: "Billboard 100",
      link: "#playlist",
    },
    {
      id: 7,
      title: "Back in time",
      link: "#playlist",
    },
    {
      id: 8,
      title: "Billboard 50",
      link: "#playlist",
    },
  ]

  return (
    <div className="main-content">
      <NewReleases releases={newReleases} />
      <RadioEpisodes episodes={radioEpisodes} />

      <h2>Nuove Uscite</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cerca un artista o un album"
        className="search-input"
      />

      {loading ? (
        <p>Caricamento in corso...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : visibleTracks.length === 0 ? (
        <p>Nessun risultato trovato</p>
      ) : (
        <Row className="tracks-container">
          {visibleTracks.map((track) => (
            <Col key={track.id} xs={12} md={6} lg={4}>
              <MusicCard
                title={track.title}
                artist={track.artist.name}
                image={track.album.cover}
              />
            </Col>
          ))}
        </Row>
      )}

      <ExploreSection items={exploreItems} />
    </div>
  )
}

export default MainContent
