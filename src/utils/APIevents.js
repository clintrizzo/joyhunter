import axios from "axios";

// function APIevents  () {
//    const getEvent = () => {
//        return axios.get("/api/events/")
//    }
   
//}

// export default APIevents;

export default {
    getEvent: () => {
        return axios.get("/api/events")
    }
}