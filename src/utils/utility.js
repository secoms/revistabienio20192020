export const updateObject = (oldBject, updatedProperties) => {
    return {
        ...oldBject,
        ...updatedProperties
    }
}

export const smothScroll = (target, duration) => {
    console.log("smothScroll -> target: ", target);
    target = document.querySelector(target)
    console.log("smothScroll -> target: ", target);
    if (target !== null) {

        // const targetPosition = target.getBoundingClientReact().top
        console.log(target.getBoundingClientRect().top)
        const targetPosition = target.getBoundingClientRect().top + window.scrollY + 500;
        const startPosition = window.pageYOffset
        let distance = targetPosition - startPosition
        let startTime = null


        function animation(currentTime) {
            if (startTime === null) startTime = currentTime
            var timeElapse = currentTime - startTime
            var run = ease(timeElapse, startPosition, distance, duration)
            window.scrollTo(0, run)
            if (timeElapse < duration) requestAnimationFrame(animation)
        }

        function ease(t, b, c, d) {
            t /= d;
            return c * t * t + b;
        }

        requestAnimationFrame(animation)
    }
}
