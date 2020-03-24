import Link from 'next/link'

export default () => (
  <>
    <div>我是首页</div>
    <div><Link href="/a"><a>去A页面</a></Link></div>
    <div><Link href="/b"><a>去B页面</a></Link></div>

  </>
)