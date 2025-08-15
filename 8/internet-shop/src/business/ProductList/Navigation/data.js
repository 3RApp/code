import { navigationDictionary } from "../../../const";

export const buttons = {
    head: [{
        title: "<<",
        direction: navigationDictionary.first,
        isEdge: true
    }, {
        title: "<",
        direction: navigationDictionary.previous,
        isEdge: false
    }],
    tail: [{
        title: ">",
        direction: navigationDictionary.next,
        isEdge: false
    }, {
        title: ">>",
        direction: navigationDictionary.last,
        isEdge: true
    }],
}