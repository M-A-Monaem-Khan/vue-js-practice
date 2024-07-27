<template>
    <div>
        <div class="signinDiv">
            <div class="siginDivTitle">
                <h1>Sign In</h1>
            </div>
            <form class="signinDivBody" @submit.prevent="SubmitButtom">
                <div>
                    <label>Email</label>
                    <input type="text" v-model="signinEmail">
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input :type="passwordType" v-model="signinPassword">
                        <button class="passwordShowBtn" @click.prevent="handlePasswordShowBtn">{{ passwordshowBtnText }}</button>
                    </div>
                </div>
                <div>
                    <input type="checkbox" v-model="signinSave">
                    <label for="">Save Credentials</label>
                </div>

                <button type="submit" class="signinBtn">Submit</button>
            </form>
        </div>
        <ModalView :headerMsg="header" :textMsg="text" @close="closeModal" @okPress="closeModal" v-if="isModalShow" />
    </div>

</template>

<script>
import ModalView from '../../components/ModalView.vue'
export default {
    components: {
        ModalView
    },
    data() {
        return {
            signinEmail: '',
            signinPassword: '',
            signinSave: false,
            isModalShow: false,
            header: '',
            text: '',
            theme: '',
            passwordshowBtnText:'Show',
            passwordType: 'password'
        }
    },
    methods: {
        handlePasswordShowBtn(){
if(this.passwordshowBtnText === 'Show'){
    this.passwordshowBtnText = 'Hide';
    this.passwordType = 'text';
}else if(this.passwordshowBtnText === 'Hide'){
    this.passwordshowBtnText = 'Show';
    this.passwordType = 'Password';
}
        },
        SubmitButtom() {
            if (this.signinEmail === '') {
                this.errorShow('Please Input Your Email Id', false);
            } else if (this.signinPassword === '') {
                this.errorShow('Please Input Your Password', false);
            } else {
                if (this.signinEmail === 'monaem@mail.com'
                    && this.signinPassword === '1') {
                    if (this.signinSave) {
                        localStorage.setItem('UserName', 'Monaem Khan');
                        sessionStorage.setItem('UserName', 'Monaem Khan');
                        sessionStorage.removeItem('errTy');
                        this.$router.push('/BU');
                    } else {
                        sessionStorage.setItem('UserName', 'Monaem Khan');
                        sessionStorage.removeItem('errTy');
                        this.$router.push('/BU');
                    }
                } else {
                    this.errorShow('Wrong User', true);
                }
            }
        },
        closeModal() {
            this.isModalShow = false;
        },
        errorShow(msg, isClear) {
            this.isModalShow = true;
            this.header = 'Error Message';
            this.text = msg;
            console.log(this.text);

            setTimeout(() => {
                this.isModalShow = false;
                if (isClear) {
                    this.clearData();
                }
            }, 5000);
        },
        clearData() {
            this.signinEmail = '';
            this.signinPassword = '';
            this.signinSave = false;
            this.header = '';
            this.text = '';
            this.theme = '';
        }
    },
    mounted() {
        //this.$router.push('/about');
        if (sessionStorage.getItem('errTy') !== null) {
            this.errorShow('User Not Logged In', true);
            sessionStorage.removeItem('errTy')
        }

        if (localStorage.getItem('UserName') !== null) {
            sessionStorage.setItem('UserName', localStorage.getItem('UserName'));
            this.$router.push('/BU');
        } else if (sessionStorage.getItem('UserName') !== null) {
            this.$router.push('/BU');
        }
    }
}
</script>

<style scoped>
.signinDiv {
    background: #eeeeee;
    width: 400px;
    margin: 140px auto;
    padding: 10px;
    border-radius: 10px;
    letter-spacing: 1px;
}

.siginDivTitle {
    border-bottom: 2px solid black
}

.signinDivBody div {
    padding: 5px;
    margin-top: 5px;
    text-align: left;
    letter-spacing: 1px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.passwordShowBtn{
    padding: 10px 7px;
    position: relative;
    top:-36px;
    left:88%;
    z-index: 1;
    border: none;
    cursor: pointer;
    text-align: center;
    background: transparent;
}

.passwordShowBtnAUtoFill{
    background: rgb(232, 240, 254) !important;
}

.signinBtn {
    border-radius: 10px;
    width: 150px;
    height: 30px;
    border: none;
    background: blue;
    color: white;
    font-weight: bolder;
    letter-spacing: 1px;
}
</style>