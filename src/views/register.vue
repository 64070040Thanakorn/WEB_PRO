<script>
   export default {
        name: "register"
   }
</script>

<template>
    <section>
        <div class="container mx-auto py-16">
            <div class="flex flex-col">
                <h1 class="text-4xl font-bold text-center">เข้าสู่ระบบ</h1>
                <div class="bg-gray-3 p-5 mx-80 mt-5 flex justify-center">
                    <div class="flex flex-col">
                        <p>ชื่อ</p>
                        <input type="text">
                        <p>นามสกุล</p>
                        <input type="text">
                        <p>อีเมล</p>
                        <input type="text">
                        <div class="flex justify-between">
                            <div>
                                <p>รหัสผ่าน</p>
                                <input type="text">
                            </div>
                            <div>
                                <p>ยืนยันรหัสผ่าน</p>
                                <input type="text">
                            </div>
                        </div>
                        <button class="bg-yellow-1 mt-3">เข้าสู่ระบบ</button>
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
                </div>
            </div>
        </div>
    </section>
</template>