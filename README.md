# サムネイル(OGP)画像を自動生成するCUIアプリケーション

![こんな感じのサムネイル(OGP)画像が生成されます](https://user-images.githubusercontent.com/52225914/168467684-170d7aa7-ce4b-4206-bcbc-a60290a27cd0.png)  

このリポジトリをクローンし、ローカルでコマンドを叩くだけで↑のようなサムネイル(OGP)画像を生成することができます。  
  
本アプリケーションはご自由にお使いください。(クレジット表記は不要ですが、記載していただけると作者が喜びます)  
※2次配布はご遠慮ください。

## 1.使用方法
### 1-1.初期インストール
```
git clone https://github.com/zawa1205/generate-ogp.git
```
```
cd generate-ogp
```
```
npm install
```
### 1-2.実際の画像生成
`src/thunbnail.json`内のtitle, githubをそれぞれ任意のものに変更
```
npm run gen
```
`npm run gen`をすると画像が生成されます。  
任意のタイトル/著名にしたい場合は、`src/thunbnail.json`の中身を修正してください。  
`title`が画像中央のタイトル文、authorオブジェクト内の`github`が画像右下のGitHubアカウントになります。  
#### 1-2-1.タイトルを改行したい場合
`src/thunbnail.json`内の`title`内では全角スペースが、画像出力時に改行に自動変換されます。
#### 1-2-2.画像を変更したい場合
画像を変更したい場合は`src`配下(background.jpgと同じ階層)に好きな画像を入れていただき、`src/style.css`の16行目`background-image: url('background.jpg');`の`background.jpg`を入れた画像名に変更してください。
#### 1-2-3.文字色を変更したい場合
css等わかる方はご自由に変更いただいて構いません。   
また、文字色を白にしつつ背景画像を暗くオーバーレイするcssのみ記述してあるので、以下の手順で有効にしてください。
1. `src/style.css`の３行目`color: #383838;`をコメントアウト
1. `src/style.css`の5行目`color: #fff;`のコメントアウトを外す
1. `src/style.css`の27~35行目のコメントアウトを外す
1. `src/style.css`の45行目`filter: invert(22%);`をコメントアウト
1. `src/style.css`の47行目`filter: invert(100%);`のコメントアウトを外す

## 2.使用例
1-2-1. ~ 1-2-3.をすると↓のように自由なサムネイルに変更が可能です。  
  
![こんな風に背景画像や文字色も自由に変更可能！](https://user-images.githubusercontent.com/52225914/168468761-4941bfbd-c73d-4bdb-88a4-4523ca1647af.png)
  
### 参考
使用画像1: [Rawpixel.com](https://jp.freepik.com/vectors/background)  
使用画像2: [みっこむ](https://hitomitsu.tokyo/1673/)さん
