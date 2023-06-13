import getDifferenceInSeconds from "@/helpers/getDifferenceInSeconds.js";

export default function getSpeed(inputLength, start) {
    return Number(inputLength * 60 / getDifferenceInSeconds(start));
}