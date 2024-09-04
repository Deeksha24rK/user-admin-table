// https://chancejs.com/person/name.html

import Chance from "chance";

export const fakeUserData = () => {
    const chance = new Chance();
    return chance.name({ middle: true })
}