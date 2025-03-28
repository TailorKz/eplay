import { Imagem, Titulo, Precos } from './styles'
import bannerimg from '../../assets/images/banner-homem-aranha2.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerimg})` }}>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span>
        <br />
        por apenas R$ 99,90
      </Precos>
    </div>
  </Imagem>
)

export default Banner
