<script>
export default {
    name: "register",
    data() {
        return {
          first_name: null,
          last_name: null,
          email: null,
          password: null,
          confirm_password: null,              
          accounts: []
        }
    },
    methods: {
      register(){
        const existingAccount = this.accounts.find(account => {
          return account.email === this.email;
        })
        if(existingAccount){
          alert('email already exinst')
        } else if (this.password !== this.confirm_password){
          alert('password not match')
        } else {
          const newAccount = {
            id: this.accounts.length + 1,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            info: null,
            phone: null,
            address: null,
            enroll: [],
            payment_history: [],
            creditcard: []
          }

          this.accounts.push(newAccount)
          localStorage.setItem('accounts', JSON.stringify(this.accounts))
          this.$router.push('/login')
        }
      }
    },
    created(){
      const accountData = localStorage.getItem('accounts');
      if (accountData) {
        this.accounts = JSON.parse(accountData);
      }
    }
}
</script>

<template>
    <section>
        <div class="container mx-auto py-16">
            <div class="flex flex-col">
                <h1 class="text-4xl font-bold text-center">ลงทะเบียน</h1>
                <div class="bg-gray-3 p-5 mx-80 mt-5 flex justify-center">
                    <div class="flex flex-col">
                        <p>ชื่อ</p>
                        <input type="text" v-model="this.first_name">
                        <p>นามสกุล</p>
                        <input type="text" v-model="this.last_name">
                        <p>อีเมล</p>
                        <input type="text" v-model="this.email">
                        <div class="flex justify-between">
                            <div>
                                <p>รหัสผ่าน</p>
                                <input type="text" v-model="this.password">
                            </div>
                            <div>
                                <p>ยืนยันรหัสผ่าน</p>
                                <input type="text" v-model="this.confirm_password">
                            </div>
                        </div>
                        <button class="bg-yellow-1 mt-3" @click="register">ลงทะเบียน</button>
                        <p class="text-center">หรือ</p>
                        <button class="bg-gray-2">Sign up with Google</button>
                        <div class="flex justify-between mx-8">
                            <p>
                                เป็นสมาชิกแล้ว?
                            </p>
                            <router-link to="/login" class="text-blue-500">
                                คลิกเพื่อเข้าสู่ระบบ
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>