import Image from "next/image"
import s from './catalog.module.scss'

export const Badge = ({ badge }: {badge: string}) => {

  return (
    <>

      { badge === 'PROMOTION' &&

        <div className={ s.type }>
          <Image src={ '/images/testData/action.svg' } alt="action" fill />
        </div>

      }

      { badge === 'HIT' &&

        <div className={ s.type }>
          <Image src={ '/images/testData/hit.svg' } alt="action" fill />
        </div>

      }

    </>
  )

}