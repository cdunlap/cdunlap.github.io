<template>
  <div class="hero-particles"></div>
</template>

<script>
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

const windowHalfX = window.innerWidth / 2
const windowHalfY = window.innerHeight / 2

export default {
  name: 'HeroParticles',
  mounted () {
    const width = this.$el.clientWidth
    const height = this.$el.clientHeight

    const camera = new THREE.PerspectiveCamera(75, width, height)
    camera.position.z = 1000

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000040)

    const material = new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(this.generateSprite())
    })

    for (let i = 0; i < 1000; i++) {
      const particle = new THREE.Sprite(material)
      this.initParticle(particle, i * 10)
      scene.add(particle)
    }

    const renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)

    this.$el.appendChild(renderer.domElement)

    document.addEventListener('mousemove', this.onDocumentMouseMove, false)

    this.camera = camera
    this.scene = scene
    this.renderer = renderer

    this.animate()
  },
  beforeDestroy () {

  },
  methods: {
    generateSprite () {
      const canvas = document.createElement('canvas')
      canvas.width = 16
      canvas.height = 16

      const ctx = canvas.getContext('2d')
      const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.2, 'rgba(0,255,255,1)')
      gradient.addColorStop(0.4, 'rgba(0,0,64,1)')
      gradient.addColorStop(1, 'rgba(0,0,0,1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      return canvas
    },
    initParticle (particle, delay) {
      const p = this instanceof THREE.Sprite ? this : particle
      const d = delay !== undefined ? delay : 0

      p.position.set(0, 0, 0)
      p.scale.x = p.scale.y = Math.random() * 32 + 16

      new TWEEN.Tween(p)
        .delay(d)
        .to({}, 10000)
        .onComplete(this.initParticle.bind(p))
        .start()

      new TWEEN.Tween(p.position)
        .delay(d)
        .to({
          x: Math.random() * 4000 - 2000,
          y: Math.random() * 1000 - 500,
          z: Math.random() * 4000 - 2000
        }, 10000)
        .start()

      new TWEEN.Tween(p.scale)
        .delay(d)
        .to({
          x: 0.01,
          y: 0.01
        }, 10000)
        .start()
    },
    animate () {
      requestAnimationFrame(this.animate.bind(this))
      this.render()
    },
    render () {
      TWEEN.update()

      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05
      this.camera.lookAt(this.scene.position)

      this.renderer.render(this.scene, this.camera)
    },
    onDocumentMouseMove (event) {
      this.mouseX = event.clientX - windowHalfX
      this.mouseY = event.clientY - windowHalfY
    }
  }
}
</script>

<style lang="scss">
.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
