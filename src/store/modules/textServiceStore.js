import serviceApi from "@/api/getTextService";

const state = {
    textFromService: [],
    textState: {},
    isLoading: null,
};

export const mutationsTypes = {
    getTextStart: "[printing] getTextStart",
    getTextSuccess: "[printing] getTextSuccess",
    getTextFailure: "[printing] getTextFailure",
};
export const actionTypes = {
    getText: "[printing] getText"
};
const mutations = {
    [mutationsTypes.getTextStart]: (state) => {
        state.isLoading = true;
    },
    [mutationsTypes.getTextSuccess]: (state, payload) => {
        state.isLoading = false;
        state.textFromService = payload[0].split("");
        state.textFromService.forEach((el, idx) => {
            state.textState[idx] = {
                value: el,
                status: 'no-touch'
            };
        })
    },
    [mutationsTypes.getTextFailure]: (state) => {
        state.isLoading = false;
    }
};


const actions = {
    [actionTypes.getText](context) {
        return new Promise((resolve) => {
            context.commit(mutationsTypes.getTextStart);
            serviceApi
                .getTextService()
                .then((response) => context.commit(mutationsTypes.getTextSuccess, response.data))
                .catch((error) => {
                    console.log("errors:", error);
                    context.commit(mutationsTypes.getTextFailure);
                })
        })
    }
};

export default {
    state,
    actions,
    // actionTypes,
    mutations,
    // mutationsTypes,
};