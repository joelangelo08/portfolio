const TWEEN_FACTOR_BASE = 0.2

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

export const setupTweenOpacity = (emblaApi) => {
  let tweenFactor = 0
  let tweenNodes = []

  const setTweenNodes = () => {
    tweenNodes = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__img')
    })
  }

  const setTweenFactor = () => {
    tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }

  const tweenOpacity = (emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'
    const targetIndex = emblaApi.selectedScrollSnap()

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const opacity =
          slideIndex === targetIndex
            ? 1
            : numberWithinRange(1 - Math.abs(diffToTarget * tweenFactor), 0.25, 1)

        const tweenNode = tweenNodes[slideIndex]
        if (tweenNode) {
          tweenNode.style.opacity = opacity.toString()
        }
      })
    })
  }

  setTweenNodes()
  setTweenFactor()
  tweenOpacity(emblaApi)

  emblaApi
    .on('reInit', () => {
      setTweenNodes()
      setTweenFactor()
      tweenOpacity(emblaApi)
    })
    .on('scroll', (e) => tweenOpacity(emblaApi, 'scroll'))
    .on('slideFocus', (e) => tweenOpacity(emblaApi, 'slideFocus'))

  return () => {
    tweenNodes.forEach((node) => node?.removeAttribute('style'))
  }
}