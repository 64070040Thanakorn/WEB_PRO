<script>
export default {
    name: "forgepassword",
    data() {
        return {
          password: null,
          newPasword: null,              
          accounts: [],
          login_account: {}
        }
    },
    methods: {
      register(){
        const existingAccount = this.accounts.find(account => {
          return account.email === this.login_account.email;
        })
        if(existingAccount){
            if(this.password === this.newPasword){
              const newAccount = {
                ...this.login_account, password: this.password
              }
              this.accounts.map(account => {
                  account.password = this.password
              })
              localStorage.setItem('signedInAccount',JSON.stringify(newAccount))
              localStorage.setItem('accounts',JSON.stringify(this.accounts))
          }
          console.log('done')

        } else {
          alert('email not found')
        }
      }
    },
    created(){
      const existingAccount = localStorage.getItem('signedInAccount')
      const accountData = localStorage.getItem('accounts');
      if (accountData) {
        this.accounts = JSON.parse(accountData);
        if(existingAccount){
          this.login_account = JSON.parse(existingAccount)
        }
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
                        <!-- <p>อีเมล</p>
                        <input type="text" v-model="this.first_name"> -->
                        <p>พาสเวิร์ดเก่า</p>
                        <input type="text" v-model="this.password">
                        <p>พาสเวิร์ดใหม่</p>
                        <input type="text" v-model="this.newPasword">
                        <router-link to="/" class="bg-yellow-1 mt-3" @click="register">เปลี่ยนรหัสผ่าน</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>