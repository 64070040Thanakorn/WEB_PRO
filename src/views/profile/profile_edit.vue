<script setup>
// import Users from '../../../users.json'
// defineProps({
//     user: JSON,
//     Users: Array,
//     title: String,
// })
</script>

<script>
export default {
    name: "profile_edit",
    data() {
        return {
        }
    },
    created() {
        const user = localStorage.getItem('signedInAccount')
        if (user) {
            this.loginState = localStorage.getItem('login_status') === 'true';
            this.user = JSON.parse(user);
        }
    }
}
</script>

<template>
    <div class="flex flex-col basis-9/12">
    <div class="flex justify-end">
        <p class="text-xl font-bold mb-3"><i class="fa-solid fa-user-pen"></i><span class="ml-2">จัดการโปรไฟล์</span></p>
    </div>
    <hr>
    <p class="text-lg font-bold">ข้อมูลส่วนตัว</p>
    <p class="text-gray-1">ชื่อ-นามสกุล</p>
    <div class="flex justify-between">
            <p>{{ user.first_name }} {{ user.last_name }}</p>
            <a href="" class="text-brown-3">
                <i class="fa-solid fa-pen-to-square fa-1x"></i>
                <span>แก้ไข</span>
            </a>
        </div>
        <div class="flex justify-between">
            <div>
                <p class="text-gray-1">อีเมล</p>
                <p> {{ user.email }}</p>
                <p class="text-gray-1">รหัสผ่าน</p>
                    <p> {{ user.password }} </p>
                </div>
                <div class="flex items-center">
                    <a href="" class="text-brown-3">
                        <i class="fa-solid fa-pen-to-square fa-1x"></i>
                        <span>แก้ไข</span>
                    </a>
                </div>
            </div>
            <hr>
            <div class="flex justify-between">
                <div>
                    <p class="text-gray-1">สถานะการศึกษา</p>
                    <p> {{ user.info }} </p>
                    <p class="text-gray-1">เบอร์โทรศัพท์</p>
                    <p> {{ user.phone }} </p>
                    <p class="text-gray-1">ที่อยู่</p>
                    <p> {{ user.address }} </p>
                </div>
                <div class="flex items-center">
                    <a href="" class="text-brown-3">
                        <i class="fa-solid fa-pen-to-square fa-1x"></i>
                        <span>แก้ไข</span>
                    </a>
                </div>
            </div>
        <a class="bg-red-500 w-[30%] text-white text-center mt-4 rounded-[10px]" href="">ออกจากระบบ</a>
    </div>
</template>