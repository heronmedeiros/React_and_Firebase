import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }

    console.log(`you clicked ${card.src}`)
  };

  return (
    <div className='card' key={card.id}>
      <div className={ flipped ? 'flipped' : '' }>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src="/images/cover.png"
          alt='card back'
          onClick={handleClick}/>
      </div>
    </div>
  )
}

