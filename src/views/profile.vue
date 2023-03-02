<script setup>
import Users from '../../users.json'
</script>

<script>
export default {
    name: "profile",
    data () {
        return {
            Users,
            user_id: 0,
        }
    },

    computed:{
      userId(){
        return parseInt(this.$route.params.id)
      },
      user(){
        return Users.find(data => data.user_id === this.userId)
      }
    },
}
</script>

<template>
    <section>
        <div class="bg-yellow-2 p-12 m-20 flex justify-between">
            <div class="flex flex-col basis-3/12">
                <div>
                    <a href="" class="text-gray-1">
                        <i class="fa-solid fa-pen"></i>
                        <span class="ml-2">คอร์สของฉัน</span>
                    </a>
                </div>
                <div>
                    <a href="" class="text-yellow-1">
                        <i class="fa-solid fa-user-pen"></i>
                        <span class="ml-2">จัดการโปรไฟล์</span>
                    </a>
                </div>
                <div>
                    <a href="" class="text-gray-1">
                        <i class="fa-sharp fa-solid fa-clock-rotate-left"></i>
                        <span class="ml-2">ประวัติการซื้อ</span>
                    </a>
                </div>
                <div>
                    <a href="" class="text-gray-1">
                        <i class="fa-regular fa-credit-card"></i>
                        <span class="ml-2">การชำระเงิน</span>
                    </a>
                </div>
            </div>
            <div class="flex flex-col basis-8/12">
                <div class="flex justify-end">
                    <p class="text-xl font-bold">จัดการโปรไฟล์</p>
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
        </div>
    </section>
</template>