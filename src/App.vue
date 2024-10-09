<template>
    <div>
        <AppLayout>
            <template #app>
                <div class="bx_input">
                    <span>
                        <Icon icon="ic:baseline-qr-code" />
                    </span>

                    <input
                        v-model="text"
                        type="text"
                        name="url"
                        id="input_url"
                        placeholder="please enter your text here"
                    />
                </div>

                <div class="bx_qrcode">
                    <img
                        :src="qrcode"
                        alt="QR Code"
                        width="300"
                        height="300"
                        v-if="text"
                        ref="ImgEl"
                    />

                    <button @click="DownloadImg">download</button>
                </div>
            </template>
        </AppLayout>
    </div>
</template>

<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { Icon } from "@iconify/vue";
import { downloadImage } from "@/helper";

import { ref } from "vue";

const text = ref(null);
const qrcode = useQRCode(text, {
    width: 400,
    height: 400,
    margin: 1,
    color: {
        dark: "#000",
        light: "#fff",
    },
});

const ImgEl = ref(null);

const DownloadImg = () => {

    console.log(ImgEl.value.src);
    downloadImage(ImgEl.value.src, 'qrcode-image.png');
    
};
</script>

<style lang="scss" scoped>
.bx_input {
    margin: 100px auto 0;
    height: 40px;
    background: #fff;
    width: 300px;
    display: flex;
    border: 1px solid rgb(0, 0, 0, 0.2);
    align-items: center;
    padding-inline: 5px;
    span {
        padding: 2px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 20px;
            color: black;
        }
    }
    input {
        height: 100%;
        width: 100%;
        border: none;
        background: transparent;
        padding-inline: 10px;
        border-radius: 0px;
        font-size: 14px;
    }
}

.bx_qrcode {
    //background: red;
    display: flex;
    margin: 20px auto;
    //clip-path: inset(0 round 12px);
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 20px;
    img {
        clip-path: inset(0 round 0px);
    }
    button {
        height: 40px;
        cursor: pointer;
        border: none;
        background: #000000;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        clip-path: inset(0 round 0px);
        text-transform: capitalize;
    }
}
</style>
