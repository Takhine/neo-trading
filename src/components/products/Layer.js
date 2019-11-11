import React from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const Layer = () => {
    const tables = [
        {
            id: 1,
            heading: 'Chicks',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Formula'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        { id: 1, data: 'Maize' },
                        { id: 2, data: '592.5 kgs' },
                    ]
                },
                {
                    id: 2,
                    data: [
                        { id: 1, data: 'Soya De- Oiled Cake' },
                        { id: 2, data: '300 kgs' },
                    ]
                },
                {
                    id: 3,
                    data: [
                        { id: 1, data: 'Limestone' },
                        { id: 2, data: '7.5 kgs' },
                    ]
                },
                {
                    id: 4,
                    data: [
                        { id: 1, data: 'Deoiled Rice Bran' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 5,
                    data: [
                        { id: 1, data: 'Neomax' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 6,
                    data: [
                        { id: 1, data: 'Total' },
                        { id: 2, data: '1000 kgs' },
                    ]
                }
            ]
        },
        {
            id: 2,
            heading: 'Layer 1',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Formula'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        { id: 1, data: 'Maize' },
                        { id: 2, data: '580 kgs' },
                    ]
                },
                {
                    id: 2,
                    data: [
                        { id: 1, data: 'Soya De- Oiled Cake' },
                        { id: 2, data: '210 kgs' },
                    ]
                },
                {
                    id: 3,
                    data: [
                        { id: 1, data: 'Limestone' },
                        { id: 2, data: '95 kgs' },
                    ]
                },
                {
                    id: 4,
                    data: [
                        { id: 1, data: 'Deoiled Rice Bran' },
                        { id: 2, data: '65 kgs' },
                    ]
                },
                {
                    id: 5,
                    data: [
                        { id: 1, data: 'Neomax' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 6,
                    data: [
                        { id: 1, data: 'Total' },
                        { id: 2, data: '1000 kgs' },
                    ]
                }
            ]
        },
        {
            id: 3,
            heading: 'Grower',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Formula'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        { id: 1, data: 'Maize' },
                        { id: 2, data: '670 kgs' },
                    ]
                },
                {
                    id: 2,
                    data: [
                        { id: 1, data: 'Soya De- Oiled Cake' },
                        { id: 2, data: '180 kgs' },
                    ]
                },
                {
                    id: 3,
                    data: [
                        { id: 1, data: 'Limestone' },
                        { id: 2, data: '10 kgs' },
                    ]
                },
                {
                    id: 4,
                    data: [
                        { id: 1, data: 'Deoiled Rice Bran' },
                        { id: 2, data: '90 kgs' },
                    ]
                },
                {
                    id: 5,
                    data: [
                        { id: 1, data: 'Neomax' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 6,
                    data: [
                        { id: 1, data: 'Total' },
                        { id: 2, data: '1000 kgs' },
                    ]
                }
            ]
        },
        {
            id: 4,
            heading: 'Layer 2',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Formula'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        { id: 1, data: 'Maize' },
                        { id: 2, data: '600 kgs' },
                    ]
                },
                {
                    id: 2,
                    data: [
                        { id: 1, data: 'Soya De- Oiled Cake' },
                        { id: 2, data: '190 kgs' },
                    ]
                },
                {
                    id: 3,
                    data: [
                        { id: 1, data: 'Limestone' },
                        { id: 2, data: '100 kgs' },
                    ]
                },
                {
                    id: 4,
                    data: [
                        { id: 1, data: 'Deoiled Rice Bran' },
                        { id: 2, data: '60 kgs' },
                    ]
                },
                {
                    id: 5,
                    data: [
                        { id: 1, data: 'Neomax' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 6,
                    data: [
                        { id: 1, data: 'Total' },
                        { id: 2, data: '1000 kgs' },
                    ]
                }
            ]
        },
        {
            id: 5,
            heading: 'Pre Layer',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Formula'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        { id: 1, data: 'Maize' },
                        { id: 2, data: '630 kgs' },
                    ]
                },
                {
                    id: 2,
                    data: [
                        { id: 1, data: 'Soya De- Oiled Cake' },
                        { id: 2, data: '200 kgs' },
                    ]
                },
                {
                    id: 3,
                    data: [
                        { id: 1, data: 'Limestone' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 4,
                    data: [
                        { id: 1, data: 'Deoiled Rice Bran' },
                        { id: 2, data: '70 kgs' },
                    ]
                },
                {
                    id: 5,
                    data: [
                        { id: 1, data: 'Neomax' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 6,
                    data: [
                        { id: 1, data: 'Total' },
                        { id: 2, data: '1000 kgs' },
                    ]
                }
            ]
        },
        {
            id: 6,
            heading: 'Layer 3',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Formula'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        { id: 1, data: 'Maize' },
                        { id: 2, data: '600 kgs' },
                    ]
                },
                {
                    id: 2,
                    data: [
                        { id: 1, data: 'Soya De- Oiled Cake' },
                        { id: 2, data: '170 kgs' },
                    ]
                },
                {
                    id: 3,
                    data: [
                        { id: 1, data: 'Limestone' },
                        { id: 2, data: '105 kgs' },
                    ]
                },
                {
                    id: 4,
                    data: [
                        { id: 1, data: 'Deoiled Rice Bran' },
                        { id: 2, data: '75 kgs' },
                    ]
                },
                {
                    id: 5,
                    data: [
                        { id: 1, data: 'Neomax' },
                        { id: 2, data: '50 kgs' },
                    ]
                },
                {
                    id: 6,
                    data: [
                        { id: 1, data: 'Total' },
                        { id: 2, data: '1000 kgs' },
                    ]
                }
            ]
        }
    ]
    return (
        <div className="layer container">
            <h3 className="main-heading">5% Layer Concentrate</h3>
            <p></p>
            <Grid container spacing={2}>
                {tables.map((table) => {
                    return (
                        <Grid key={table.id} item xs={12} md={6} lg={4}>
                            <h4 className="table-heading">{table.heading}</h4>
                            <Fade>
                                <Paper>
                                    <Table className="table" size="small" aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                {table.header.map((header) => {
                                                    return (
                                                        <TableCell key={header.id}>{header.title}</TableCell>
                                                    )
                                                })
                                                }
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {table.rows.map((row) => {
                                                return (
                                                    <TableRow hover key={row.id}>
                                                        {row.data.map((data) => {
                                                            return (
                                                                <TableCell key={data.id} align="left">
                                                                    {data.data}
                                                                </TableCell>
                                                            )
                                                        })
                                                        }
                                                    </TableRow>
                                                )
                                            })
                                            }
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Fade>
                        </Grid>
                    )
                })

                }
            </Grid>
        </div>
    )
}

export default Layer;