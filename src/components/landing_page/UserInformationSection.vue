<template>
    <section>
        <h2>Lorem ispum</h2>
        <p id="mainInfo" >Lorem ipsum dolor sit amet, consectetur adipiscing</p>

        <div id="btnsBox" >
            <button @click="selectedType = 'employer'; $emit('choosUserType', selectedType)"
                :class="{'userTypeButtonsSelected': selectedType === 'employer'}"
                class="userTypeButtons">I am an employer</button>
            <button @click="selectedType = 'worker'; $emit('choosUserType', selectedType)"
                :class="{'userTypeButtonsSelected': selectedType === 'worker'}"
                class="userTypeButtons">i am a worker</button>
        </div>

        <div id="professionsBox">
            <div id="professionsBoxHeader">
                <div id="professionsSearchingBox">
                    <input type="text" placeholder="Write the name of the profession that interests you..." v-model="desired_profession" >
                    <button>Search</button>
                </div>
            </div>

            <div id="guideBox" >
                <h3  v-if="selectedProfessions.length !== 0"
                @click="removeElementFromSelectedProfessions('last')">&lt;</h3>
                <h5 v-for="(profession, index) in selectedProfessions" :key="index" 
                @click="removeElementFromSelectedProfessions(profession)">{{ profession.name }} {{ selectedProfessionArrow(profession) }}</h5>
            </div>
            
            <div id="professionsXscrollBox">
                <div id="professionsMainBox" :style="{left: `-${selectedProfessions.length * 100}%`}" >
                    <div class="professions">
                        <div>
                            <button v-for="(profession, index) in professions" :key="index"
                            @click="selectProfession(profession)">
                                <h5>{{ profession.name }}</h5>
                            </button>
                        </div>
                    </div>
    
                    <div class="professions" 
                    v-for="(profession, prof_index) in selectedProfessions" :key="prof_index">
                        <div >
                            <button v-for="(subprofession, index) in profession.subprofessions" :key="index"
                            @click="selectProfession(subprofession)">
                                <h5>{{ subprofession.name }}</h5>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default{
    data(){
        return{
            selectedType: null,
            desired_profession: '',
            selectedProfessions: [],
            newSelectedProfession: null,
            professions: [
                { 
                    id: 0, 
                    name: 'IT', 
                    subprofessions: [
                        { id: 0, name: 'Software Engineer', subprofessions: [
                            { id: 0, name: 'Registered Nurse', subprofessions: [
                                { id: 0, name: 'Teacher', subprofessions: [] },
                                { id: 1, name: 'Professor', subprofessions: [] },
                                { id: 2, name: 'Educational Administrator', subprofessions: [] },
                                { id: 3, name: 'School Counselor', subprofessions: [] },
                                { id: 4, name: 'Curriculum Developer', subprofessions: [] },
                                { id: 5, name: 'Tutor', subprofessions: [] }
                            ] },
                            { id: 1, name: 'Physician', subprofessions: [] },
                            { id: 2, name: 'Medical Technologist', subprofessions: [] },
                            { id: 3, name: 'Physical Therapist', subprofessions: [] },
                            { id: 4, name: 'Healthcare Administrator', subprofessions: [] },
                            { id: 5, name: 'Pharmacist', subprofessions: [] }
                        ] },
                        { id: 1, name: 'Data Analyst', subprofessions: [] },
                        { id: 2, name: 'Cybersecurity Specialist', subprofessions: [] },
                        { id: 3, name: 'Cloud Architect', subprofessions: [] },
                        { id: 4, name: 'UI/UX Designer', subprofessions: [] },
                        { id: 5, name: 'IT Project Manager', subprofessions: [] }
                    ]
                },
                { 
                    id: 1, 
                    name: 'Healthcare', 
                    subprofessions: [
                        { id: 0, name: 'Registered Nurse', subprofessions: [] },
                        { id: 1, name: 'Physician', subprofessions: [] },
                        { id: 2, name: 'Medical Technologist', subprofessions: [] },
                        { id: 3, name: 'Physical Therapist', subprofessions: [] },
                        { id: 4, name: 'Healthcare Administrator', subprofessions: [] },
                        { id: 5, name: 'Pharmacist', subprofessions: [] }
                    ]
                },
                { 
                    id: 2, 
                    name: 'Education', 
                    subprofessions: [
                        { id: 0, name: 'Teacher', subprofessions: [] },
                        { id: 1, name: 'Professor', subprofessions: [] },
                        { id: 2, name: 'Educational Administrator', subprofessions: [] },
                        { id: 3, name: 'School Counselor', subprofessions: [] },
                        { id: 4, name: 'Curriculum Developer', subprofessions: [] },
                        { id: 5, name: 'Tutor', subprofessions: [] }
                    ]
                },
                { 
                    id: 3, 
                    name: 'Finance', 
                    subprofessions: [
                        { id: 0, name: 'Financial Analyst', subprofessions: [] },
                        { id: 1, name: 'Accountant', subprofessions: [] },
                        { id: 2, name: 'Investment Banker', subprofessions: [] },
                        { id: 3, name: 'Financial Advisor', subprofessions: [] },
                        { id: 4, name: 'Actuary', subprofessions: [] },
                        { id: 5, name: 'Risk Manager', subprofessions: [] }
                    ]
                },
                { 
                    id: 4, 
                    name: 'Manufacturing', 
                    subprofessions: [
                        { id: 0, name: 'Production Manager', subprofessions: [] },
                        { id: 1, name: 'Quality Control Inspector', subprofessions: [] },
                        { id: 2, name: 'Mechanical Engineer', subprofessions: [] },
                        { id: 3, name: 'Supply Chain Manager', subprofessions: [] },
                        { id: 4, name: 'Industrial Designer', subprofessions: [] },
                        { id: 5, name: 'Maintenance Technician', subprofessions: [] }
                    ]
                },
                { 
                    id: 5, 
                    name: 'Marketing', 
                    subprofessions: [
                        { id: 0, name: 'Marketing Manager', subprofessions: [] },
                        { id: 1, name: 'Digital Marketer', subprofessions: [] },
                        { id: 2, name: 'Market Research Analyst', subprofessions: [] },
                        { id: 3, name: 'Brand Manager', subprofessions: [] },
                        { id: 4, name: 'Advertising Executive', subprofessions: [] },
                        { id: 5, name: 'Public Relations Specialist', subprofessions: [] }
                    ]
                },
                { 
                    id: 6, 
                    name: 'Consulting', 
                    subprofessions: [
                        { id: 0, name: 'Management Consultant', subprofessions: [] },
                        { id: 1, name: 'Strategy Consultant', subprofessions: [] },
                        { id: 2, name: 'HR Consultant', subprofessions: [] },
                        { id: 3, name: 'Financial Consultant', subprofessions: [] },
                        { id: 4, name: 'IT Consultant', subprofessions: [] },
                        { id: 5, name: 'Healthcare Consultant', subprofessions: [] }
                    ]
                },
                { 
                    id: 7, 
                    name: 'Research & Development', 
                    subprofessions: [
                        { id: 0, name: 'Research Scientist', subprofessions: [] },
                        { id: 1, name: 'Product Developer', subprofessions: [] },
                        { id: 2, name: 'R&D Manager', subprofessions: [] },
                        { id: 3, name: 'Biomedical Engineer', subprofessions: [] },
                        { id: 4, name: 'Chemist', subprofessions: [] },
                        { id: 5, name: 'Food Technologist', subprofessions: [] }
                    ]
                },
                { 
                    id: 8, 
                    name: 'Hospitality', 
                    subprofessions: [
                        { id: 0, name: 'Hotel Manager', subprofessions: [] },
                        { id: 1, name: 'Event Planner', subprofessions: [] },
                        { id: 2, name: 'Restaurant Manager', subprofessions: [] },
                        { id: 3, name: 'Catering Coordinator', subprofessions: [] },
                        { id: 4, name: 'Tour Guide', subprofessions: [] },
                        { id: 5, name: 'Travel Agent', subprofessions: [] }
                    ]
                },
                { 
                    id: 9, 
                    name: 'Logistics & Supply Chain', 
                    subprofessions: [
                        { id: 0, name: 'Logistics Coordinator', subprofessions: [] },
                        { id: 1, name: 'Supply Chain Analyst', subprofessions: [] },
                        { id: 2, name: 'Warehouse Manager', subprofessions: [] },
                        { id: 3, name: 'Transportation Planner', subprofessions: [] },
                        { id: 4, name: 'Procurement Specialist', subprofessions: [] },
                        { id: 5, name: 'Distribution Manager', subprofessions: [] }
                    ]
                },
                { 
                    id: 10, 
                    name: 'Art & Entertainment', 
                    subprofessions: [
                        { id: 0, name: 'Actor/Actress', subprofessions: [] },
                        { id: 1, name: 'Musician', subprofessions: [] },
                        { id: 2, name: 'Film Director', subprofessions: [] },
                        { id: 3, name: 'Graphic Designer', subprofessions: [] },
                        { id: 4, name: 'Event Coordinator', subprofessions: [] },
                        { id: 5, name: 'Art Curator', subprofessions: [] }
                    ]
                },
                { 
                    id: 11, 
                    name: 'Legal Services', 
                    subprofessions: [
                        { id: 0, name: 'Lawyer', subprofessions: [] },
                        { id: 1, name: 'Legal Assistant', subprofessions: [] },
                        { id: 2, name: 'Paralegal', subprofessions: [] },
                        { id: 3, name: 'Judge', subprofessions: [] },
                        { id: 4, name: 'Court Reporter', subprofessions: [] },
                        { id: 5, name: 'Legal Consultant', subprofessions: [] }
                    ]
                },
                { 
                    id: 12, 
                    name: 'Real Estate & Construction', 
                    subprofessions: [
                        { id: 0, name: 'Real Estate Agent', subprofessions: [] },
                        { id: 1, name: 'Construction Manager', subprofessions: [] },
                        { id: 2, name: 'Architect', subprofessions: [] },
                        { id: 3, name: 'Urban Planner', subprofessions: [] },
                        { id: 4, name: 'Surveyor', subprofessions: [] },
                        { id: 5, name: 'Property Developer', subprofessions: [] }
                    ]
                },
                { 
                    id: 13, 
                    name: 'Tourism & Travel', 
                    subprofessions: [
                        { id: 0, name: 'Tour Guide', subprofessions: [] },
                        { id: 1, name: 'Travel Agent', subprofessions: [] },
                        { id: 2, name: 'Flight Attendant', subprofessions: [] },
                        { id: 3, name: 'Hotel Concierge', subprofessions: [] },
                        { id: 4, name: 'Cruise Director', subprofessions: [] },
                        { id: 5, name: 'Tourism Manager', subprofessions: [] }
                    ]
                },
                { 
                    id: 14, 
                    name: 'Sports & Fitness', 
                    subprofessions: [
                        { id: 0, name: 'Personal Trainer', subprofessions: [] },
                        { id: 1, name: 'Sports Coach', subprofessions: [] },
                        { id: 2, name: 'Athletic Director', subprofessions: [] },
                        { id: 3, name: 'Physical Therapist', subprofessions: [] },
                        { id: 4, name: 'Sports Psychologist', subprofessions: [] },
                        { id: 5, name: 'Fitness Instructor', subprofessions: [] }
                    ]
                },
                { 
                    id: 15, 
                    name: 'Media & Communications', 
                    subprofessions: [
                        { id: 0, name: 'Journalist', subprofessions: [] },
                        { id: 1, name: 'Public Relations Specialist', subprofessions: [] },
                        { id: 2, name: 'Content Writer', subprofessions: [] },
                        { id: 3, name: 'Social Media Manager', subprofessions: [] },
                        { id: 4, name: 'Broadcast Producer', subprofessions: [] },
                        { id: 5, name: 'Editor', subprofessions: [] }
                    ]
                },
                { 
                    id: 16, 
                    name: 'Telecommunications', 
                    subprofessions: [
                        { id: 0, name: 'Network Engineer', subprofessions: [] },
                        { id: 1, name: 'Telecom Technician', subprofessions: [] },
                        { id: 2, name: 'Telecom Sales Representative', subprofessions: [] },
                        { id: 3, name: 'Telecom Analyst', subprofessions: [] },
                        { id: 4, name: 'Wireless Engineer', subprofessions: [] },
                        { id: 5, name: 'Telecom Project Manager', subprofessions: [] }
                    ]
                },
                { 
                    id: 17, 
                    name: 'Energy & Environment', 
                    subprofessions: [
                        { id: 0, name: 'Environmental Scientist', subprofessions: [] },
                        { id: 1, name: 'Renewable Energy Engineer', subprofessions: [] },
                        { id: 2, name: 'Energy Analyst', subprofessions: [] },
                        { id: 3, name: 'Sustainability Consultant', subprofessions: [] },
                        { id: 4, name: 'Climate Change Analyst', subprofessions: [] },
                        { id: 5, name: 'Ecologist', subprofessions: [] }
                    ]
                },
                { 
                    id: 18, 
                    name: 'Agriculture & Forestry', 
                    subprofessions: [
                        { id: 0, name: 'Farm Manager', subprofessions: [] },
                        { id: 1, name: 'Forester', subprofessions: [] },
                        { id: 2, name: 'Agricultural Scientist', subprofessions: [] },
                        { id: 3, name: 'Agricultural Engineer', subprofessions: [] },
                        { id: 4, name: 'Horticulturist', subprofessions: [] },
                        { id: 5, name: 'Livestock Specialist', subprofessions: [] }
                    ]
                },
                { 
                    id: 19, 
                    name: 'Government', 
                    subprofessions: [
                        { id: 0, name: 'Civil Servant', subprofessions: [] },
                        { id: 1, name: 'Policy Analyst', subprofessions: [] },
                        { id: 2, name: 'Public Administrator', subprofessions: [] },
                        { id: 3, name: 'Diplomat', subprofessions: [] },
                        { id: 4, name: 'Government Relations Specialist', subprofessions: [] },
                        { id: 5, name: 'Legislative Assistant', subprofessions: [] }
                    ]
                }
            ]
        }
    },
    methods:{
        selectProfession(profession){
            console.log(profession.subprofessions.length)
            if(!this.newSelectedProfession && profession.subprofessions.length !== 0){
                this.selectedProfessions.push(profession);
                this.newSelectedProfession = profession.id;
                setTimeout(()=>{this.newSelectedProfession = null}, 500)
            }
        },
        removeElementFromSelectedProfessions(element){
            console.log(element)
            if(element === 'last'){
                // Remove last profession from selected_prfessions array
                if(this.selectedProfessions.length !== 0){
                    this.selectedProfessions.splice(-1, 1);
                }
            }else{
                // Remove all subprofessions up to the selected profession from the selected_professions array.
                for (let i = this.selectedProfessions.length - 1; i >= 0; i--){
                    if(this.selectedProfessions[i] === element){
                        break
                    }else{
                        this.selectedProfessions.splice(i, 1);
                    }
                }
            }
        },
        selectedProfessionArrow(profession){
            // This function is check if profession in not last selected and return a arrow.
            if(this.selectedProfessions.indexOf(profession) !== this.selectedProfessions.length - 1){
                return '>'
            }
        }
    }
}
</script>

