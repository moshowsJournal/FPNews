import axios from "axios";

const endPoint = "https://free-news.p.rapidapi.com/v1/search?q=Elon Musk&lang=en"



export const getAPIs = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${endPoint}`, {
          headers: {
            'X-RapidAPI-Key': '8bfb14ec65mshb42c0653cd552b2p182397jsn8ad77dddcb61',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
          },
          timeout : 5000
        })
        .then((result : any )=> {
          resolve(result.data);
        })
        .catch((error : any) => {
          if (
            error.response && error.response.data && 
            error.response.data.detail && typeof(error.response.data.detail) === "string"
          ) {
            reject({status: 400, msg:error.response.data.detail});
          } else {
            reject({status: 500, msg: 'Something went wrong. Please try again later'});
          }
        });
    });
  };