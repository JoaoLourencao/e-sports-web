import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';
import '../src/styles/main.css';
import logo from './assets/logo-nlw.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CustomInput } from './components/CustomInput/CustomInput';
import { GameBanner } from './components/GameBanner';

interface Game {
  id: string,
  title: string
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    try {
      fetch('http://localhost:3333/games')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setGames(data)
        })
    } catch (e) {
      console.log(e, "error")
    }
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="logo nlw" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradients bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              count={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2A2634] py-6 px-7 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[488px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-2xl font-black' >Publique um anúncio</Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <CustomInput id='game' label='Qual é o game?' placeholder='Selecione o jogo que deseja jogar' />
              </div>
              <div className='flex flex-col gap-2'>
                <CustomInput id='name' label='Seu nome (ou nickname)' placeholder='Como te chamam dentro do jogo?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <CustomInput id='yearsPlaying' label='Joga a quantos anos?' placeholder='Tudo bem ser ZERO' type='number' />
                </div>
                <div className='flex flex-col gap-2'>
                  <CustomInput id='discord' label='Qual seu discord?' placeholder='Usuário#0000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold text-base text-white' htmlFor="hourStart">Quando costuma a jogar?</label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button
                      title='Domingo'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      D
                    </button>
                    <button
                      title='Segunda'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title='Terça'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      T
                    </button>
                    <button
                      title='Quarta'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title='Quinta'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title='Sexta'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title='Sábado'
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='font-semibold text-base text-white' htmlFor="hourStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <CustomInput id='hourStart' placeholder='De' type='time' />
                    <CustomInput id='hourEnd' placeholder='Até' type='time' />
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <CustomInput id='hourEnd' type='checkbox' />
                Costumo me conectar ao chat de voz
              </div>
              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 rounded-md px-5 font-semibold h-12 hover:bg-zinc-600'>Cancelar</Dialog.Close>
                <button
                  type='submit'
                  className='bg-violet-500 rounded-md px-5 font-semibold h-12 flex items-center gap-2 hover:bg-violet-600'
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
