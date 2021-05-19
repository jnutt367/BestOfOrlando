gsap.to("#blue", { duration: .3, stroke: "orange", strokeWidth: 1.1, fill: "blue", opacity: 1, rotate: 5080, repeat: -1, transformOrigin: "50% 50%" })
gsap.to("#sunbeam", { duration: 3, stroke: "white", strokeWidth: 4, repeat: -1 })
gsap.from("#sun", { duration: 3, rotate: 360, y: 1200, ease: "elastic.out", transformOrigin: "50% 50%" })
gsap.to("#Layer-1", { position: "relative", zIndex: 0, opacity: 1 })
gsap.fromTo("#Soccer_Guy", { opacity: 0, x: -30 }, { position: "relative", duration: 2, x: 0, opacity: 1 })
gsap.fromTo("#one", { x: 500 }, { opacity: 1, duration: 2, x: 530 })
gsap.fromTo("#airball", { opacity: 0 }, { duration: .5, ease: "bounce", opacity: 1, repeat: -1 })
gsap.fromTo("#ball", { y: 590, opacity: 1 }, { duration: .5, ease: "bounce", y: 570, repeat: -1, opacity: 1 })
gsap.fromTo("#ball-lines", { y: 14, opacity: 1 }, { duration: .5, ease: "bounce", transformOrigin: "50% 50%", rotate: -720, y: -6.5, repeat: -1, opacity: 1 })
gsap.to("#Front_Leg", { duration: .5, y: -2, repeat: -1 })
gsap.to("#left_arm_strong", { y: 802, duration: 1.5, repeat: -1 })
gsap.to("#weight", { duration: 1.5, repeat: -1, y: 3 })
gsap.fromTo("#mouth", { opacity: 0 }, { duration: 1.5, opacity: 1, repeat: -1 })

gsap.to("#right_arm_strong", { duration: 1.7, y: 750, repeat: -1 })
gsap.to("#right_weight", { duration: 1.7, y: 2, repeat: -1 })
let nums = gsap.timeline()

.fromTo("#num1", { y: 526 }, { duration: 1.2, y: 516, opacity: 1, ease: "bounce" }, 0)
    .fromTo("#num2", { y: 526 }, { duration: 1.5, y: 516, opacity: 1, ease: "bounce" }, .1)
    .fromTo("#num3", { y: 538 }, { duration: 2, y: 526, opacity: 1, ease: "bounce" }, .3)
    .from("#to", { x: -200 }, 0)
    .from("#love", { x: -200 }, 1)
    .from("#about", { x: -200 }, 1.5)
    .from("#our", { x: -200 }, 1.7)
    .from("#city", { duration: 1, x: -200, ease: "bounce" }, 2)
    .to("#people", { rotate: 360, transformOrigin: "50% 50%" })
    .fromTo("#comma", { opacity: 0 }, { opacity: 1 }, 4)
    .from("#places", { opacity: 0, y: 100, transformOrigin: "50% 50%" })
    .from("#things", { duration: 1, opacity: 0, x: 400, rotate: 360, transformOrigin: "50% 50%" })
    .to("#O", { strokeWidth: 2, rotate: 360, repeat: -1, transformOrigin: "50% 50%" }, 1)
    .from("#R", { scale: 0, opacity: 0 }, 1)
    .from("#L", { scale: 0, opacity: 0 }, 1.2)
    .from("#A", { scale: 0, opacity: 0 }, 1.4)
    .from("#N", { scale: 0, opacity: 0 }, 1.6)
    .from("#D", { scale: 0, opacity: 0 }, 1.8)
    .from("#O", { opacity: 0 }, 1)
    .from("#B", { duration: 1, scale: 0, opacity: 0, ease: "elastic.inOut" }, 5)
    .from("#E", { duration: 1, scale: 0, opacity: 0, ease: "elastic.inOut" }, 5.1)
    .from("#S", { duration: 1, scale: 0, opacity: 0, ease: "elastic.inOut" }, 5.3)
    .from("#T", { duration: 1, scale: 0, opacity: 0, ease: "elastic.inOut" }, 5.5)
    .to("#wheel", { duration: 10, rotate: 1080, transformOrigin: "50% 50%", repeat: -1 }, 0)
    .to("#diamond", { stroke: "silver", repeat: 3 }, 6.5)
    .fromTo("#gleam", { stroke: "white" }, { stroke: "silver", y: 710, repeat: -1 }, 6.5)
    .to("#disco", { duration: .2, strokeWidth: 1.5, stroke: "silver", repeat: 10, transformOrigin: "50% 50%" }, 8)
    .to("#disco", { duration: .2, strokeWidth: 1, stroke: "grey", repeat: 10, transformOrigin: "50% 50%" }, 14)