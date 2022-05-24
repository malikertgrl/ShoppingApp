import { ApiUtils } from "./apiUtils"
const baseUrl = "https://628d4270a3fd714fd041ce51.mockapi.io/api/Products"

export default {
    allProducts: function () {
        return fetch(
            baseUrl
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    },
}