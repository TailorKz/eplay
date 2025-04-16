import Section from '../Section'
import { Item, Items, Action } from './styles'
import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/zw47_q9wbBE?si=tO6FY6SHq1CxPBF'
  }
]
const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      {mock.map((media, index) => (
        <Item key={media.url}>
          <img src={media.url} alt={`Mídia ${index + 1} de Nome do Jogo`} />
          <Action>
            <img src={zoom} alt="Clique para maximizar a imagem" />
          </Action>
        </Item>
      ))}
    </Items>
  </Section>
)

export default Gallery
