import './Details.css';
import ok from '../../assets/images/ok.png'
import qrcode from '../../assets/images/qrcode.png'
function Details() {
  const code = sessionStorage.getItem('code')
  console.log(22, code)
  return (
    <div className="details">
      <div className="header">
        <img className="ok" src={ok} alt="ok" />
        <div className="success">兑换成功</div>
        <span className="tip">建议截屏保存本页面至手机相册</span>
        <div className="line"></div>
        <div className="code">
          <span className="code-name">兑换码</span>
          <span className="code-val">{code}</span>
        </div>
      </div>
      <div className="article">
        <span className="title">兑换方式</span>
        <ol className="ol">
          <li className="text">复制咖啡券兑换码；</li>
          <li className="text">
            长按下方二维码进入“ARABICA”微信小程序，在卡券兑换页中填入兑换码完成兑换；
          </li>
        </ol>
      </div>
      <div className="footer">
        <img className="qrcode" src={qrcode} alt="qrcode" />
        <div className="tip">扫我就可以直接跳转噢^ ^</div>
      </div>
    </div>
  )
}

export default Details;
