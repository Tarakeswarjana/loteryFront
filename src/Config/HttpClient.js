const BASE_URL = "https://7star.in.net/hongkong/admin/api";




function get(endpoint, params) {
    return requestData(endpoint, params);
}

function post(endpoint, params) {
    return requestData(endpoint, params, "POST");
}

function put(endpoint, params) {
    return requestData(endpoint, params, "PUT");
}

function deletemethod(endpoint, params) {
    return requestData(endpoint, params, "POST");
}

async function requestData(url, data = {}, method = "GET") {
    const headers = new Headers();
    let options = { method, headers };

    if (method === "POST" || method === "PUT" || method === "PATCH") {
        headers.set("Content-Type", "application/json"); // Assuming JSON payload
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(BASE_URL + url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
        }

        const contentType = response.headers.get("Content-Type");
        let responseData;
        if (contentType && contentType.includes("application/json")) {
            responseData = await response.json();
        } else if (contentType && contentType.includes("text/html")) {
            responseData = await response.json();
        } else if (contentType && contentType.includes("text/plain")) {
            responseData = await response.json();
        } else if (contentType && contentType.includes("application/x-www-form-urlencoded")) {
            const formData = await response.json();
            responseData = Object.fromEntries(new URLSearchParams(formData).entries());
        } else {
            responseData = await response.json();
        }

        return responseData;

    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}





const request = {
    requestData,

    get,
    post,

    put,
    deletemethod,
    BASE_URL,
};
export default request;