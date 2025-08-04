const TWEEN_FACTOR_BASE = 0.2

export const setupTweenParallax = (emblaApi) => {
  let tweenFactor = 0
  let tweenNodes = []

    const setTweenNodes = () => {
        tweenNodes = emblaApi.slideNodes().map((slideNode) => {
        return slideNode.querySelector('.embla__parallax__layer')
        })
    }

  const setTweenFactor = () => {
    tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }

  const tweenParallax = (emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    // const targetIndex = engine.targetIndex()
    const isScrollEvent = eventName === 'scroll'

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

        const translate = diffToTarget * (-1 * tweenFactor) * 100
        const tweenNode = tweenNodes[slideIndex]
        // console.log(tweenNode);
        if (tweenNode) {
          tweenNode.style.transform = `translateX(${translate}%)`
        }
      })
    })
  }

  setTweenNodes()
  setTweenFactor()
  tweenParallax(emblaApi)

  emblaApi
    .on('reInit', () => {
      setTweenNodes()
      setTweenFactor()
      tweenParallax(emblaApi)
    })
    .on('scroll', (e) => tweenParallax(emblaApi, 'scroll'))
    .on('slideFocus', (e) => tweenParallax(emblaApi, 'slideFocus'))

  return () => {
    tweenNodes.forEach((slide) => slide?.removeAttribute('style'))
  }
}
