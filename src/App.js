import React from 'react';
import S1 from './container/Section_1';
import S2 from './container/Section_2';
import S3 from './container/Section_3';
import S4 from './container/Section_4';
import S5 from './container/Section_5';
import S6 from './container/Section_6';
import S7 from './container/Section_7';
import S8 from './container/Section_8';
import S9 from './container/Section_9';
import S10 from './container/Section_10';
import S11 from './container/Section_11';
import S12 from './container/Section_12';
import S13 from './container/Section_13';
import S14 from './container/Section_14';
import S15 from './container/Section_15';
import Menu from './container/Menu';
import Introduction from './container/Introduction';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <Introduction />
      <S1 />{/* 情報セキュリティの概念 */}
      <S2 />{/* 情報セキュリティの特性 */}
      <S3 />{/* 情報セキュリティの目的 */}
      <S4 />{/* 脅威の種類 */}
      <S5 />{/* 脆弱性の種類 */}
      <S6 />{/* リスクマネジメント */}
      <S7 />{/* 攻撃手法 */}
      <S8 />{/* ネットワーク構成における脆弱性 */}
      <S9 />{/* TCP/IPプロトコルの脆弱性と対策 */}
      <S10 />{/* パケット秘匿化のための対策 */}
      <S11 />{/* 電子メールの脆弱性と対策 */}
      <S12 />{/* POP3の脆弱性と対策 */}
      <S13 />{/* HTTP及びWebアプリケーションの脆弱性と対策 */}
      <S14 />{/* セッション管理の脆弱性と対策 */}
      <S15 />{/* 認証 */}
    </div>
  );
}

export default App;
