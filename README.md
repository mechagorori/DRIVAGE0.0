# DRIVAGE

## 概要

私たちは安全運転をすることで SBT を溜める DRIVAGE というゲームを作った。  
目指す世界は事故が無くなる社会である。その為に運転手の安全運転意識に革命を起こす。DRIVAGE は運転手の安全運転を SBT で指標化しインセンティブを与える。

### 【ゲーム手順】

1. 車 NFT 購入
2. ゲームを起動し運転開始
3. 安全運転を自動採点
4. SBT スコアリング
5. 安全運転に応じてゲーム内通貨付与
6. イベント等によりガソリン割引券などのチケットを付与

※ 今回は、ゲーム手順の 1 ～ 3 まで実装

### 【ローンチ状態との違い】

ハッカソン：自己申告採点  
ローンチ：自動採点ロジックを想定

### 【工夫点】

1. 安全スコアに SBT→ 安全運転は世界共通で個人の特定スキルとなるため
2. 安全運転を価値とする企業向けにビジネス展開できること

### 【将来展望】

1. 安全運転の経済圏構築
   安全運転を可視化・定量化することで、企業・自治体の参画を促進
2. DAO 化
   安全運転の評価手法を議論する DAO 等のコミュニティ形成を促進
3. メタバース連携
   車 NFT をメタバースやゲームで利用できていくことで NFT 自体の取引活性化を促進

## 詳細

### 使用した tech stacks

- [React]()
- [Firebase]()
- [Solidity]()
- [Hardhat]()

### 使用した Blockchain

Polygon (Mumbai テストネット)

### deploy した Contract (Explorer で OK）

[Polygonscan](https://mumbai.polygonscan.com/address/0xed1740eDd7BAb6e380A1CE469960F3d4D4cE0482)

本リポジトリの [packages/contracts/contracts](packages/contracts/contracts/) 内

### application code やその他の file

本リポジトリの [packages/app](packages/app) 内

### テスト手順を含むリポジトリへのリンク

![screen-shot](https://user-images.githubusercontent.com/47882266/200173722-347d5d99-1e7c-4750-9d29-61041b575229.gif)

### [ここからアクセス（スマホの MetaMask アプリのブラウザ推奨）](https://drivage-ac98e.web.app/#/top)

### 審査やテストのためにプロジェクトにアクセスする方法など

- MetaMask 拡張機能が使える web ブラウザで、[Web アプリ](https://drivage-ac98e.web.app/#/top) にアクセスしてください。
- モバイル版 MetaMask 内のブラウザ機能を使ってもアクセスできます。
