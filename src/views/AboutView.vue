<script setup>
  import Card from '../components/Card.vue'
  import Icon from '../components/Icon.vue'
</script>
<template>
  <div class="mx-8">
    <h1 class="text-2xl font-bold text-gray-600"> About me </h1>
    <div class="flex flex-col md:flex-row mx-2 mb-8">
      <div class="flex md:flex-4 p-8 justify-center">
        <Icon></Icon>
      </div>
      <div class="flex md:flex-1 flex-col p-4">
        <h1 class="text-2xl font-bold text-gray-600 my-2"> ms21826 </h1>
        <p class="my-2">
        プログラミング，3Dモデリング，自宅サーバ構築(現在はクラウドに移行)，ゲーム開発の学習中......
        過去にはTorノードの運営や，CTF(Capture The Flag)の大会に出場していました．<br>
        </p>
        <div class="flex flex-row space-x-12 justify-center md:justify-start py-16">
          <a href="https://github.com/ms16183" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2xl" /></a>
          <a href="https://www.artstation.com" target="_blank"><font-awesome-icon :icon="['fab', 'artstation']" size="2xl" /></a>
          <!--<a href="https://www.deviantart.com" target="_blank"><font-awesome-icon :icon="['fab', 'deviantart']" size="2xl" /></a>-->
          <a href="https://twitter.com" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" size="2xl" /></a>
          <a href="https://www.facebook.com" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="2xl" /></a>
          <a href="https://www.instagram.com" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="2xl" /></a>
        </div>
        <!--
        <p class="my-2">
        電気系の学部を志望していたが，学生時代にC言語と出会ったことをきっかけに情報系の学部に進路を転換した．
        特にCTF(Capture The Flag)が面白く，プログラミングだけでなく周辺技術にも興味を持つようになる．
        研究では機械学習に関する事項に取り組んだ．
        </p>
        <p class="my-2">現在SEとして大手企業に就職し，学習の日々である．
        </p>
        <ul class="pl-1 list-disc list-inside">
          <li>
            趣味
            <ul class="pl-5 list-disc  list-inside">
              <li>プログラミング</li>
              <li>3Dモデリング</li>
              <li>自宅サーバ構築(現在はクラウドに移行)</li>
              <li>ウォーキング</li>
              <li>資産運用</li>
            </ul>
          </li>
        </ul>
        -->
      </div>
    </div>
  </div>
  <!--<hr class="m-8 border-2">-->
  <div class="m-8">
    <h1 class="text-2xl font-bold text-gray-600"> Language </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 xl:grid-cols-3 md:gap-4">
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" title="C" years="2">
        初めて触れた言語．低レイヤに触れる時や，ゲーム解析に使う．
      </Card>
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++">
        OpenCLやゲーム開発に使用している．
      </Card>
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" title="Python" years="3">
        十徳ナイフ．GANモデル構築やスクリプトの用途，ゲーム解析で使用する．
      </Card>
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" title="Vue.js" years="0">
        HTML+CSS+JSの勉強中．全く関係ないが本サイトはレスポンシブ対応である．
      </Card>
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" years="0">
         諸事情で勉強しているが，全く好きではない．
      </Card>
    </div>
  </div>
  <div class="m-8">
    <h1 class="text-2xl font-semibold text-gray-600"> CG </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 xl:grid-cols-3 md:gap-4">
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" title="Blender" years="3">
            プラグインを作るほど愛用している万能ツール．
      </Card>
      <Card path="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg" title="Inkscape">
            某Adobe製品の代替，無料だから使っているだけで好きではない．
      </Card>
    </div>
  </div>
  <div class="m-8">
    <h1 class="text-2xl font-semibold text-gray-600"> Environment </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 xl:grid-cols-3 md:gap-4">
      <Card path="https://icongr.am/devicon/linux-plain.svg" title="Linux">
        <ul>
          <li>CentOS: 自宅サーバで使用していた．</li>
          <li>Kali: セキュリティ学習で使用している．</li>
          <li>Ubuntu: ノートPCで使用していた．</li>
        </ul>
      </Card>
      <Card path="https://icongr.am/material/console.svg" title="Zsh">
        Zshをメインに使用している．
      </Card>
      <Card path="https://icongr.am/devicon/vim-original.svg" title="Vim">
        愛用エディタで，VSCodeにも適用している．
      </Card>
    </div>
  </div>
  <div class="m-8">
    <h1 class="text-2xl font-semibold text-gray-600"> Other </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 xl:grid-cols-3 md:gap-4">
      <Card path="https://icongr.am/clarity/deploy.svg" title="3Dモデル販売">
            お小遣い稼ぎ．雑誌掲載の経験あり．
      </Card>
      <Card path="https://icongr.am/material/cards-outline.svg" title="タロット占い">
            カウンセリングします．
      </Card>
    </div>
  </div>
</template>