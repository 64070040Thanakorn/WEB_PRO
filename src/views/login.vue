<script setup>
import Users from '../../users.json'
</script>

<script>
export default {
    name: "login",
    data() {
        return {
            Users,
            email: null,
            password: null,
            user_id: null,
            login_status: false,
        };
    },

    methods: {
        checkLogin(event) {
            var checks = false;
            for (let i = 0; i < Users.length; i++) {
                if (Users[i].email === this.email && Users[i].password === this.password) {
                    checks = true;
                    this.user_id = Users[i].user_id;
                    break
                }
            }
            if (checks) {
                console.log(this.user_id)
            }
            else {
                event.preventDefault();
                alert("your email or password is not correct!");
                
            }
        }
    },
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
                        <router-link to="/" type="submit" class="bg-yellow-1 mt-3 text-center" @click.prevent="checkLogin">เข้าสู่ระบบ</router-link>
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