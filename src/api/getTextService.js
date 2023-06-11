import axios from "@/api/axios";

const getTextService = () => {
    return axios.get("/api/?type=meat-and-filler")
}

export default { getTextService };