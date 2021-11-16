import './Details.css'
import ok from '../../assets/images/ok.png'
import qrcode from '../../assets/images/qrcode.png'
function Details() {
  const codes = JSON.parse(sessionStorage.getItem('code'))
  return (
    <div className="details">
      <div className="header">
        <img className="ok" src={ok} alt="ok" />
        <div className="success">兑换成功</div>
        <span className="tip">建议截屏保存本页面至手机相册</span>
        <div className="line"></div>
        <div className="code">
          <span className="code-name">长按可复制兑换码</span>
          {codes.map((code) => (
            <span className="code-val">{code}</span>
          ))}
        </div>
      </div>
      <div className="article">
        <span className="title">使用说明</span>
        <ol className="ol">
          <li className="text">兑换码有效期30天，请尽快使用；</li>
          <li className="text">复制咖啡券兑换码；</li>
          <li className="text">微信小程序搜索“ARABICA”；</li>
          <li className="text">打开并授权登录；</li>
          <li className="text">点击右下角“我的”，进入“卡券兑换”选项；</li>
          <li className="text">在券码输入框中输入兑换码，点击确认完成兑换；</li>
          <li className="text">
            在小程序下单时结算页勾选抵扣使用，支持到店自提/外送，不与其他优惠同享。
          </li>
        </ol>
        <p className="sub-text">
          * 截屏保存后用微信扫一扫太阳码也可以直接跳转噢^v^
        </p>
      </div>
      <div className="footer">
        <img className="qrcode" src={qrcode} alt="qrcode" />
        <div className="tip">扫我就可以直接跳转噢^ ^</div>
      </div>
    </div>
  )
}

export default Details
