import React, { useMemo, forwardRef, useEffect, useRef, useState } from "react";
import { useStyle } from "../../assets/styles/request";
import FilterInput from "../../components/inputs/FilterInput";
import { useTableData } from "../../tools/useTableData";
import Spinner from "../../components/Spinner";
import TableActionBtn from "../../components/button/TableActionBtn";
import {
  useTable,
  useGlobalFilter,
  useRowSelect,
  usePagination,
} from "react-table";

const MenuTwo = () => {
  const classes = useStyle();
  const [loadStatus, setLoadStatus] = useState(false);
  const { TableData, loading, reFetch } = useTableData();
  const data = useMemo(() => TableData, [loading]);
  const tr = useRef();
  const tableBody = useRef();
  const tableRow = useRef();
  const dragItem = useRef();
  const dragNode = useRef();

  const onDragOver = (e) => e.preventDefault();
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربر",
        accessor: "full_name",
        draggable: false,
      },
      {
        Header: "شماره تماس",
        accessor: "phone_number",
        draggable: true,
      },
      {
        Header: "ایمیل",
        accessor: "email",
        draggable: true,
      },
      {
        Header: "متن",
        accessor: "message", 
        draggable: true,
      },

      {
        Header: "زمان",
        accessor: "create_date",
        draggable: true,
      },
      {
        Header: "",
        id: "actions",
        accessor: "actions",
        Cell: (props) => (
          <TableActionBtn
            rowId={props?.cell?.row?.values?.id}
            reFetch={reFetch}
            setLoading={setLoadStatus}
          />
        ),
      },
    ],
    []
  );
  const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef();
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  const onDrag = (e) => {
    e.target.style.backgroundColor = "#019CD5";
    e.target.style.color = "#FFFFFF";
    tableRow.current = tableBody.current.childNodes;
    dragItem.current = Array.from(tr.current.childNodes).indexOf(e.target);
    dragNode.current = e.target;
  };

  const onDrop = (e) => {
    e.target.style.backgroundColor = "#FFFFFF";
    e.target.style.color = "#797877";
    const previous = dragItem.current;
    const newIndex = Array.from(tr.current.childNodes).indexOf(e.target);
    if (e.target !== dragNode.current) {
      if (newIndex > previous) {
        tr.current.insertBefore(
          tr.current.childNodes[previous],
          tr.current.childNodes[newIndex + 1]
        );
        tableRow.current.forEach((item) => {
          item.insertBefore(
            item.childNodes[previous],
            item.childNodes[newIndex + 1]
          );
        });
      } else {
        tr.current.insertBefore(
          tr.current.childNodes[previous],
          tr.current.childNodes[newIndex]
        );
        tableRow.current.forEach((item) => {
          item.insertBefore(
            item.childNodes[previous],
            item.childNodes[newIndex]
          );
        });
      }
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    // nextPage,
    // previousPage,
  } = useTable(
    { columns, data, initialState: { pageSize: 8 } },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  const { GlobalFilter } = state;

  return (
    <div>
      <div className={classes.filterContainer}>
        <FilterInput
          filter={GlobalFilter}
          setFilter={setGlobalFilter}
          placeholder="جستجو درخواست ها، ایمیل ها و ..."
        />
        {(loading || loadStatus) && <Spinner />}
      </div>

      <div className={classes.tableContainer}>
        <table {...getTableProps()} className={classes.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                className={classes.tableHeader}
                ref={tr}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      className={
                        column.draggable
                          ? classes.draggableThBody
                          : classes.thBody
                      }
                      onDragOver={onDragOver}
                      draggable={column.draggable}
                      onDragStart={column.draggable ? onDrag : null}
                      onDragEnter={column.draggable ? onDrop : null}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            className={classes.tbody}
            {...getTableBodyProps()}
            ref={tableBody}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className={classes.trBody} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className={classes.tdBody} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuTwo;
