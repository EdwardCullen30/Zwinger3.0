import React from 'react'
import ReactModal from 'react-modal';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const initialState = {
    petname : '',
    petBreed : '',
    petBirth : "",
    petGender : '',
    petWeight : '',
    photoURL : '/images/logos/camera.png'
}

let valid = false

class AddPetOption extends React.Component{
    state = {
        petType : 'Dog',
        ...initialState,
        checkbox : [],
        currentStep : 1
    }
    handlePetTypeChange = (e) => {
        this.setState({
            petType: e.currentTarget.value
        })
    }
    handleNext = () => {
        this.handleValidate()
        console.log(valid)
        if(valid){
            return null
        }
        this.setState((prevState) => ({
            currentStep : prevState.currentStep + 1
        }))
    }
    handlePrev = () => {
        this.setState((prevState) => ({
            currentStep : prevState.currentStep - 1
        }))
    }
    handleInputChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if(name === 'petBirth'){
            value = e.target.valueAsNumber
        }
        this.setState(() => ({
            [name]: value,
        }));
    }
    handleCheckBoxChange = (e) => {
        const value = e.target.value
        const checkbox = this.state.checkbox
        if(checkbox.includes(value)){
            checkbox.splice(checkbox.indexOf(value), 1)
        }
        else{
            checkbox.push(value)
        }
        this.setState(() => ({
            checkbox
        }))
    }
    handlePhotoUpload = (e) => {
        const photoURL = URL.createObjectURL(e.target.files[0])
        this.setState(() => ({
            photoURL
        }))
    }
    handleValidate = () => {
        if(this.state.currentStep === 2){
            const stateValues = Object.values(this.state)
            console.log(stateValues)
            if(stateValues.includes("")){
                valid = true
                return null
            }
        }
        valid = false
    }
    render() {
        return (
            <ReactModal
                isOpen={this.props.visible}
                onRequestClose={this.props.closeAddPet}
                className={'addPetWrap'}
                ariaHideApp={false}
            >
                <div className={'addPetContainer'}>
                    <form action="/users/addpet" id="addPetForm" method="POST" encType="multipart/form-data">
                        <Step1 petType={this.state.petType} handlePetTypeChange = {this.handlePetTypeChange} currentStep={this.state.currentStep} />
                        <Step2 petType={this.state.petType}
                               currentStep={this.state.currentStep}
                               states={this.state}
                               handleInputChange = {this.handleInputChange}
                               handlePhotoUpload = {this.handlePhotoUpload}
                        />
                        <Step3 petType={this.state.petType}
                               currentStep={this.state.currentStep}
                               states={this.state}
                               handleInputChange = {this.handleInputChange}
                               handleCheckBoxChange = {this.handleCheckBoxChange}
                        />
                        <Step4 petType={this.state.petType}
                               currentStep={this.state.currentStep}
                               states={this.state}
                        />
                        <div className="addPetFooter">
                            {(this.state.currentStep !== 1) && <button type="button" id="prevBtn" onClick={this.handlePrev} >Previous</button>}
                            <button type="button"
                                    id="nextBtn"
                                    onClick={this.handleNext}
                            >
                                {this.state.currentStep === 4 ? 'Submit' : 'Next'}
                            </button>
                        </div>
                    </form>
                </div>
            </ReactModal>
        )
    }
}

export default AddPetOption
