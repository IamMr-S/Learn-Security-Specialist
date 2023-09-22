import React from 'react'
import { Link as Scroll } from 'react-scroll'
import LSC from '../img/LSC.svg'

const Introduction = () => {
  const unexpanded = {
    display: 'block',
    marginTop: '5.5px',
    width: '1.5rem',
    height: '1.5rem',
    border: '1px solid #f0f8ff',
    borderRadius: '50%'
  }

  const expanded = {
    display: 'block',
    marginTop: '5.5px',
    width: '1.5rem',
    height: '1.5rem',
    border: '1px solid #f0f8ff',
    backgroundColor: '#f0f8ff',
    borderRadius: '50%'
  }

  return (
    <div className='introduction' id='introduction'>
      <img src={LSC} className='logoImg'></img>
      <div className='whatIsSC'>
        <h2 className='title'><span className='purple'>情報処理安全確保支援士</span>とは？</h2>
        最新のセキュリティに関する知識・技能を備えた高度かつ実践的人材に関する国家資格です。
      </div>
      {/************************************************************
      ニュース
      ************************************************************/}
      <div className='news' id='news'>
        <h2 className='title'>ニュース</h2>
        <table>
          <tr className='line'>
            <th className='date'>20XX-MM-DD</th>
            <td className='content'>ハンバーガーメニューを追加しました。</td>
          </tr>
          <tr className='line'>
            <th className='date'>20XX-MM-DD</th>
            <td className='content'>イントロダクションを追加しました。</td>
          </tr>
          <tr className='line'>
            <th className='date'>20XX-MM-DD</th>
            <td className='content'>ニュースを追加しました。</td>
          </tr>
          <tr className='line'>
            <th className='date'>20XX-MM-DD</th>
            <td className='content'>ニュースを追加しました。</td>
          </tr>
          <tr className='line'>
            <th className='date'>20XX-MM-DD</th>
            <td className='content'>ニュースを追加しました。</td>
          </tr>
        </table>
      </div>
      {/************************************************************
      目次
      ************************************************************/}
      <div className='contents' id='contents'>
        <details open>
          <summary className='title'>
            目次（<span style={unexpanded}></span>未展開：<span style={expanded}></span>展開済）
          </summary>
          {/* Section_1 */}
          <details>
            <summary className='item primary'>情報セキュリティの概念</summary>
            <div className='item secondary'>セキュリティ</div>
            <details>
              <summary className='item secondary'>情報セキュリティ</summary>
              <div className='item tertiary'>物理的なセキュリティ</div>
              <details>
                <summary className='item tertiary'>論理的なセキュリティ</summary>
                <div className='item quaternary'>システム的なセキュリティ</div>
                <div className='item quaternary'>管理的なセキュリティ</div>
                <div className='item quaternary'>人的なセキュリティ</div>
              </details>
            </details>
          </details>
          {/* Section_2 */}
          <details>
            <summary className='item primary'>情報セキュリティの特性</summary>
            <details>
              <summary className='item secondary'>情報セキュリティの３要素</summary>
              <div className='item tertiary'>機密性</div>
              <div className='item tertiary'>完全性</div>
              <div className='item tertiary'>可用性</div>
              <div className='item tertiary'>真正性</div>
              <div className='item tertiary'>責任追跡性</div>
              <div className='item tertiary'>信頼性</div>
            </details>
          </details>
          {/* Section_3 */}
          <div className='item primary'>情報セキュリティの目的</div>
          {/* Section_4 */}
          <details>
            <summary className='item primary'>脅威の種類</summary>
            <div className='item secondary'>物理的な脅威と対策</div>
            <div className='item secondary'>人的な脅威と対策</div>
          </details>
          {/* Section_5 */}
          <div className='item primary'>脆弱性の種類</div>
          {/* Section_6 */}
          <div className='item primary'>リスクマネジメント</div>
          {/* Section_7 */}
          <details>
            <summary className='item primary'>攻撃手法</summary>
            <details>
              <summary className='item secondary'>パスワードクラック</summary>
              <div className='item tertiary'>推測によるパスワードクラック</div>
              <div className='item tertiary'>辞書攻撃</div>
              <div className='item tertiary'>ブルートフォース</div>
              <div className='item tertiary'>リバースブルートフォース</div>
              <div className='item tertiary'>ジョーアカウント攻撃</div>
              <div className='item tertiary'>パスワードリスト攻撃</div>
            </details>
            <div className='item secondary'>バッファオーバーフロー攻撃</div>
            <div className='item secondary'>セッションハイジャック</div>
            <div className='item secondary'>セッションフィクセイション</div>
            <div className='item secondary'>DNSキャッシュポイズニング</div>
            <div className='item secondary'>DNSリフレクション</div>
            <div className='item secondary'>DoS攻撃（サービス不能攻撃）</div>
            <div className='item secondary'>スマーフ攻撃</div>
            <div className='item secondary'>DDoS攻撃（分散型DoS攻撃）</div>
            <div className='item secondary'>DRDoS攻撃（分散反射型DoD攻撃）</div>
            <div className='item secondary'>クロスサイトスクリプティング（XSS）</div>
            <div className='item secondary'>SQLインジェクション</div>
            <div className='item secondary'>OSコマンドインジェクション</div>
            <div className='item secondary'>HTTPヘッダインジェクション</div>
            <div className='item secondary'>クロスサイトリクエストフォージェリ（CSRF）</div>
            <div className='item secondary'>ソーシャルエンジニアリング</div>
            <div className='item secondary'>盗聴</div>
            <div className='item secondary'>電磁波傍受</div>
            <details>
              <summary className='item secondary'>悪意のあるコードによる攻撃</summary>
              <div className='item tertiary'>コンピュータウイルス</div>
              <div className='item tertiary'>ワーム</div>
              <div className='item tertiary'>トロイの木馬</div>
              <div className='item tertiary'>悪意のあるモバイルコード</div>
              <div className='item tertiary'>スパイウェア</div>
              <div className='item tertiary'>ボット</div>
              <div className='item tertiary'>悪意のあるコードの検出</div>
            </details>
          </details>
          {/* Section_8 */}
          <details>
            <summary className='item primary'>ネットワーク構成における脆弱性</summary>
            <div className='item secondary'>可用性の低下につながる脆弱性</div>
            <div className='item secondary'>可用性の低下につながる脆弱性への対策</div>
            <div className='item secondary'>機密性、完全性の低下につながる脆弱性への対策</div>
          </details>
          {/* Section_9 */}
          <div className='item primary'>TCP/IPプロトコルの脆弱性と対策</div>
          {/* Section_10 */}
          <div className='item primary'>パケット秘匿化のための対策</div>
          {/* Section_11 */}
          <div className='item primary'>電子メールの脆弱性と対策</div>
          {/* Section_12 */}
          <div className='item primary'>POP3の脆弱性と対策</div>
          {/* Section_13 */}
          <div className='item primary'>HTTP及びWebアプリケーションの脆弱性と対策</div>
          {/* Section_14 */}
          <div className='item primary'>セッション管理の脆弱性と対策</div>
          {/* Section_15 */}
          <details>
            <summary className='item primary'>認証</summary>
            <div className='item secondary'>固定式パスワード</div>
            <div className='item secondary'>OTP（One Time Password）</div>
            <div className='item secondary'>バイオメトリクス認証</div>
            <div className='item secondary'>ICカード</div>
            <div className='item secondary'>RADIUS（Remote Authentication Dial In User Service）</div>
            <div className='item secondary'>Kerberos</div>
            <div className='item secondary'>ディレクトリサービス</div>
            <div className='item secondary'>SSO（Single Sign On）</div>
          </details>
        </details>
      </div>
    </div>
  )
}

export default Introduction