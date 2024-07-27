<template>
    <div>
        <form id="meetingMinits">
            <div id="meetingMinitsTitle">
                Meeting Minutes
            </div>
            <div id="meetingMinitesBody">
                <div id="topDiv">
                    <label>Customer Type : </label>
                    <select v-model="check_option" @change="fetch_chk_data">
                        <option value="a000">Select an Option</option>
                        <option value="a001">Individual</option>
                        <option value="a002">Corporate</option>
                    </select>
                </div>
            </div>
            <div id="meetingMinitsRecords">
                <table id="meetingTable">
                    <tr class="meetingRow">
                        <td style="width:50%; padding:10px;">
                            <table style="width:100%; height:240px;">
                                <tr>
                                    <td class="meetingColShow">Customer Name<span style="color:red;">*</span></td>
                                    <td colspan="3">
                                        <select style="width:94%;height:30px;" v-model="customer_id">
                                            <option value="">Select Customer Name</option>
                                            <option v-for="cust in customer_name" :key="cust.cus_id" :value="cust.cus_id">{{ cust.cus_name }}</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="meetingColShow">Date </td>
                                    <td><input type="date" v-model="meeting_date"></td>
                                    <td style="width:16%">Time</td>
                                    <td><input type="time" v-model="meeting_time"></td>
                                </tr>
                                <tr>
                                    <td class="meetingColShow">Meeting Place<span style="color:red;">*</span></td>
                                    <td colspan="3">
                                        <input type="text" v-model="meeting_place" 
                                               @blur="CloseSugessionBox" 
                                               @keyup="ChosePlaceName" 
                                               style="width:92%;height:20px;">
                                        <div id="showSugestion" v-if="isSuggestionshow">
                                            <div v-for="li in filteredPlaceNames" :key="li.plName" @mousedown.prevent="SelectPlaceName(li.plName)">
                                                {{ li.plName }}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="meetingColShow">Attendees From Client Side<span style="color:red;">*</span></td>
                                    <td colspan="3">
                                        <input type="text" v-model="att_clt_side" class="colTextArea">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="meetingColShow">Attendees From Host Side<span style="color:red;">*</span></td>
                                    <td colspan="3">
                                        <input type="text" v-model="att_host_side" class="colTextArea">
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td style="width:50%;">
                            <table style="width:100%;height:240px">
                                <tr style="height:33%">
                                    <td class="meetingColShow">Meeting Agenda<span style="color:red;">*</span></td>
                                    <td><input type="text" class="colTextArea" v-model="meeting_agenda"></td>
                                </tr>
                                <tr>
                                    <td class="meetingColShow">Meeting Discussion<span style="color:red;">*</span></td>
                                    <td><input type="text" class="colTextArea" v-model="meeting_deiscussion"></td>
                                </tr>
                                <tr>
                                    <td class="meetingColShow">Meeting Decision<span style="color:red;">*</span></td>
                                    <td><input type="text" class="colTextArea" v-model="meeting_decision"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            {{ customer_name }}
            {{ placeName }}
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            check_option: 'a000',
            customer_name: [],
            customer_id: '',
            meeting_date: '',
            meeting_time: '',
            meeting_place: '',
            att_clt_side: '',
            att_host_side: '',
            meeting_agenda: '',
            meeting_deiscussion: '',
            meeting_decision: '',
            isSuggestionshow: false,
            placeName: [
                { plName: 'Rajshahi' },
                { plName: 'Dhaka' },
                { plName: 'Chittagong' },
                { plName: 'Shylet' },
                { plName: 'Rangpur' },
                { plName: 'Barisal' }
            ]
        }
    },
    computed: {
        filteredPlaceNames() {
            return this.placeName.filter(place => place.plName.toLowerCase().includes(this.meeting_place.toLowerCase()));
        }
    },
    methods: {
        fetch_chk_data() {
            if (this.check_option === 'a001') {
                this.customer_name = [
                    { cus_name: 'Monaem', cus_id: '001' },
                    { cus_name: 'Rahat', cus_id: '002' },
                    { cus_name: 'Sama', cus_id: '003' }
                ];
            } else if (this.check_option === 'a002') {
                this.customer_name = [
                    { cus_name: 'Monaem CO.', cus_id: '101' },
                    { cus_name: 'Rahat CO.', cus_id: '102' },
                    { cus_name: 'Sama CO.', cus_id: '103' }
                ];
            }
        },
        CloseSugessionBox() {
            this.isSuggestionshow = false;
        },
        SelectPlaceName(plname) {
            console.log(plname);
            this.meeting_place = plname;
            this.isSuggestionshow = false;
        },
        ChosePlaceName() {
            this.isSuggestionshow = true;
        }
    }
}
</script>

<style scoped>
#meetingMinits {
    border: 1px solid black;
    background: gainsboro;
    padding: 5px 0px 0px 5px;
}

#meetingMinitsTitle {
    text-align: left;
    border: 1px solid;
    padding: 5px;
    background: rgb(232, 240, 254);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

#meetingMinitesBody {
    text-align: left;
    display: flex;
    align-content: center;
    padding: 0px 5px 0px 5px;
    border: 1px solid black;
    background: white;
}

#topDiv {
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
}

#topDiv select {
    width: 20%;
    height: 30px;
    border: none;
    background: rgb(232, 240, 254);
    border-radius: 10px;
    margin-top: 5px;
}

#meetingMinitsRecords {
    border: 1px solid black;
    background: white;
}

#meetingTable {
    width: 100%;
    text-align: left;
}

.meetingColShow {
    width: 38%;
    padding-left: 10px;
}

.colTextArea {
    width: 92%;
    height: 60px;
}

.meetingRowStyle {
    border: 1px solid black;
}

#showSugestion {
    border: none;
    position: absolute;
    background: rgb(232, 240, 254);
    width: 92%;
    height: fit-content;
    padding: 5px;
    cursor: pointer;
}
</style>
