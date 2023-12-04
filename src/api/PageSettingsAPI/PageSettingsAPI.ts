import axios from "axios";
import { PageSettingsClass } from "./PageSettingsAPI.models";

function PageSettingsAPI() {
  async function getSettingsAPI(): Promise<PageSettingsClass> {
    const newClass = new PageSettingsClass();
    const pageSettings = await axios({
      method: "get",
      url: "http://localhost:3001/pageSettings/",
    });
    newClass.setData(pageSettings.data);
    return newClass;
  }
  return { getSettingsAPI };
}

export default PageSettingsAPI;
