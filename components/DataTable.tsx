import React, {FC, createContext, useContext, useState} from 'react';
import map from 'lodash/map'

const initialState = {
    page: 1,
    pageSize: 10,
    items: [],
    totalCount: 0,
    update: null
};

type PagedData<T> = {
    data: T[];
    page: number;
    pageSize: number;
    totalCount: number;
}

const DataTableContext = createContext(initialState);
const { Provider } = DataTableContext;

const DataTableProvider = ( { children } ) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [items, setItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const update = (pagedData: PagedData<any>) => {
        setPage(pagedData.page);
        setItems(pagedData.data);
        setTotalCount(pagedData.totalCount);
        setPageSize(pagedData.pageSize);

    }
  return <Provider value={{ page, pageSize, items, totalCount, update }}>{children}</Provider>;
};
const useDataTable = () => {
    const context = useContext(DataTableContext);
    const {items, page, update, pageSize, totalCount} = context;

    return {
        items, page, pageSize, update, totalCount
    };
}
type DataColumnProps = {
    name: string;
    headerTitle?: string;
    type?: 'action' | 'active' | 'date'; 
    renderRow?: (data: any) => any;
    renderHeader?: (data: any) => React.ReactElement;
}
const DataColumn: FC<DataColumnProps> = (props) => {
    return (null)
}
type DataTableProps = {
    items: any[];
    page?: number;
    pageSize?: number;
    totalCount?: number;
    children?: any;
}
const DataTable: FC<DataTableProps> = ({items, page, pageSize, totalCount, children}) => {
    
    const renderRows = () => {
        return (<tbody className="bg-white divide-y divide-gray-200">
            {map(items, (item, rowIndex) => {
                return (
                <tr key={`row-${rowIndex}`}>
                {React.Children.map(children, ({props}: {props: DataColumnProps}) => {
                    console.log("row", typeof(props), props);
                    return(
                    <td key={`row-${rowIndex}-${props.name}`} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {item[props.name]}
                    </td>
                    )
                })}
                </tr>)
            })}
        </tbody>)
    }
    const renderHeaders = () => {
        return (
        <thead className="bg-gray-50">
            <tr>
            {React.Children.map(children, ({props}: any) => {
                return (
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {props.name}
                </th>)
            })}
            </tr>
        </thead>)
    }
    return (
    <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                {renderHeaders()}
                {renderRows()}
            </table>
        </div>
        </div>
    </div>
    </div>
    )
}
DataTable.propTypes = {
    children: function (props, propName, componentName) {
      const prop = props[propName]
  
      let error = null
      React.Children.forEach(prop, function (child) {
        if (child.type !== DataColumn) {
          error = new Error('`' + componentName + '` children should be of type `DataColumn`.');
        }
      })
      return error
    }
  }
export { useDataTable, DataTable, DataColumn }