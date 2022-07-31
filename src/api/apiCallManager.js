import API from "./API-config";
import * as URI from "./uri";
/**
 * api class
 * ex : const res = await api.login({user,pass})
 */
class apiCallManager {
  login(values) {
    return API.post(URI.LOGIN, values, {
      headers: { "Content-Type": "application/json" },
    });
  }
  GetTableData() {
    return API.get(URI.TABLEDATA, {
      headers: { "Content-Type": "application/json" },
    });
  }
  DeleteTableRow(id) {
    return API.delete(`${URI.TABLEDATA}/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
  }
  // GetServicesData() {
  //   return API.get(URI.SERVICESDATA, {
  //     headers: { "application/json": "application/json" },
  //   });
  // }
  // GetGaleryData() {
  //   return API.get(URI.GALERYDATA, {
  //     headers: { "application/json": "application/json" },
  //   });
  // }
  // GetProjectData() {
  //   return API.get(URI.PROJECTDATA, {
  //     headers: { "application/json": "application/json" },
  //   });
  // }
}

const api = new apiCallManager();
export default api;
