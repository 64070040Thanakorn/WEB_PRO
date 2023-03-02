<script>
export default {
    name: "register",
    data() {
        return {
            users: {
                first_name: null,
                last_name: null,
                email: null,
                password: null,
                info: null,
                phone: null,
                address: null
            },
        };
    },
    methods: {
        saveObjectToJsonFile() {
            // Step 1: Convert object to JSON string
            const json = JSON.stringify(this.users);

            // Step 2: Create new Blob object
            const blob = new Blob([json], { type: 'application/json' });

            // Step 3: Create new URL object
            const url = URL.createObjectURL(blob);

            // Step 4: Create new anchor element and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'users.json';
            document.body.appendChild(link);
            link.click();

            // Step 5: Clean up
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        },
    },
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
                        <input type="text" :first_name="this.first_name" v-model="this.users.first_name">
                        <p>นามสกุล</p>
                        <input type="text" :last_name="this.last_name" v-model="this.users.last_name">
                        <p>อีเมล</p>
                        <input type="text" :email="this.email" v-model="this.users.email">
                        <div class="flex justify-between">
                            <div>
                                <p>รหัสผ่าน</p>
                                <input type="text" :password="this.password" v-model="this.users.password">
                            </div>
                            <div>
                                <p>ยืนยันรหัสผ่าน</p>
                                <input type="text">
                            </div>
                        </div>
                        <button class="bg-yellow-1 mt-3" @click="saveObjectToJsonFile()">ลงทะเบียน</button>
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