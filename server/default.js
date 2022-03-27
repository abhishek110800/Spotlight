import fetch from "node-fetch";
import News from "./modal/news.js";

const DefaultData = async (category) => {
  try {
      const url = `https://inshortsapi.vercel.app/news?category=${category}`;
      const response = await fetch(url);
      const apiData = await response.json();
  
      await News.deleteMany({});
      await News.insertMany(apiData.data);
  
      console.log("Data Imported successfully");
    
  } catch (error) {
    console.log("Error " + error.message);
  }
};

export default DefaultData;
