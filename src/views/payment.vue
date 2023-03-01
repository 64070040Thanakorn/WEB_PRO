<template>
  <div class="flex mt-10 justify-center">
    <!-- ชำระเงิน -->
    <div class="px-10">
      <div class="w-[50em]">
        <p class="text-2xl font-bold py-3">ชำระเงิน</p>

        <div class="border-[1px] w-full rounded-full"></div>
        
        <div class="flex justify-between px-2 py-5">
          <div class="flex">
            <div class="bg-gray-200 w-[230px] h-[120px] rounded-xl mr-4"></div>
            <div>
              <p>Usability Design and Psychology for Digital Products</p>
              <div class="flex justify-center border rounded-full w-[120px] mt-2">
                <p>คอร์สเรียน</p>
              </div>
            </div>
          </div>
          <p>1,990 บาท</p>
        </div>

        <div class="border-[1px] w-full rounded-full"></div>

        <p class="text-2xl font-bold pt-3">ข้อมูลผู้ชำระเงิน</p>
        <div class="py-8">
          <div class="flex justify-between mx-10">
            <div class="flex flex-col">
              <label for="">ชื่อ</label>
              <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]">
            </div>
            <div class="flex flex-col">
              <label for="">นามสกุล</label>
              <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]">
            </div>
          </div>
          <div class="flex justify-between mx-10 pt-3">
            <div class="flex flex-col">
              <label for="">อีเมล</label>
              <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]">
            </div>
            <div class="flex flex-col">
              <label for="">เบอร์โทรศัพท์</label>
              <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]">
            </div>
          </div>
        </div>


        <div class="border-[1px] w-full rounded-full mt-3"></div>

        <p class="text-2xl font-bold py-3">วิธีชำระเงิน</p>
        <div>
          <div class="flex flex-col px-4 py-4">
            <div class="border-2 rounded-md py-8 px-10">
              <input class="text-yellow-1" type="radio" name="1" id="">
              <label class="ml-5" for="">ชำระผ่านบัตรเครดิต/เดบิต</label>
            </div>
            <div class="border-2 rounded-md py-8 px-10 mt-2">
              <input type="radio" name="1" id="">
              <label class="ml-5" for="">ชำระผ่านด้วย PromptPay (QR Code)</label>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="border-[1px] mx-5 h-[80vh] rounded-full"></div>
    <!-- ยอดชำระเงิน -->
    <div class="">
      <p class="font-bold text-2xl">ยอดชำระเงิน</p>
      <div class="ml-10 mt-7">
        <div class="w-[23.5em]">
          <div class="flex justify-between">
            <p>รวมสินค้าชำระเงิน</p>
            <p>1,999.00 บาท</p>
          </div>
          <div class="flex justify-between mt-2">
            <div>
              <p class="font-bold">สรุปยอดชำระเงิน</p>
            </div>
            <p class="font-bold">1,999.00 บาท</p>
          </div>
        <p class="text-xs mt-5">เมื่อชำระเงิน ถือว่าท่านได้ยอมรับ <span class="text-violet-800">ข้อตกลงและเงื่อนไขการใช้บริการ, ประกาศความเป็นส่วนตัวสำหรับลูกค้าและผู้รับบริการ</span> และ <span>นโยบายการคืนเงิน</span> เรียบร้อยแล้ว</p>
        </div>
        <button class="bg-yellow-1 rounded-full py-2 px-40 text-white font-black mt-3">ชำระเงิน</button>
      </div>
    </div>
  </div>
</template>
<style>
input {box-sizing: border-box;}
</style>