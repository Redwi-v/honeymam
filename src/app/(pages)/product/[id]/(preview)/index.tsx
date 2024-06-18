'use client'

import { IImage, IVideo } from "@/shared/api/products/types"
import { ChangeEvent, FC, MutableRefObject, useEffect, useRef, useState } from "react"

import { KeenSliderHooks, KeenSliderInstance, useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import s from './preview.module.scss'
import { PlayImage } from "@/app/_images/play"
import { Badge } from "@/widgets/catalog"
import { FullScreenImage } from "@/app/_images/full.screen"
import { PauseImage } from "@/app/_images/pause"
import { ArrowImage } from "@/app/_images/arrow"
import { CrossImage } from "@/app/_images/cross"
import { cssIf } from "@/shared/scripts"

interface IPreviewProps {

  images: IImage[],
  videos: IVideo[],
  type: string,

}

const noImageItem = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019',
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019',
  id: 123314123,
  type: 'image',
}

export interface IActiveItem { type: string, src: string, id: number, index?: number }

export const Preview: FC<IPreviewProps> = ( { images = [], videos = [], type } ) => {

  const [ fullPreviewOpen, setFullPreviewOpen ] = useState( false )
  const [ activeItem, setActiveItem ] = useState<IActiveItem>()


  useEffect( () => {

    let activeItem: IActiveItem = images[ 0 ] && { type: 'image', src: images[ 0 ].image, id: images[ 0 ].id }

    if ( !activeItem ) activeItem = videos[ 0 ] && { type: 'video', src: videos[ 0 ].video, id: videos[ 0 ].id }
    if ( !activeItem ) activeItem = noImageItem

    setActiveItem( activeItem )

  }, [] )


  const showControls = activeItem && activeItem.type === 'video'

  let commonPreviews: IActiveItem[] = [ noImageItem ]

  commonPreviews = images.length ? images.map( image => ( { src: image.image, type: 'image', id: image.id } ) ) : []
  commonPreviews = [ ...commonPreviews, ...videos.map( video => ( { src: video.video, type: 'video', id: video.id } ) ) ]
  commonPreviews = commonPreviews.map( ( item, index ) => ( { ...item, index: index } ) )

  if ( commonPreviews.length === 0 ) commonPreviews = [ noImageItem ]

  const [ sliderRef, { instanceRef, currentSlide } ] = useDotsSlider( { initial: Math.round( commonPreviews.length / 2 ) } )

  useEffect( () => {

    const activeSlide = commonPreviews[ currentSlide ]

    setActiveItem( { type: activeSlide.type, src: activeSlide.src, id: activeSlide.id } )

  }, [ currentSlide ] )

  return (

    <div className={ `${ s.preview }` }>

      <FullImagePreview 

        activeItem={activeItem || null}
        commonPreviews={commonPreviews}
        fullPreviewOpen = { fullPreviewOpen }
        setActiveItem={setActiveItem}
        setFullPreviewOpen={setFullPreviewOpen}
        showControls= { activeItem?.type === 'video' }
        type={ 'none' }

      />

      <div ref={ sliderRef } className={ `${ s.dots_list }  keen-slider` }>

        { commonPreviews.map( ( item, index ) => (

          item.type === 'image'
            ? <button
              className={ `${ s.preview_dot } ${ item.src === activeItem?.src && s.active }  keen-slider__slide` }
              onClick={ () => { setActiveItem( item ) } }
              key={ item.id } >

              <img src={ item.src } alt="preview" />

            </button>
            : <button
              className={ `${ s.preview_dot } ${ s.preview_dot_video } ${ item.src === activeItem?.src && s.active } keen-slider__slide` }
              onClick={ () => { setActiveItem( item ) } }
              key={ item.id }>

              <PlayImage className={ s.play_image } />
              <video src={ item.src } />

            </button>

        ) ) }


      </div>

      <VideoPreview

        fullHandler={ setFullPreviewOpen }
        activeItem={ activeItem || null }
        items={ commonPreviews }
        setActiveItem={ setActiveItem }
        type={ type }
        showControls={ showControls || false }
        autoPlay={ true }
        arrows={ true }
        openInFull={ fullPreviewOpen }

      />

    </div>

  )

}

type sliderResProps = [ ( node: HTMLElement | null ) => void, { currentSlide: number, loaded: boolean, instanceRef: MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null> } ]

const useDotsSlider = ( { initial }: { initial: number } ): sliderResProps => {

  const [ currentSlide, setCurrentSlide ] = useState( 0 )
  const [ loaded, setLoaded ] = useState( false )

  const [ sliderRef, instanceRef ] = useKeenSlider( {

    initial: 0,
    vertical: true,

    slides: {

      perView: 3.5,
      spacing: 16,

    },


    breakpoints: {

      '(max-width: 520px)': {

        vertical: false,
        slides: {

          perView: "auto",
          spacing: 8,

        }
      },

    },

    slideChanged( slider ) {

      setCurrentSlide( slider.track.details.rel )

    },

  } )

  return [ sliderRef, { currentSlide, loaded, instanceRef } ]

}

interface IVideoPreviewProps {

