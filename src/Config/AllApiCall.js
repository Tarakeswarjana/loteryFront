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
const getAllTime = async () => {
    const endpoint = `/fetch_baji_timimng.php?game_type`;
    return await HttpClient.get(endpoint);
};


function parseTimeToDate(timeString) {
    let [hours, minutes] = timeString.split(':').map(Number);
    let date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}
const now = new Date();
// // Function to check if the current time is after the target time
// function isTimeAfter(targetTime) {
//     let targetDate = parseTimeToDate(targetTime);
//     // If target time is before the current time, consider it the next day
//     if (targetDate < now) {
//         targetDate.setDate(targetDate.getDate() - 1);
//     }
//     return now > targetDate;
// }

// // Function to check if the current time is before the target time
// function isTimeBefore(targetTime) {
//     let targetDate = parseTimeToDate(targetTime);
//     // If target time is before the current time, consider it the next day
//     if (targetDate < now) {
//         targetDate.setDate(targetDate.getDate() + 1);
//     }
//     return now < targetDate;
// }

const viewliveUrl = async (gameDate, gameTime) => {
    // const alltime = await getAllTime();

    // let morningtime = alltime.data.filter(ele => ele.game_name.toLowerCase() === "morning");
    // let noontime = alltime.data.filter(ele => ele.game_name.toLowerCase() === "noon");
    // let Eveningtime = alltime.data.filter(ele => ele.game_name.toLowerCase() === "evening");

    // let currentGameTime = "Unknown";

    // if (morningtime.length > 0 && noontime.length > 0 && Eveningtime.length > 0) {
    //     // Check if current time is within the morning and noon range
    //     if (isTimeAfter(morningtime[0].game_time) && isTimeBefore(noontime[0].game_time)) {
    //         currentGameTime = "Morning";
    //     }

    //     // Check if current time is within the noon and evening range
    //     if (isTimeAfter(noontime[0].game_time) && isTimeBefore(Eveningtime[0].game_time)) {
    //         currentGameTime = "Noon";
    //     }

    //     // Check if current time is within the evening and morning range
    //     if (isTimeAfter(Eveningtime[0].game_time) && isTimeBefore(morningtime[0].game_time)) {
    //         currentGameTime = "Evening";
    //     }
    // }


    // console.log(gameTime, "6666");

    // if(2PM>new Date()<6:30Pm){
    // gameTime="Morning"
    // }


    let endpoint = `/fetch_youtubeUrl.php?game_type=${gameTime}&game_date=${gameDate}`
    const dataToSend = {}
    return await HttpClient.post(endpoint, dataToSend);
};



const viewAllResult = async (gameTime) => {
    let endpoint = `/fetch_result.php?game_name=${gameTime}`
    const dataToSend = {}
    return await HttpClient.post(endpoint, dataToSend);
};

// const viewLiveResult = async (gameTime) => {
//     let endpoint = `/fetch_youtubeUrl.php?game_type=Morning&game_date=${gameTime}`
//     const dataToSend = {}
//     return await HttpClient.post(endpoint, dataToSend);
// };
// https://7star.in.net/hongkong/admin/api/fetch_youtubeUrl.php?game_type=Morning&game_date=29-08-2024 

export {
    searchLoteryResult,
    viewAllResult,
    searchsecondResult,
    viewliveUrl
}