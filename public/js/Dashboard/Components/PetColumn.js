import React from 'react'
import PetList from "./PetList";
import AddPetOption from "./AddPetOption";

export default class PetColumn extends React.Component{
    state = {
        addPet : true
    }

    openAddPet = () => {
        this.setState(() => ({
            addPet : true
        }))
    }
    closeAddPet = () => {
        this.setState(() => ({
            addPet : false
        }))
    }
    render() {
        return (
            <div className="pet-column">
                <div className="petHeader" onClick={this.openAddPet}>
                    <h3>My Pets</h3>
                    <button className="editButton" >
                        Add Pet
                    </button>
                </div>
                {pet.map((pet) => (
                    <PetList key={pet._id} petName={pet.petname} />
                ))}
                <AddPetOption visible={this.state.addPet} closeAddPet = {this.closeAddPet} />
            </div>
        )
    }
}