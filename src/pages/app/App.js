import './App.css'
import logo from '../../assets/images/logo.png'
// import { useHistory } from 'react-router-dom'
import { useState, useCallback } from 'react'
import axios from 'axios'

function App() {
  // let history = useHistory()
  const [state, setState] = useState({
    number: '',
    phone: '',
    code: ''
  })
  const handle = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value
    })
  }
  const getCode = useCallback(() => {
    console.log(state)
    axios({
      url: '/arabica/coffee/getCodeByPhone',
      method: 'post',
      data: { phone: state.phone }
    }).then(() => {
      console.log('发送成功')
    })
  }, [state])
  const submit = useCallback(() => {
    console.log(state)
  }, [state])

  return (
    <div className="app">
      <main className="main">
        <img className="logo" src={logo} alt="logo" />
        <div className="grid">
          <span className="grid-name">兑换券</span>
          <input
            className="grid-val"
            type="tel"
            placeholder="请输入12位兑换券号码"
            maxLength="12"
            value={state.number}
            onChange={e => handle(e, 'number')}
          />
        </div>
        <div className="grid">
          <span className="grid-name">联系方式</span>
          <input
            className="grid-val"
            type="tel"
            placeholder="请输入手机号"
            value={state.phone}
            onChange={e => handle(e, 'phone')}
          />
        </div>
        <div className="grid">
          <span className="grid-name">验证码</span>
          <input
            className="grid-val"
            type="tel"
            placeholder="请输入验证码"
            value={state.code}
            onChange={e => handle(e, 'code')}
          />
          <button className="code-btn border-1px" onClick={getCode}>获取验证码</button>
        </div>
        <button className="submit-btn" onClick={submit}>
          兑换咖啡券
        </button>
      </main>
    </div>
  )
}

export default App
