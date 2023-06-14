import serviceApi from "@/api/getTextService.js";
import Aim from "@/assets/icons/aim.svg";
import Speed from "@/assets/icons/speed.svg";
import Time from "@/assets/icons/time.svg";

const state = {
    lettersArray: [],
    letters: {},
    isLoading: null,
    countErrors: 0,
    startPrintingTime: null,
    cards: {
        accuracy: {
            id: 1,
            title: "Точность",
            icon: Aim,
            alt: "Точность",
            measure: "%",
            value: 0
        },
        speed: {
            id: 2,
            title: "Скорость",
            icon: Speed,
            alt: "Скорость",
            measure: "зн/м",
            value: 0
        },
        time: {
            id: 3,
            title: "Время",
            icon: Time,
            alt: "Время",
            measure: "cек",
            value: 0
        }
    },
    input: "",
    timer: null,
    isModal: false,
    isError: false,
    speed: "0",
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
    reset: "[printing] reset",
    set_accuracy: "[printing] set accuracy",
    set_time: "[printing] set time",
    set_speed: "[printing] set speed",
    toggleModal: "[printing] toggleModal",
    isErrorToggle: "[printing] isErrorToggle",
    setInput: "[printing] setInput",
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
        state.lettersArray = payload[0].split("");
        state.lettersArray.forEach((el, idx) => {
            state.letters[idx] = {
                value: el,
                status: 'no-touch'
            };
        })
    },
    [mutationsTypes.getTextFailure]: (state) => {
        state.isLoading = false;
    },
    [mutationsTypes.clearAllStatuses]: (state) => {
        for (const key in state.letters) {
            state.letters[key].status = 'no-touch';
        }
    },
    [mutationsTypes.changeLetterStatus]: (state, payload) => {
        const idx = payload.index;
        state.letters[idx].status = payload.status;
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
    [mutationsTypes.reset]: (state) => {
        state.letters = {};
        state.lettersArray = [];
    },
    [mutationsTypes.set_accuracy]: (state, payload) => {
        state.cards.accuracy.value = payload;
    },
    [mutationsTypes.set_time]: (state, payload) => {
        state.cards.time.value = payload;
    },
    [mutationsTypes.set_speed]: (state, payload) => {
        state.cards.speed.value = payload;
        state.speed = payload;
    },
    [mutationsTypes.toggleModal]: (state, payload) => {
        state.isModal = payload;
    },
    [mutationsTypes.isErrorToggle]: (state, payload) => {
        state.isError = payload;
    },
    [mutationsTypes.setInput]: (state, payload) => {
        state.input = payload;
    }
};


const actions = {
    [actionTypes.getText](context) {
        return new Promise(() => {
            context.commit(mutationsTypes.getTextStart);
            context.commit(mutationsTypes.resetErrors);
            context.commit(mutationsTypes.reset);
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