<template>
    <div id="popUpBox" @click.self="closeModal">
            <div id="popUpContent">
                <div id="popUpTitle">
                    <div>
                        <div id="popUpTitle_header">{{headerMsg}}</div>
                        <div id="popUpTitle_close" @click="closeModal"><button>X</button></div>
                    </div>
                </div>
                <div id="popUpBody">
                    <div>{{ textMsg }}</div>
                </div>
                <div id="popUpFooter">
                    <button @click="closeModal">Cancle</button>
                    <button @click="okModal">Ok</button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['headerMsg', 'textMsg', 'theme'],
    methods:{
        closeModal(){
            this.$emit('close');
        },
        okModal(){
            this.$emit('okPress');
        }
    }
}
</script>

<style>
#popUpBox{
    position: fixed;
    background: transparent;
    width: 100%;
    height: 100vh;
    top:0px;
}

#popUpContent{
    border: 2px solid rgb(14, 104, 222);
    border-radius: 10px;
    width: 600px;
    margin: 20% auto;
    background-color: white;
    letter-spacing: 1px;
}

#popUpTitle{
    background: rgb(14, 104, 222);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 10px;
    border-bottom: 1px dotted black;
}

#popUpTitle_header{
width:49%;
display: inline-block;
text-align: left;
}
#popUpTitle_close{
width: 50%;
display: inline-block;
text-align: right;
}
#popUpTitle_close button{
    cursor: pointer !important;
}

#popUpBody{
    padding: 10px;
    margin:0px 40px;
}

#popUpFooter{
    text-align: right;
    padding-top: 10px;
    padding-bottom: 5px;
    padding-right: 5px;
}
#popUpFooter button{
    background: rgb(14, 104, 222);
    border: none;
    color: white;
    height: 25px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
}
</style>