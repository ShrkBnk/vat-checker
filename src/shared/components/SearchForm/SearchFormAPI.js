import axios from "axios";

export function fetchAgainstErplyChecker(VAT) {

    const URL = `https://vat.erply.com/numbers?vatNumber=${VAT}`;

    return axios.get(URL)
        .then((json) => json.data)
        .catch((error) => {
            console.warn(error);
            return false;
        });
}
