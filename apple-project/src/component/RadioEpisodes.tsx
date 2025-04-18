import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface RadioEpisodeProps {
  episodes: { id: number; title: string; description: string; image: string }[]
}

function RadioEpisodes({ episodes }: RadioEpisodeProps) {
  return (
    <div className="radio-episodes">
      <h3>Nuovi Episodi Radio</h3>
      <Row>
        {episodes.map((episode) => (
          <Col key={episode.id} xs={12} md={6} lg={4} className="mb-3">
            <div className="episode-card">
              <img
                src={episode.image}
                alt={episode.title}
                className="episode-image"
              />
              <h5 className="episode-title">{episode.title}</h5>
              <p className="episode-description">{episode.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RadioEpisodes
