<script>
export default {
    name: "login",
    data() {
        return {
            email: null,
            password: null,
            login_status: null,
            account: []
        };
    },

    methods: {
      login(){
        const existingAccount = this.accounts.find(account => {
          return account.email === this.email;
        });
        if(existingAccount){
          if(existingAccount.password === this.password){
            this.login_status = true
            localStorage.setItem('login_status', this.login_status)
            localStorage.setItem('signedInAccount', JSON.stringify(existingAccount))
            this.$router.push('/')
          } else {
            alert('password wrong')
          }
        } else {
          alert('email not found')
        }
      }
    },
    created() {
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
                <h1 class="text-4xl font-bold text-center">เข้าสู่ระบบ</h1>
                <form class="bg-gray-3 p-5 mx-80 mt-5 flex justify-center">
                    <div class="flex flex-col">
                        <p>อีเมล</p>
                        <input type="email" required v-model="this.email">
                        <p>รหัสผ่าน</p>
                        <input type="password" required v-model="this.password">
                        <sub>ลืมรหัสผ่าน?</sub>
                        <button to="/" type="submit" class="bg-yellow-1 mt-3 text-center" @click.prevent="login">เข้าสู่ระบบ</button>
                        <p class="text-center">หรือ</p>
                        <button class="bg-gray-2">Sign in with Google</button>
                        <div class="flex justify-between mx-8">
                            <p>
                                เป็นสมาชิกแล้ว?
                            </p>
                            <p>
                                คลิกเพื่อเข้าสู่ระบบ
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>