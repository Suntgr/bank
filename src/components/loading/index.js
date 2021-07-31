import React from 'react'
import ReactDOM from 'react-dom'
import './loading.css'

class Loading {
  domNode: HTMLElement
  isExistNode: boolean
  timer: any
  constructor() {
    this.domNode = document.createElement('div')
    this.isExistNode = false
  }

  render(visible: boolean) {
    if (!this.isExistNode && visible) {
      document.body.appendChild(this.domNode)
      const children = this.createNode()
      ReactDOM.render(children, this.domNode)
      this.isExistNode = true
    }
    if (visible) {
      this.domNode.className = 'hp-loading-wrap'
    } else {
      this.domNode.className = 'hp-loading-wrap hide'
      // ReactDOM.unmountComponentAtNode(this.domNode)
    }
  }
  createNode() {
    const node = (
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
    return node
  }

  show(isDelay = true, delay = 300) {
    this.timer && clearTimeout(this.timer)
    if (!isDelay) {
      this.render(true)
    } else {
      // 防闪烁
      this.timer = setTimeout(() => this.render(true), delay)
    }
  }

  hide() {
    this.timer && clearTimeout(this.timer)
    this.render(false)
  }
}

export default new Loading()
