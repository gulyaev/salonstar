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

            <div class="col s12 m6">
                <div class="card small">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6" alt=''/>
                        <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col s12 m6">
                <div class="card small">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6" />
                        <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Vacancies;
