<script setup>
</script>
<template>
  <div class="flex flex-col items-center py-8">
    <form class="w-1/2 space-y-6" action="#" method="POST">
      <div>
        <p><b>現在停止中</b></p>

        <label for="email" class="text-gray-700">E-mail</label>
        <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="email@example.com" class="w-full px-5 py-3 border rounded bg-gray-50">
        <div class="flex flex-row my-3">
          <div class="mr-2 w-1/2">
            <label for="lname" class="text-gray-700 block">姓</label>
            <input id="lname" name="lname" type="text" autocomplete="email" required="" placeholder="Last name" class="w-full px-5 py-3 border rounded bg-gray-50">
          </div>
          <div class="ml-2 w-1/2">
            <label for="fname" class="text-gray-700 block">名</label>
            <input id="fname" name="fname" type="text" autocomplete="email" required="" placeholder="First name" class="w-full px-5 py-3 border rounded bg-gray-50">
          </div>
        </div>
      </div>
      <div>
        <label for="textarea" class="block  text-gray-700"> メッセージ </label>
        <textarea id="texearea" name="textarea" type="textarea" required="" rows="10" class="w-full px-5 py-3 border rounded bg-gray-50"></textarea>
      </div>
      <div class="flex justify-center">
        <!-- モーダル未実装 -->
        <button 
          disabled
          data-modal-target="modal"
          data-modal-toggle="modal"
          type="button"
          class="w-3/5 px-10 py-4 text-base font-medium text-center text-white rounded-lg bg-[#ff5381] hover:bg-[#ef5381]"
        >
          送信
          <font-awesome-icon class="text-white" :icon="['fas', 'arrow-up-right-from-square']" />
        </button>
      </div>
    </form>
  </div>
</template>