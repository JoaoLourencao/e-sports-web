interface GameBannerProps{
  bannerUrl: string;
  title: string;
  count: number;
}

export function GameBanner(props: GameBannerProps) {
  return(
  <a href="" className='relative rounded-lg overflow-hidden'>
    <img src={props.bannerUrl} alt="game1" />
    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
      <strong className="text-white font-bold block">{props.title}</strong>
      <span className='text-zinc-400 text-sm block mt-1'>{props.count} anúncio(s)</span>
    </div>
  </a>
  )
}