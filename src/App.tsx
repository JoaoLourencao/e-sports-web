import { MagnifyingGlassPlus } from 'phosphor-react'
import '../src/styles/main.css'
import logo from './assets/logo-nlw.svg'

function App() {
  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="logo nlw"/>
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradients bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game1.png" alt="game1" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="text-white font-bold block">League of Legends</strong>
            <span className='text-zinc-400 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game2.png" alt="game2" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="text-white font-bold block">Dota 2</strong>
            <span className='text-zinc-400 text-sm block mt-1'>2 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game3.png" alt="game3" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="text-white font-bold block">CS GO</strong>
            <span className='text-zinc-400 text-sm block mt-1'>7 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game4.png" alt="game4" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="text-white font-bold block">Apex Legends</strong>
            <span className='text-zinc-400 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game5.png" alt="game5" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="text-white font-bold block">Fortnite</strong>
            <span className='text-zinc-400 text-sm block mt-1'>10 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game6.png" alt="game6" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="text-white font-bold block">World of Warcraft</strong>
            <span className='text-zinc-400 text-sm block mt-1'>1 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradients mt-8 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={20}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
