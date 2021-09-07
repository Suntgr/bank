import './App.css'
import logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Toast from '../../components/toast'
import Loading from '../../components/loading'

const COUNTDOWN_SECONDS = 60

function App() {
  let history = useHistory()
  const [state, setState] = useState({
    number: '',
    phone: '',
    code: '',
  })
  const handle = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    })
  }
  const getCode = () => {
    if (!state.phone) {
      return Toast.info('请输入手机号码')
    }
    if (!/^1[3-9]\d{9}$/.test(state.phone)) {
      return Toast.info('手机号码有误')
    }
    setTiming(true)
    axios({
      url: 'https://gf.ilinkmore.com/arabica/getCodeByPhone',
      method: 'post',
      data: { phone: state.phone },
    })
      .then(({ data }) => {
        if (+data.code === 200) {
          Toast.info('发送成功')
        } else {
          Toast.info('发送失败')
        }
      })
      .catch(() => {
        Toast.info('发送失败')
      })
  }
  const submit = () => {
    if (state.number.length !== 12) {
      return Toast.info('兑换券号码有误')
    }
    Loading.show()
    axios({
      url: 'https://gf.ilinkmore.com/arabica/updateCouponCode',
      method: 'post',
      data: { ticket: state.number, phone: state.phone, code: state.code },
    })
      .then(({ data }) => {
        console.log(data)
        if (+data.code === 200) {
          sessionStorage.setItem('code', data.response.ticket)
          history.push('/details')
        } else {
          Toast.info(data.message)
        }
      })
      .catch((err) => {
        console.log(1111, err)
        Toast.info('兑换失败')
      })
      .finally(() => {
        Loading.hide()
      })
  }

  const [timing, setTiming] = useState(false)
  // 当前秒数
  const [second, setSecond] = useState(COUNTDOWN_SECONDS)

  // 首次渲染和 timing 变化时触发 effect
  useEffect(() => {
    let interval
    // 开始倒计时
    if (timing) {
      interval = setInterval(() => {
        setSecond((preSecond) => {
          if (preSecond <= 1) {
            setTiming(false)
            clearInterval(interval)
            // 重置秒数
            return COUNTDOWN_SECONDS
          } else {
            return preSecond - 1
          }
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timing])

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
            onChange={(e) => handle(e, 'number')}
          />
        </div>
        <div className="grid">
          <span className="grid-name">联系方式</span>
          <input
            className="grid-val"
            type="tel"
            placeholder="请输入手机号"
            value={state.phone}
            onChange={(e) => handle(e, 'phone')}
          />
        </div>
        <div className="grid">
          <span className="grid-name">验证码</span>
          <input
            className="grid-val"
            type="tel"
            placeholder="请输入验证码"
            value={state.code}
            onChange={(e) => handle(e, 'code')}
          />
          {!timing ? (
            <button className="code-btn border-1px" onClick={getCode}>
              获取验证码
            </button>
          ) : (
            <div className="count">{second}s</div>
          )}
        </div>
        <button className="submit-btn" onClick={submit}>
          兑换咖啡券
        </button>
      </main>
    </div>
  )
}

export default App
