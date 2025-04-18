import Card from "react-bootstrap/Card"

interface MusicCardProps {
  title: string
  artist: string
  image: string
}

function MusicCard({ title, artist, image }: MusicCardProps) {
  return (
    <Card className="new-release-card">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="new-release-image"
      />
      <Card.Body>
        <Card.Title className="new-release-title">{title}</Card.Title>
        <Card.Text className="new-release-artist">{artist}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MusicCard
