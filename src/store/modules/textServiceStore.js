import serviceApi from "@/api/getTextService";

const state = {
    textFromService: [],
    textState: {},
    isLoading: null,
    countErrors: 0,
    startPrintingTime: null,
};

export const mutationsTypes = {
    getTextStart: "[printing] getTextStart",
    getTextSuccess: "[printing] getTextSuccess",
    getTextFailure: "[printing] getTextFailure",

    changeLetterStatus: "[printing] changeLetterStatus",
    clearAllStatuses: "[printing] clearAllStatuses",

    incrementErrors: "[printing] incrementErrors",
    resetErrors: "[printing] resetErrors",
    setStartTime: "[printing] setStartTime",

    resetEverything: "[printing] resetEverything"
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
    },
    [mutationsTypes.clearAllStatuses]: (state) => {
        for (const key in state.textState) {
            state.textState[key].status = 'no-touch';
        }
    },
    [mutationsTypes.changeLetterStatus]: (state, payload) => {
        const idx = payload.index;
        state.textState[idx].status = payload.status;
    },
    [mutationsTypes.incrementErrors]: (state) => {
        state.countErrors++;
    },
    [mutationsTypes.resetErrors]: (state) => {
        state.countErrors = 0;
    },
    [mutationsTypes.setStartTime]: (state) => {
        state.startPrintingTime = new Date().getTime();
    },
    [mutationsTypes.resetEverything]: (state) => {
        state.textState = {};
        state.textFromService = [];
    }
};


const actions = {
    [actionTypes.getText](context) {
        return new Promise(() => {
            context.commit(mutationsTypes.getTextStart);
            context.commit(mutationsTypes.resetErrors);
            context.commit(mutationsTypes.resetEverything);
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