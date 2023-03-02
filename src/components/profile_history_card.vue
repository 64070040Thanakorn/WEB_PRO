<script>
export default {
    name: "profile_history_card"
}
</script>

<template>
    <div class="bg-white my-5 p-5 rounded-[20px]">
        <div class="flex justify-between">
            <div class="container flex basis-3/12">
                <img src="../assets/landing_image.png">
            </div>
            <div class="container flex flex-col basis-9/12 ml-4">
                <p class="text-lg font-bold">Course name</p>
                <div class="flex justify-between">
                    <div>
                        <p>วันที่สั่งซื้อ</p>
                        <p>01/01/2020 15:30</p>
                    </div>
                    <div>
                        <p>วิธีการชำระเงิน</p>
                        <p>MasterCard</p>
                    </div>
                    
                </div>
                <p class="mt-4">วันที่ชำระเงิน</p>
                <p>01/01/2020 20:30</p>
            </div>
        </div>
        <div>
            <hr class="mt-2">
            <div class="flex justify-between mt-2">
                <p>ยอดชำระเงิน</p>
                <p>1990.0 บาท</p>
            </div>
        </div>
    </div>
</template>