import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface NewReleaseProps {
  releases: { id: number; title: string; image: string }[]
}

function NewReleases({ releases }: NewReleaseProps) {
  return (
    <div className="new-releases">
      <h3>Novità</h3>
      <Row>
        {releases.map((release) => (
          <Col key={release.id} xs={6} md={4} lg={3} className="mb-3">
            <div className="release-card">
              <img
                src={release.image}
                alt={release.title}
                className="release-image"
              />
              <p className="release-title">{release.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default NewReleases