  type: string
  items: IActiveItem[]
  setActiveItem: ( item: IActiveItem ) => void
  activeItem: IActiveItem | null,
  showControls: boolean
  fullHandler: ( active: boolean ) => void
  autoPlay: boolean
  arrows: boolean
  hideFull?: boolean
  openInFull?: boolean

}

const VideoPreview: FC<IVideoPreviewProps> = ( { openInFull, hideFull, arrows, autoPlay, type, items, setActiveItem, activeItem, showControls, fullHandler } ) => {

  const videoPlayerRef = useRef<null | HTMLVideoElement>( null )
  const [ isPaused, setIsPaused ] = useState( autoPlay ? false : true )

  useEffect( () => {


    setIsPaused( openInFull ? true : false )

  }, [ activeItem ] )

  useEffect( () => {

    if ( !videoPlayerRef.current ) return

    videoPlayerRef.current.volume = 0.3

  }, [ videoPlayerRef.current ] )

  const pauseHandler = () => {

    if ( !videoPlayerRef.current ) return

    setIsPaused( videoPlayerRef.current.paused ? false : true )
    videoPlayerRef.current.paused ? videoPlayerRef.current.play() : videoPlayerRef.current.pause()


  }

  const changeVolume = ( e: ChangeEvent<HTMLInputElement> ) => {

    if ( !videoPlayerRef.current ) return

    videoPlayerRef.current.volume = +e.target.value / 100

  }



  return (

    <div className={ s.preview_main }>

      <div className={ s.badge }>

        <Badge badge={ type } />

      </div>

      { arrows && items.length > 1 && <div className={ s.arrows }>

        <button

          onClick={ () => {

            const targetIndex = items.findIndex( item => item.id === activeItem?.id )

            setActiveItem( items[ targetIndex - 1 >= 0 ? targetIndex - 1 : items.length - 1 ] )

          } }
          className={ s.prev }

        >

          <ArrowImage />

        </button>

        <button

          onClick={ () => {

            const targetIndex = items.findIndex( item => item.id === activeItem?.id )

            setActiveItem( items[ targetIndex + 1 < items.length ? targetIndex + 1 : 0 ] )

          } }

          className={ s.next }

        > <ArrowImage /> </button>

      </div> }

      { showControls

        && <div className={ s.controls }>

          { !hideFull && <button className={ s.fullScreen } onClick={ () => fullHandler( true ) } >

            <FullScreenImage />

          </button> }

          <button className={ `${ s.pause } ${ !isPaused && s.isActive }` } onClick={ pauseHandler }>

            { isPaused ? <PlayImage /> : <PauseImage className={ s.pause_image } /> }

          </button>

          <input className={ s.volume } defaultValue={ 30 } onChange={ changeVolume } type='range' />

        </div>

      }

      { activeItem && activeItem.type === 'video'

        ? <video className={ s.preview_image } ref={ videoPlayerRef } src={ activeItem?.src } autoPlay={ autoPlay && !openInFull } >


        </video>

        : <img onClick={ () => fullHandler( true ) } className={ s.preview_image } src={ activeItem?.src } alt="preview" />

      }


    </div>
  )

}
 
interface IFullImagePreview {

  fullPreviewOpen:boolean
  setFullPreviewOpen: (value: boolean) => void
  activeItem: IActiveItem | null
  commonPreviews: IActiveItem[]
  setActiveItem: ( item: IActiveItem ) => void
  type: string
  showControls: boolean
  className?: string;

}

export const FullImagePreview:FC< IFullImagePreview > = (props) => {

  const { 
  
    fullPreviewOpen, setFullPreviewOpen, activeItem,
    commonPreviews, setActiveItem, type, showControls,
    className,
  
  } = props

  return (

    <>

      { fullPreviewOpen && <div className={`${ s.full_screen_preview  } ${ cssIf( className, className! ) }`}>

        <button onClick={ () => setFullPreviewOpen( false ) } className={ s.cross }>

          <CrossImage />

        </button>

        <div className={ `${ s.slider }` }>

          <VideoPreview

            activeItem={ activeItem || null }
            fullHandler={ setFullPreviewOpen }
            items={ commonPreviews }
            setActiveItem={ setActiveItem }
            type={ type }
            showControls={ showControls || false }
            autoPlay={ false }
            arrows={ false }
            hideFull

          />

        </div>

        { commonPreviews.length > 1 &&

          <div className={ s.full_controls }>

            <button onClick={ () => {

              const targetIndex = commonPreviews.findIndex( item => item.id === activeItem?.id )

              setActiveItem( commonPreviews[ targetIndex - 1 >= 0 ? targetIndex - 1 : commonPreviews.length - 1 ] )

            } } >

              <ArrowImage />

            </button>

            <button onClick={ () => {

              const targetIndex = commonPreviews.findIndex( item => item.id === activeItem?.id )

              setActiveItem( commonPreviews[ targetIndex + 1 < commonPreviews.length ? targetIndex + 1 : 0 ] )

            } }>

              <ArrowImage />

            </button>

          </div>

        }

      </div> }
    </>

  )

}

