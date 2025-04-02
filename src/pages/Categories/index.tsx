import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    descricption:
      'Em Resident Evil 4, você joga como Leon S. Kennedy, o protagonista de Resident Evil 2. Leon agora trabalha como agente do governo dos EUA.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    descricption:
      'Em Resident Evil 4, você joga como Leon S. Kennedy, o protagonista de Resident Evil 2. Leon agora trabalha como agente do governo dos EUA.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    descricption:
      'Em Resident Evil 4, você joga como Leon S. Kennedy, o protagonista de Resident Evil 2. Leon agora trabalha como agente do governo dos EUA.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    descricption:
      'Em Resident Evil 4, você joga como Leon S. Kennedy, o protagonista de Resident Evil 2. Leon agora trabalha como agente do governo dos EUA.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    descricption:
      'Diablo IV é a derradeira experiência de RPG de ação, com mal infindável para extinguir, inúmeras habilidades para dominar, masmorras ...',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    descricption:
      'Diablo IV é a derradeira experiência de RPG de ação, com mal infindável para extinguir, inúmeras habilidades para dominar, masmorras ...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    descricption:
      'Diablo IV é a derradeira experiência de RPG de ação, com mal infindável para extinguir, inúmeras habilidades para dominar, masmorras ...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    descricption:
      'Diablo IV é a derradeira experiência de RPG de ação, com mal infindável para extinguir, inúmeras habilidades para dominar, masmorras ...',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)
export default Categories
