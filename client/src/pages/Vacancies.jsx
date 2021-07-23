import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

const Vacancies = () => {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    return (
        <>
            <div>
                <h4>Вакансии</h4>
            </div>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    {...data}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    filterModel={{
                        items: [
                            { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
                        ],
                    }}
                />
            </div>
        </>

    );
}

export default Vacancies;
