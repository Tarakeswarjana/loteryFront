import HttpClient from "./HttpClient"



const searchLoteryResult = async (gameDate, gameTime) => {
    let endpoint = `/fetch_first_result.php?game_date=${gameDate}&game_type=${gameTime}`
    const dataToSend = {}
    return await HttpClient.post(endpoint, dataToSend);
};
const searchsecondResult = async (gameDate, gameTime) => {
    let endpoint = `/fetch_second_third_result.php?game_date=${gameDate}&game_type=${gameTime}`
    const dataToSend = {}
    return await HttpClient.post(endpoint, dataToSend);
};

const getFourthResultData = async (gameDate, gameName) => {
    const endpoint = `/fetch_fifth_result.php?game_date=${gameDate}&game_type=${gameName}`;
    return await HttpClient.get(endpoint);
  };



const viewAllResult = async (gameTime) => {
    let endpoint = `/fetch_result.php?game_name=${gameTime}`
    const dataToSend = {}
    return await HttpClient.post(endpoint, dataToSend);
};

export {
    searchLoteryResult,
    viewAllResult,
    searchsecondResult,
    getFourthResultData
}