<style scoped>
#professionsXscrollBox{
    width: 100%;
    overflow-x: hidden;
}
#professionsMainBox{
    position: relative;
    display: flex;
    height: 427px;
    transition: 500ms;
    position: relative;
}
#guideBox h5:hover, #guideBox h3:hover{
    opacity: 1;
}
#guideBox h5{
    opacity: 0.5;
    margin: 0 3px;
    cursor: pointer;
    transition: 300ms;
}
#guideBox h3{
    opacity: 0.5;
    cursor: pointer;
    font-size: 30px;
    margin: 0 10px 0 10px;
    transition: 300ms;
}
#guideBox{
    height: 45px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 100%;
    overflow-y: hidden
}
.professions button h5{
    font-weight: 500;
    font-size: 20px;
    color: #222A4E;
    text-align: start;
}
.professions button:hover{
    background: rgba(70, 102, 211, 0.06);
}
.professions button{
    height: 83px;
    width: 100%;
    padding: 0 46px;
    transition: 300ms;
}
.professions div{
    width: 100%;
}
.professions::-webkit-scrollbar {
    width: 15px;
}

.professions::-webkit-scrollbar-thumb {
    height: 169px;
    background: rgba(70, 102, 211, 0.51);
    border-radius: 100px;
}

.professions::-webkit-scrollbar-track {
    background: transparent;
}
@-moz-document url-prefix() {
    .professions {
        scrollbar-color: rgba(70, 102, 211, 0.51) transparent;
    }
}
@keyframes showProfessions {
    0%{height: 0;}
    100%{height: 427px;}
}
.professions{
    animation: showProfessions 500ms;
    height: 427px;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: 500ms;
    display: flex;
    min-width: 1032px;
    max-width: 1032px;
}
#professionsSearchingBox button{
    width: 198px;
    height: 54px;
    background: #293E89;
    border-radius: 100px;
    color: #ffffff;
    font-size: 17;
    font-weight: 600;
}
#professionsSearchingBox input{
    padding: 0 20px;
    font-size: 17px;
}
#professionsBoxHeader{
    padding: 26px;
    padding-bottom: 0;
}
#professionsSearchingBox{
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 8px;
    height: 54px;
    background: #F5F5F5;
    border-radius: 100px;
}
#professionsBox{
    width: 1032px;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 35px;
    margin-top: 80px;
    padding-bottom: 29px;
}
.userTypeButtonsSelected{
    background-color: #293E89;
    color: #f5f5f5;
}
.userTypeButtons{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    width: 216px;
    height: 59px;
    border: 2px solid #293E89;
    border-radius: 100px;
    transition: 300ms;
}
.userTypeButtons:hover{
    background-color: #293E89;
    color: #f5f5f5;
}
#btnsBox{
    display: flex;
    justify-content: center;
    gap: 12px;
}
h2{
    font-weight: 700;
    font-size: 38px;
    line-height: 130%;
    text-align: center;
}
#mainInfo{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
}
section{
    display: grid;
    justify-content: center;
    padding: 50px 0;
    gap: 24px;
}
@media screen and (max-width: 1370px){
    h2{
        font-size: 30px;
    }
    
}
@media screen and (max-width: 1000px){
    h2{
        font-size: 20px;
    }
}
</style>