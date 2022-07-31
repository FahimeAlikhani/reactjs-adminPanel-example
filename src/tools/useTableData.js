import { useState, useEffect } from "react";
import api from "../api/apiCallManager";

/**
 * get all TableData data
 */
export const useTableData = () => {
  const apiAbortController = new AbortController();
  const [TableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [FetchStatus, setFetchStatus] = useState(0);
  const reFetch = () => setFetchStatus(FetchStatus + 1);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await api.GetTableData({
          signal: apiAbortController.signal,
        });
        if (result.status === 200) {
          setTableData(result.data);
        } else {
          setTableData([]);
        }
      } catch (error) {
        if (!apiAbortController.signal.aborted) {
          setTableData([]);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      apiAbortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FetchStatus]);

  return { TableData, loading, error, setError, reFetch };
};
