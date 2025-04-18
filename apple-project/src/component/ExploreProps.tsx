import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface ExploreProps {
  items: { id: number; title: string; link: string }[]
}

function ExploreSection({ items }: ExploreProps) {
  return (
    <div className="explore-section">
      <h3>Altro da Esplorare</h3>
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={6} md={4} lg={3} className="mb-3">
            <a
              href={item.link}
              className="explore-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="explore-title">{item.title}</p>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ExploreSection
