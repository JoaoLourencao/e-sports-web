import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import { Check, GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Game } from '../../App';
import { CustomInput } from '../CustomInput';

export function CreateAdModal() {
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
    <>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

        <Dialog.Content className='fixed bg-[#2A2634] py-6 px-7 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[488px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-2xl font-black'>Publique um anúncio</Dialog.Title>

          <form className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-base text-white' htmlFor='game'>Qual é o game?</label>
              <select
                id='game'
                className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
              >
                <option value="" disabled selected>Selecione o jogo que deseja jogar</option>
                {games.map((game) => {
                  return <option key={game.id} value={game.id}>{game.title}</option>
                })}
              </select>
              {/* <Select.Root>
                <Select.Trigger aria-label='game' className='flex justify-between items-center bg-zinc-900 py-3 px-4 rounded text-sm &[data-placeholder]:text-zinc-500'>
                  <Select.Value placeholder={() => (
                    <Text>Selecione o jogo que deseja jogar</Text>
                  )}
                  />
                  <Select.Icon>
                    <CaretDown className='w-4 h-4 text-zinc-400' />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content>
                    <Select.ScrollUpButton>
                      <ArrowFatUp className='w-4 h-4 text-emerald-400' />
                    </Select.ScrollUpButton>

                    <Select.Viewport>
                      <Select.Item value="apple">
                        <Select.ItemText>
                          apple
                        </Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className='w-4 h-4 text-emerald-400' />
                        </Select.ItemIndicator>
                      </Select.Item>
                    </Select.Viewport>
                    <Select.ScrollDownButton>
                      <ArrowFatDown className='w-4 h-4 text-emerald-400' />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root> */}

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

            <div className='mt-2 flex gap-2 text-sm items-center'>
              <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
                <Checkbox.Indicator>
                  <Check className='w-4 h-4 text-emerald-400' />
                </Checkbox.Indicator>
              </Checkbox.Root>
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
    </>
  );
}