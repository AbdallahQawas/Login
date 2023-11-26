import axios from "axios";
import { DataTableClass } from "./DataTableAPI.models";

function DataTableAPI() {
  async function getDataTable() {
    const newClass = new DataTableClass();
    const dataTable = await axios({
      method: "get",
      url: "http://localhost:3001/data/",
    });
    newClass.setData(dataTable.data);
    return newClass;
  }
  return { getDataTable };
}

export default DataTableAPI;
