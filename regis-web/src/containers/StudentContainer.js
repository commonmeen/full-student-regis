import { connect } from 'react-redux';
import StudentForm from '../components/StudentForm';
import {insertStudent,getAllStudent, deleteAllStudent} from '../actions/StudentAction'
import axios from 'axios';
import { async } from 'q';


const mapDispatchToProps = (dispatch) => ({
    insertStudent: async (data) => {
        try {
            const save = await axios.post("http://localhost:8080/api/save",data)
            dispatch(insertStudent(save))
        } catch (error) {
            console.log("Error message",error.message)
        }
    },
    getAllStudent:async () =>{
        try {
            const response = await axios.get("http://localhost:8080/api/all")
            const newData = await response.data
            dispatch(getAllStudent(newData))
        } catch (error) {
            console.log("Error message",error.message)
        }
    },
    deleteAllStudent:async () =>{
        try {
            const response = await axios.delete("http://localhost:8080/api/delete/all")
            const newData = await response.data
            dispatch(deleteAllStudent(newData))
        } catch (error) {
            console.log("Error message",error.message)
        }
    }


})

const mapStateToProps = (state) => {
    const { result } = state.form;
    console.log("Map state: ",result)
    return {
        result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)