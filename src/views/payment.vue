<script setup>
import courseData from '../../courseData.json';

</script>
<script>
export default {
  name: "payment",
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      tel: null,
      payment_methods: null,
      creditcard: null,
      cvc: null,
      exp: null,
      card_type: null,
      courseData: courseData,
      type: null,
      user:{},
      accounts: [],
    }
  },
  methods:{
    payment(){
      
      const creditcard = {
        creditcard_number: this.creditcard,
        cvc: this.cvc,
        exp: this.exp,
        payment_methods: this.payment_methods,
      }

      const payment = {
        payment: this.payment.length + 1,
        user_id: this.user.id,
        course_id: this.course.course_id,
        date: Date.now(),
        sumary: this.course.price
      }
      
      // fix this shit
      const checkExisting = this.user.creditcard.find(card => card.creditcard_number === this.creditcard)
      if (!checkExisting) {
        console.log('not founded')
        this.user.creditcard.push(creditcard)
      }
      
      this.user.enroll.push(this.course)
      this.user.payment_history.push(payment)
      
      localStorage.setItem('signedInAccount', JSON.stringify(this.user))
      if(this.accounts.find(account => account.id === this.user.id)){
        this.accounts.map(account => {
          if(account.id === this.user.id){
            account.enroll = this.user.enroll
            account.creditcard = this.user.creditcard
            account.payment_history = this.user.payment_history
          }
          return account
        })
      }
      localStorage.setItem('accounts',JSON.stringify(this.accounts))
    }
  },
  computed: {
    courseId(){
      return parseInt(this.$route.params.id)
    },
    course(){
      return courseData.find(course => course.course_id === this.courseId)
    }
  },
  watch:{
    payment_methods(cur,pre){
      console.log(cur,pre)
    }
  },created(){
    const accounts = localStorage.getItem('accounts')
    const user = localStorage.getItem('signedInAccount')
    if(user){
      this.loginState = localStorage.getItem('login_status') === 'true';
      this.user = JSON.parse(user);
    }
    if(accounts){
      this.accounts = JSON.parse(accounts)
    }
  }
};

</script>
<template>
  <section>
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
                <p>{{ course.name }}</p>
                <div class="flex justify-center border rounded-full w-[120px] mt-2">
                  <p>{{ course.category }}</p>
                </div>
              </div>
            </div>
            <p>{{ course.price }} บาท</p>
          </div>
  
          <div class="border-[1px] w-full rounded-full"></div>
  
          <p class="text-2xl font-bold pt-3">ข้อมูลผู้ชำระเงิน</p>
          <div class="py-8">
            <div class="flex justify-between mx-10">
              <div class="flex flex-col">
                <label for="">ชื่อ</label>
                <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]" v-model="this.first_name">
              </div>
              <div class="flex flex-col">
                <label for="">นามสกุล</label>
                <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]" v-model="this.last_name">
              </div>
            </div>
            <div class="flex justify-between mx-10 pt-3">
              <div class="flex flex-col">
                <label for="">อีเมล</label>
                <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]" v-model="this.email">
              </div>
              <div class="flex flex-col">
                <label for="">เบอร์โทรศัพท์</label>
                <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]" v-model="this.tel">
              </div>
            </div>
          </div>
  
  
          <div class="border-[1px] w-full rounded-full mt-3"></div>
  
          <p class="text-2xl font-bold py-3">วิธีชำระเงิน</p>
          <div>
            <div class="flex flex-col px-4 py-4">
              <div class="border-2 rounded-md py-8 px-10">
                <input class="text-yellow-1" type="radio" name="1" id="" value="MasterCard" v-model="this.payment_methods">
                <label class="ml-5" for="">ชำระผ่านบัตรเครดิต/เดบิต (MasterCard)</label>
              </div>
              <div class="border-2 rounded-md mt-2 py-8 px-10">
                <input class="text-yellow-1" type="radio" name="1" id="" value="Visa" v-model="this.payment_methods">
                <label class="ml-5" for="">ชำระผ่านบัตรเครดิต/เดบิต (Visa)</label>
              </div>
              <div class="border-2 rounded-md py-8 px-10 mt-2">
                <input type="radio" name="1" id="">
                <label class="ml-5" for="">ชำระผ่านด้วย PromptPay (QR Code)</label>
              </div>
            </div>
          </div>

          <p class="text-2xl font-bold py-3">ข้อมูลบัตรเครดิต</p>
          <div class="py-8">
            <div class="flex justify-between mx-10">
              <div class="flex flex-col">
                <label for="">รหัสบัตรเครดิต</label>
                <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]" v-model="this.creditcard">
              </div>
              <div class="flex flex-col">
                <label label for="">CVC</label>
                <input type="text" class="border-2 w-[5em] py-1 px-2 rounded-[7px]" v-model="this.cvc">
             </div>
              <div class="flex flex-col">
                <label for="">วันหมดอายุ</label>
                <input type="text" class="border-2 w-[10em] py-1 px-2 rounded-[7px]" v-model="this.exp">
              </div>
            </div>
            <div class="flex justify-between mx-10 pt-3">
              
              <!-- <div class="flex flex-col">
                <label for="">เบอร์โทรศัพท์</label>
                <input type="text" class="border-2 w-[20em] py-1 px-2 rounded-[7px]" v-model="this.tel">
              </div> -->
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
              <p>{{ course.price }}.00 บาท</p>
            </div>
            <div class="flex justify-between mt-2">
              <div>
                <p class="font-bold">สรุปยอดชำระเงิน</p>
              </div>
              <p class="font-bold">{{ course.price }}.00 บาท</p>
            </div>
          <p class="text-xs mt-5">เมื่อชำระเงิน ถือว่าท่านได้ยอมรับ <span class="text-violet-800">ข้อตกลงและเงื่อนไขการใช้บริการ, ประกาศความเป็นส่วนตัวสำหรับลูกค้าและผู้รับบริการ</span> และ <span>นโยบายการคืนเงิน</span> เรียบร้อยแล้ว</p>
          </div>
          <button class="bg-yellow-1 rounded-full py-2 px-40 text-white font-black mt-3" @click=payment>ชำระเงิน</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
input {box-sizing: border-box;}
</style>